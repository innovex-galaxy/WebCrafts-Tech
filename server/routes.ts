import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";
import { 
  appendContactSubmission, 
  appendNewsletterSubscription,
  createContactFormSheet,
  createNewsletterSheet 
} from "./googleSheets";

const CONTACT_SHEET_ID = process.env.CONTACT_SHEET_ID || "";
const NEWSLETTER_SHEET_ID = process.env.NEWSLETTER_SHEET_ID || "";

export async function registerRoutes(app: Express): Promise<Server> {
  
  app.get("/api/debug-env", async (req, res) => {
    res.json({
      contactSheetId: CONTACT_SHEET_ID,
      newsletterSheetId: NEWSLETTER_SHEET_ID,
      hasContactId: !!CONTACT_SHEET_ID,
      hasNewsletterId: !!NEWSLETTER_SHEET_ID
    });
  });

  app.post("/api/setup-sheets", async (req, res) => {
    try {
      const contactSheetId = await createContactFormSheet();
      const newsletterSheetId = await createNewsletterSheet();
      
      res.json({ 
        success: true, 
        data: { 
          contactSheetId,
          newsletterSheetId,
          message: "Spreadsheets created successfully. Please add these IDs to your environment secrets as CONTACT_SHEET_ID and NEWSLETTER_SHEET_ID"
        }
      });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        error: error.message || "Failed to create spreadsheets" 
      });
    }
  });
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      if (CONTACT_SHEET_ID) {
        try {
          await appendContactSubmission(CONTACT_SHEET_ID, validatedData);
        } catch (error) {
          console.error("Failed to save to Google Sheets:", error);
        }
      }
      
      res.json({ success: true, data: submission });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromError(error);
        return res.status(400).json({ 
          success: false, 
          error: validationError.toString() 
        });
      }
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit contact form" 
      });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch contact submissions" 
      });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(validatedData);
      
      if (NEWSLETTER_SHEET_ID) {
        try {
          await appendNewsletterSubscription(NEWSLETTER_SHEET_ID, validatedData.email);
        } catch (error) {
          console.error("Failed to save to Google Sheets:", error);
        }
      }
      
      res.json({ success: true, data: subscription });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromError(error);
        return res.status(400).json({ 
          success: false, 
          error: validationError.toString() 
        });
      }
      if (error.message === "Email already subscribed") {
        return res.status(400).json({ 
          success: false, 
          error: "This email is already subscribed to our newsletter" 
        });
      }
      res.status(500).json({ 
        success: false, 
        error: "Failed to subscribe to newsletter" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
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

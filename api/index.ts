import type { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';

async function getGoogleSheetsClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!email || !privateKey) {
    console.log('Google Sheets credentials not configured');
    return null;
  }

  const auth = new google.auth.JWT(
    email,
    undefined,
    privateKey,
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  return google.sheets({ version: 'v4', auth });
}

async function appendToSheet(spreadsheetId: string, range: string, values: any[][]) {
  const sheets = await getGoogleSheetsClient();
  if (!sheets) return;
  
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values }
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Parse the path from the URL
  const url = new URL(req.url || '', `https://${req.headers.host}`);
  let path = url.pathname;
  
  // Remove /api prefix if present
  if (path.startsWith('/api')) {
    path = path.substring(4);
  }
  
  // Remove trailing slash
  if (path.endsWith('/') && path !== '/') {
    path = path.slice(0, -1);
  }

  console.log('API Request:', { method: req.method, path, url: req.url });

  try {
    // Health check
    if (path === '/health' || path === '' || path === '/') {
      return res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
    }

    // Contact form
    if (req.method === 'POST' && path === '/contact') {
      const { name, email, projectType, budget, message } = req.body || {};

      console.log('Contact submission:', { name, email, projectType, budget });

      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          error: 'Name, email, and message are required' 
        });
      }

      const sheetId = process.env.CONTACT_SHEET_ID;
      if (sheetId) {
        try {
          await appendToSheet(sheetId, 'Contact Submissions!A:F', [[
            new Date().toISOString(),
            name,
            email,
            projectType || '',
            budget || '',
            message
          ]]);
          console.log('Contact saved to Google Sheets');
        } catch (sheetError) {
          console.error('Google Sheets error:', sheetError);
        }
      } else {
        console.log('CONTACT_SHEET_ID not configured');
      }

      return res.status(200).json({ 
        success: true, 
        data: { name, email, projectType, budget, message }
      });
    }

    // Newsletter
    if (req.method === 'POST' && path === '/newsletter') {
      const { email } = req.body || {};

      console.log('Newsletter subscription:', { email });

      if (!email) {
        return res.status(400).json({ 
          success: false, 
          error: 'Email is required' 
        });
      }

      const sheetId = process.env.NEWSLETTER_SHEET_ID;
      if (sheetId) {
        try {
          await appendToSheet(sheetId, 'Subscribers!A:B', [[
            new Date().toISOString(),
            email
          ]]);
          console.log('Newsletter saved to Google Sheets');
        } catch (sheetError) {
          console.error('Google Sheets error:', sheetError);
        }
      } else {
        console.log('NEWSLETTER_SHEET_ID not configured');
      }

      return res.status(200).json({ 
        success: true, 
        data: { email }
      });
    }

    // Not found
    console.log('Route not found:', path);
    return res.status(404).json({ error: 'Not found', path });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
}

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';

async function getGoogleSheetsClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!email || !privateKey) {
    throw new Error('Google Sheets credentials not configured');
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
  
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values }
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const path = req.url?.replace('/api', '') || '';

  try {
    if (req.method === 'POST' && path === '/contact') {
      const { name, email, projectType, budget, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'Name, email, and message are required' 
        });
      }

      const sheetId = process.env.CONTACT_SHEET_ID;
      if (sheetId) {
        await appendToSheet(sheetId, 'Contact Submissions!A:F', [[
          new Date().toISOString(),
          name,
          email,
          projectType || '',
          budget || '',
          message
        ]]);
      }

      return res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully' 
      });
    }

    if (req.method === 'POST' && path === '/newsletter') {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ 
          success: false, 
          message: 'Email is required' 
        });
      }

      const sheetId = process.env.NEWSLETTER_SHEET_ID;
      if (sheetId) {
        await appendToSheet(sheetId, 'Subscribers!A:B', [[
          new Date().toISOString(),
          email
        ]]);
      }

      return res.status(200).json({ 
        success: true, 
        message: 'Subscribed successfully' 
      });
    }

    if (req.method === 'GET' && path === '/health') {
      return res.status(200).json({ status: 'ok' });
    }

    return res.status(404).json({ message: 'Not found' });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
}

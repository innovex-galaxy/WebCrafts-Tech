import { google } from 'googleapis';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-sheet',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Google Sheet not connected');
  }
  return accessToken;
}

export async function getUncachableGoogleSheetClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.sheets({ version: 'v4', auth: oauth2Client });
}

export async function createContactFormSheet() {
  const sheets = await getUncachableGoogleSheetClient();
  
  const spreadsheet = await sheets.spreadsheets.create({
    requestBody: {
      properties: {
        title: 'WebCraft Contact Form Submissions'
      },
      sheets: [
        {
          properties: {
            title: 'Contact Submissions'
          },
          data: [
            {
              rowData: [
                {
                  values: [
                    { userEnteredValue: { stringValue: 'Timestamp' } },
                    { userEnteredValue: { stringValue: 'Name' } },
                    { userEnteredValue: { stringValue: 'Email' } },
                    { userEnteredValue: { stringValue: 'Project Type' } },
                    { userEnteredValue: { stringValue: 'Budget' } },
                    { userEnteredValue: { stringValue: 'Message' } }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  });

  return spreadsheet.data.spreadsheetId!;
}

export async function appendContactSubmission(
  spreadsheetId: string,
  data: {
    name: string;
    email: string;
    projectType: string;
    budget: string;
    message: string;
  }
) {
  const sheets = await getUncachableGoogleSheetClient();
  
  const timestamp = new Date().toISOString();
  
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Contact Submissions!A:F',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          timestamp,
          data.name,
          data.email,
          data.projectType,
          data.budget,
          data.message
        ]
      ]
    }
  });
}

export async function createNewsletterSheet() {
  const sheets = await getUncachableGoogleSheetClient();
  
  const spreadsheet = await sheets.spreadsheets.create({
    requestBody: {
      properties: {
        title: 'WebCraft Newsletter Subscriptions'
      },
      sheets: [
        {
          properties: {
            title: 'Subscribers'
          },
          data: [
            {
              rowData: [
                {
                  values: [
                    { userEnteredValue: { stringValue: 'Timestamp' } },
                    { userEnteredValue: { stringValue: 'Email' } }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  });

  return spreadsheet.data.spreadsheetId!;
}

export async function appendNewsletterSubscription(
  spreadsheetId: string,
  email: string
) {
  const sheets = await getUncachableGoogleSheetClient();
  
  const timestamp = new Date().toISOString();
  
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Subscribers!A:B',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [timestamp, email]
      ]
    }
  });
}

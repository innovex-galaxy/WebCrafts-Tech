import { Resend } from 'resend';

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken || !hostname) {
    return null;
  }

  try {
    connectionSettings = await fetch(
      'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
      {
        headers: {
          'Accept': 'application/json',
          'X_REPLIT_TOKEN': xReplitToken
        }
      }
    ).then(res => res.json()).then(data => data.items?.[0]);

    if (!connectionSettings || !connectionSettings.settings?.api_key) {
      return null;
    }
    return {
      apiKey: connectionSettings.settings.api_key, 
      fromEmail: connectionSettings.settings.from_email || 'onboarding@resend.dev'
    };
  } catch (error) {
    console.error('Failed to get Resend credentials:', error);
    return null;
  }
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}) {
  const credentials = await getCredentials();
  
  if (!credentials) {
    console.log('Resend not configured, skipping email notification');
    return false;
  }

  const resend = new Resend(credentials.apiKey);

  try {
    await resend.emails.send({
      from: credentials.fromEmail,
      to: 'kalizada24@gmail.com',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Sent from WebCrafts Tech contact form</p>
      `
    });
    console.log('Contact notification email sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send contact notification:', error);
    return false;
  }
}

export async function sendNewsletterConfirmation(email: string) {
  const credentials = await getCredentials();
  
  if (!credentials) {
    console.log('Resend not configured, skipping newsletter confirmation');
    return false;
  }

  const resend = new Resend(credentials.apiKey);

  try {
    await resend.emails.send({
      from: credentials.fromEmail,
      to: email,
      subject: 'Welcome to WebCrafts Tech Newsletter!',
      html: `
        <h2>Thanks for subscribing!</h2>
        <p>You're now subscribed to the WebCrafts Tech newsletter.</p>
        <p>We'll keep you updated with the latest web development tips, industry news, and exclusive offers.</p>
        <br>
        <p>Best regards,<br>The WebCrafts Tech Team</p>
      `
    });

    await resend.emails.send({
      from: credentials.fromEmail,
      to: 'kalizada24@gmail.com',
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `
    });
    
    console.log('Newsletter emails sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send newsletter emails:', error);
    return false;
  }
}

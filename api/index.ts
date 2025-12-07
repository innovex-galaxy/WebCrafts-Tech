import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

async function sendContactEmail(data: {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log('RESEND_API_KEY not configured');
    return false;
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: 'WebCrafts Tech <onboarding@resend.dev>',
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
    console.log('Contact email sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return false;
  }
}

async function sendNewsletterEmails(email: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log('RESEND_API_KEY not configured');
    return false;
  }

  const resend = new Resend(apiKey);

  try {
    // Note: Subscriber confirmation email disabled until domain is verified
    // Currently can only send to kalizada24@gmail.com (Resend signup email)

    // Notify admin
    await resend.emails.send({
      from: 'WebCrafts Tech <onboarding@resend.dev>',
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

      // Send email notification
      await sendContactEmail({ name, email, projectType: projectType || '', budget: budget || '', message });

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

      // Send newsletter emails
      await sendNewsletterEmails(email);

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

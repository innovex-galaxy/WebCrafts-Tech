import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold font-display mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: November 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-display mb-4">Introduction</h2>
            <p className="mb-4">
              WebCrafts Tech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-display mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Fill out our contact form</li>
              <li>Schedule a consultation through Calendly</li>
              <li>Interact with our live chat support</li>
              <li>Subscribe to our newsletter</li>
            </ul>
            <p className="mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Project details and budget information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
            <p className="mb-4">
              When you visit our website, we may automatically collect certain information about your device and browsing behavior, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-display mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Schedule and manage consultation appointments</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Analyze website usage and trends</li>
              <li>Prevent fraudulent activity and enhance security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-display mb-4">Third-Party Services</h2>
            <p className="mb-4">
              We use the following third-party services that may collect and process your information:
            </p>

            <h3 className="text-xl font-semibold mb-3">Google Analytics</h3>
            <p className="mb-4">
              We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to collect information such as pages visited, time spent on the site, and referring sources. This data helps us improve our website and services.
            </p>

            <h3 className="text-xl font-semibold mb-3">Google Ads</h3>
            <p className="mb-4">
              We use Google Ads for advertising and conversion tracking. This service may collect information about your interactions with our website to measure advertising effectiveness.
            </p>

            <h3 className="text-xl font-semibold mb-3">Calendly</h3>
            <p className="mb-4">
              We use Calendly for appointment scheduling. When you book a consultation, Calendly collects your name, email address, and appointment details. Please review <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Calendly's Privacy Policy</a> for more information.
            </p>

            <h3 className="text-xl font-semibold mb-3">Tawk.to (Live Chat)</h3>
            <p className="mb-4">
              We use Tawk.to to provide live chat support. When you use our chat feature, Tawk.to may collect your messages, name, email address, and browsing information. Please review <a href="https://www.tawk.to/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tawk.to's Privacy Policy</a> for more information.
            </p>

            <h3 className="text-xl font-semibold mb-3">Google Sheets</h3>
            <p className="mb-4">
              Contact form submissions are stored in Google Sheets for internal record-keeping and follow-up purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-display mb-4">Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve website functionality</li>
              <li>Deliver relevant advertising</li>
            </ul>
            <p className="mb-4">
              You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-display mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-display mb-4">Data Retention</h2>
            <p className="mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-display mb-4">Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-display mb-4">Children's Privacy</h2>
            <p className="mb-4">
              Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-display mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-display mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-muted p-6 rounded-lg">
              <p className="mb-2">
                <strong>WebCrafts Tech</strong>
              </p>
              <p className="mb-2">
                Email: <a href="mailto:webcraftstech@gmail.com" className="text-primary hover:underline">webcraftstech@gmail.com</a>
              </p>
              <p>
                Phone: <a href="tel:1-757-372-2055" className="text-primary hover:underline">1-757-372-2055</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

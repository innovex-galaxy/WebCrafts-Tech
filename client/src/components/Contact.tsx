import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    },
    onError: (error: any) => {
      let errorMessage = "Failed to send message. Please try again.";
      if (error.message) {
        try {
          const match = error.message.match(/\d{3}:\s*(.+)/);
          if (match && match[1]) {
            const parsed = JSON.parse(match[1]);
            errorMessage = parsed.error || errorMessage;
          }
        } catch {
          errorMessage = error.message.replace(/^\d{3}:\s*/, "");
        }
      }
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.projectType || !formData.budget) {
      toast({
        title: "Validation Error",
        description: "Please select both project type and budget range.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleScheduleClick = () => {
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17706434765/4hsKCLaDvrobEM2Bi_tB'
      });
    }
    setIsCalendlyOpen(true);
  };

  // Listen for Calendly events
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        if (e.data.event === 'calendly.event_scheduled') {
          // Booking completed, close modal and show success
          setIsCalendlyOpen(false);
          toast({
            title: "Appointment Scheduled!",
            description: "Thank you for scheduling a consultation with us.",
          });
        }
      }
    };

    window.addEventListener('message', handleCalendlyEvent);
    return () => window.removeEventListener('message', handleCalendlyEvent);
  }, [toast]);

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Get in touch and let's discuss how we
            can help
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-display">
                Send us a message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll respond within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    data-testid="input-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-type">Project Type</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, projectType: value })
                    }
                    required
                  >
                    <SelectTrigger
                      id="project-type"
                      data-testid="select-project-type"
                    >
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Custom Website</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="webapp">Web Application</SelectItem>
                      <SelectItem value="redesign">Website Redesign</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) =>
                      setFormData({ ...formData, budget: value })
                    }
                    required
                  >
                    <SelectTrigger id="budget" data-testid="select-budget">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-5k">$0k - $5k</SelectItem>
                      <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                      <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                      <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                      <SelectItem value="50k+">$50k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  data-testid="button-submit"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-sm text-muted-foreground">
                      webcraftstech@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-sm text-muted-foreground">
                      {" "}
                      <a href="tel:+1-757-372-2055">1-757-372-2055</a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-2">
                  Ready to get started?
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Schedule a free consultation call to discuss your project in
                  detail
                </p>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={handleScheduleClick}
                  data-testid="button-schedule"
                >
                  Schedule a Call for a Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Calendly Modal */}
      <Dialog open={isCalendlyOpen} onOpenChange={setIsCalendlyOpen}>
        <DialogContent className="max-w-4xl h-[90vh] p-0">
          <DialogHeader className="px-6 pt-6">
            <DialogTitle>Schedule Your Free Consultation</DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-hidden px-6 pb-6">
            <iframe
              src="https://calendly.com/webcraftstech/30min"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule a consultation"
              data-testid="iframe-calendly"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

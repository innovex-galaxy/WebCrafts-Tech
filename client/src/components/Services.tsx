import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, ShoppingCart, Layers, Palette, HeadphonesIcon, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description: "Tailored websites built from the ground up to match your unique business requirements and brand identity.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online store development with secure payment integration and inventory management systems.",
    features: ["Payment Integration", "Product Management", "Shopping Cart"],
  },
  {
    icon: Layers,
    title: "Web App Development",
    description: "Complex web applications with robust backends, real-time features, and seamless user experiences.",
    features: ["API Development", "Database Design", "Cloud Hosting"],
  },
  {
    icon: Palette,
    title: "Brand & Design",
    description: "Comprehensive brand identity and UI/UX design services that create memorable digital experiences.",
    features: ["Logo Design", "UI/UX Design", "Brand Guidelines"],
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Continuous maintenance, updates, and technical support to keep your website running smoothly.",
    features: ["24/7 Monitoring", "Regular Updates", "Bug Fixes"],
  },
  {
    icon: Lightbulb,
    title: "Consulting & Strategy",
    description: "Expert guidance on technology choices, digital strategy, and optimization for business growth.",
    features: ["Tech Consulting", "Growth Strategy", "Performance Audit"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all duration-300"
              data-testid={`card-service-${index}`}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

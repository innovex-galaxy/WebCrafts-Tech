import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Palette,
  Smartphone,
  Layout,
  Globe,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Website Design & Development",
    description:
      "Creative, responsive websites for businesses of all sizes, including corporate and e-commerce solutions.",
  },
  {
    icon: Palette,
    title: "Logo & Brand Identity Design",
    description:
      "Build a memorable brand with custom logos and visual branding that reflect your business identity.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps for Android, iOS, and hybrid environments.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "Intuitive and engaging user interfaces designed to enhance user experience and drive engagement.",
  },
  {
    icon: Globe,
    title: "Web & Portal Development",
    description:
      "Dynamic web applications and portals tailored to your business operations.",
  },
  {
    icon: Settings,
    title: "Custom Software Development",
    description:
      "Multi-platform, scalable software built to match your exact business requirements.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide a full range of affordable web services for individuals,
            small businesses, and large enterprises. Our approach begins with
            understanding your target market and tailoring solutions to meet
            your specific website needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all duration-300"
              data-testid={`card-about-service-${index}`}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            All our services are available on a <strong>project-based</strong>{" "}
            or <strong>dedicated resource model</strong>.
          </p>
        </div>
      </div>
      
    </section>
  );
}

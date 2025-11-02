import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Pencil, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Planning",
    description: "We start by understanding your goals, target audience, and project requirements through detailed consultation.",
    points: [
      "Requirements gathering",
      "Market research",
      "Project roadmap creation",
    ],
  },
  {
    icon: Pencil,
    title: "Design & Prototyping",
    description: "Creating wireframes and high-fidelity designs that align with your brand and provide exceptional user experience.",
    points: [
      "Wireframe development",
      "UI/UX design",
      "Interactive prototypes",
    ],
  },
  {
    icon: Code2,
    title: "Development & Testing",
    description: "Building your website with clean, maintainable code while conducting rigorous testing for quality assurance.",
    points: [
      "Frontend development",
      "Backend integration",
      "Quality assurance testing",
    ],
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "Deploying your website and providing ongoing support to ensure optimal performance and continuous improvement.",
    points: [
      "Deployment & hosting",
      "Training & documentation",
      "Ongoing maintenance",
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`step-${index}`}>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              )}
              <Card className="relative hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-semibold text-primary mb-2">Step {index + 1}</div>
                  <CardTitle className="text-xl font-display">{step.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-1.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

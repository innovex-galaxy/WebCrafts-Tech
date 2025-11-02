import { Badge } from "@/components/ui/badge";
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiAmazon } from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "AWS", icon: SiAmazon },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Technology Stack</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building with modern, proven technologies for scalable solutions
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 hover-elevate p-6 rounded-lg transition-all duration-300"
              data-testid={`tech-${index}`}
            >
              <tech.icon className="w-12 h-12 text-foreground" />
              <Badge variant="secondary" className="text-sm">
                {tech.name}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

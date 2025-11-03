import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ecommerceImg from "@assets/generated_images/E-commerce_project_screenshot_8cde993f.png";
import corporateImg from "@assets/generated_images/Corporate_website_project_a7188570.png";
import webappImg from "@assets/generated_images/Web_app_dashboard_project_f9d9b515.png";
import restaurantImg from "@assets/generated_images/Restaurant_website_project_89c69fd5.png";

const projects = [
  {
    title: "Modern E-commerce Platform",
    client: "RetailCo",
    description:
      "A full-featured e-commerce solution with advanced product filtering, secure checkout, and admin dashboard.",
    tags: ["E-commerce", "React", "Node.js"],
    image: ecommerceImg,
    featured: true,
  },
  {
    title: "Corporate Website Redesign",
    client: "TechCorp Industries",
    description:
      "Complete brand refresh and website redesign focusing on user experience and conversion optimization.",
    tags: ["Corporate", "Design", "SEO"],
    image: corporateImg,
    featured: false,
  },
  {
    title: "SaaS Dashboard Application",
    client: "DataMetrics",
    description:
      "Complex data visualization dashboard with real-time analytics and interactive reporting features.",
    tags: ["Web App", "Dashboard", "Analytics"],
    image: webappImg,
    featured: true,
  },
  {
    title: "Restaurant Reservation System",
    client: "Bistro Elegance",
    description:
      "Beautiful restaurant website with integrated reservation system and online menu management.",
    tags: ["Hospitality", "Booking", "CMS"],
    image: restaurantImg,
    featured: false,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing recent projects that demonstrate our commitment to
            excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`hover-elevate transition-all duration-300 overflow-hidden ${
                project.featured ? "md:col-span-2" : ""
              }`}
              data-testid={`card-project-${index}`}
            >
              <div
                className={`grid ${project.featured ? "md:grid-cols-2" : "grid-cols-1"} gap-0`}
              >
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    data-testid={`img-project-${index}`}
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <div className="text-sm text-muted-foreground mb-2">
                      {/*project.client*/}
                    </div>
                    <CardTitle className="text-2xl font-display mb-3">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          data-testid={`badge-tag-${index}-${i}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {/* Hidden for now - can be enabled later
                    <Button variant="outline" data-testid={`button-view-case-${index}`}>
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    */}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import client1 from "@assets/generated_images/Client_testimonial_photo_one_8450d1ab.png";
import client2 from "@assets/generated_images/Client_testimonial_photo_two_bdbb3492.png";
import client3 from "@assets/generated_images/Client_testimonial_photo_three_cf657a80.png";
import client4 from "@assets/generated_images/Client_testimonial_photo_four_dd379aba.png";

const testimonials = [
  {
    quote:
      "WebCrafts Tech transformed our online presence completely. The new website has increased our conversions by 150% and the team was professional throughout the entire process.",
    author: "Sarah M.",
    role: "CEO",
    avatar: client1,
    rating: 5,
  },
  {
    quote:
      "Outstanding work! They delivered exactly what we needed on time and within budget. The attention to detail and commitment to quality is remarkable.",
    author: "Michael C.",
    role: "Founder",
    avatar: client2,
    rating: 5,
  },
  {
    quote:
      "Working with this team was a game-changer for our business. They understood our vision and brought it to life with a stunning, user-friendly website.",
    author: "Emma R.",
    role: "Marketing Director",
    avatar: client3,
    rating: 5,
  },
  {
    quote:
      "Exceptional service from start to finish. The website they built has become our most powerful marketing tool. Highly recommended!",
    author: "James A.",
    role: "Owner",
    avatar: client4,
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by businesses that value quality and results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                      data-testid={`star-${index}-${i}`}
                    />
                  ))}
                </div>

                <blockquote className="text-base leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.author}
                    />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div
                      className="font-semibold"
                      data-testid={`text-author-${index}`}
                    >
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

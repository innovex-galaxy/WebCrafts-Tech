import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="py-20 md:py-32 bg-muted/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold font-display mb-4">Client Success Stories</h2>
          <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by businesses that value quality and results
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            *ngFor="let testimonial of testimonials; let i = index"
            class="bg-card text-card-foreground rounded-md border border-card-border hover-elevate transition-all duration-300"
            [attr.data-testid]="'card-testimonial-' + i">
            <div class="p-8">
              <div class="flex gap-1 mb-4">
                <svg
                  *ngFor="let star of [1,2,3,4,5]; let j = index"
                  class="w-4 h-4 fill-primary text-primary"
                  [attr.data-testid]="'star-' + i + '-' + j"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              
              <blockquote class="text-base leading-relaxed mb-6">
                "{{ testimonial.quote }}"
              </blockquote>

              <div class="flex items-center gap-4">
                <div class="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <img [src]="testimonial.avatar" [alt]="testimonial.author" class="aspect-square h-full w-full" />
                </div>
                <div>
                  <div class="font-semibold" [attr.data-testid]="'text-author-' + i">{{ testimonial.author }}</div>
                  <div class="text-sm text-muted-foreground">
                    {{ testimonial.role }} at {{ testimonial.company }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote: 'WebCraft transformed our online presence completely. The new website has increased our conversions by 150% and the team was professional throughout the entire process.',
      author: 'Sarah Mitchell',
      role: 'CEO',
      company: 'TechCorp Industries',
      avatar: '/assets/generated_images/Client_testimonial_photo_one_8450d1ab.png',
      rating: 5
    },
    {
      quote: 'Outstanding work! They delivered exactly what we needed on time and within budget. The attention to detail and commitment to quality is remarkable.',
      author: 'Michael Chen',
      role: 'Founder',
      company: 'DataMetrics',
      avatar: '/assets/generated_images/Client_testimonial_photo_two_bdbb3492.png',
      rating: 5
    },
    {
      quote: 'Working with this team was a game-changer for our business. They understood our vision and brought it to life with a stunning, user-friendly website.',
      author: 'Emma Rodriguez',
      role: 'Marketing Director',
      company: 'RetailCo',
      avatar: '/assets/generated_images/Client_testimonial_photo_three_cf657a80.png',
      rating: 5
    },
    {
      quote: 'Exceptional service from start to finish. The website they built has become our most powerful marketing tool. Highly recommended!',
      author: 'James Anderson',
      role: 'Owner',
      company: 'Bistro Elegance',
      avatar: '/assets/generated_images/Client_testimonial_photo_four_dd379aba.png',
      rating: 5
    }
  ];
}

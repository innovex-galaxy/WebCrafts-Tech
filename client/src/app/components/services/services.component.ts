import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="py-20 md:py-32 bg-background">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold font-display mb-4">Our Services</h2>
          <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web solutions tailored to your business needs
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            *ngFor="let service of services; let i = index"
            class="bg-card text-card-foreground rounded-md border border-card-border hover-elevate transition-all duration-300"
            [attr.data-testid]="'card-service-' + i">
            <div class="p-6">
              <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span [innerHTML]="service.icon" class="w-6 h-6 text-primary"></span>
              </div>
              <h3 class="text-2xl font-display mb-2">{{ service.title }}</h3>
              <p class="text-base leading-relaxed text-muted-foreground mb-4">
                {{ service.description }}
              </p>
            </div>
            <div class="px-6 pb-6">
              <ul class="space-y-2">
                <li *ngFor="let feature of service.features" class="flex items-center text-sm text-muted-foreground">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
      title: 'Custom Web Development',
      description: 'Tailored websites built from the ground up to match your unique business requirements and brand identity.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance']
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>',
      title: 'E-commerce Solutions',
      description: 'Complete online store development with secure payment integration and inventory management systems.',
      features: ['Payment Integration', 'Product Management', 'Shopping Cart']
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
      title: 'Web App Development',
      description: 'Complex web applications with robust backends, real-time features, and seamless user experiences.',
      features: ['API Development', 'Database Design', 'Cloud Hosting']
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>',
      title: 'Brand & Design',
      description: 'Comprehensive brand identity and UI/UX design services that create memorable digital experiences.',
      features: ['Logo Design', 'UI/UX Design', 'Brand Guidelines']
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>',
      title: 'Ongoing Support',
      description: 'Continuous maintenance, updates, and technical support to keep your website running smoothly.',
      features: ['24/7 Monitoring', 'Regular Updates', 'Bug Fixes']
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.7-1.05l5.45 8.45A1 1 0 0 1 16 16H2.05A10 10 0 1 0 12 2z"></path></svg>',
      title: 'Consulting & Strategy',
      description: 'Expert guidance on technology choices, digital strategy, and optimization for business growth.',
      features: ['Tech Consulting', 'Growth Strategy', 'Performance Audit']
    }
  ];
}

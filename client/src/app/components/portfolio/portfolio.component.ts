import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  client: string;
  description: string;
  tags: string[];
  image: string;
  featured: boolean;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="portfolio" class="py-20 md:py-32 bg-muted/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold font-display mb-4">Our Work</h2>
          <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing recent projects that demonstrate our commitment to excellence
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            *ngFor="let project of projects; let i = index"
            [class]="'bg-card text-card-foreground rounded-md border border-card-border hover-elevate transition-all duration-300 overflow-hidden ' + (project.featured ? 'md:col-span-2' : '')"
            [attr.data-testid]="'card-project-' + i">
            <div [class]="'grid ' + (project.featured ? 'md:grid-cols-2' : 'grid-cols-1') + ' gap-0'">
              <div class="relative aspect-video bg-muted overflow-hidden">
                <img
                  [src]="project.image"
                  [alt]="project.title"
                  class="w-full h-full object-cover"
                  [attr.data-testid]="'img-project-' + i" />
              </div>
              <div class="p-8 flex flex-col justify-center">
                <div class="mb-4">
                  <div class="text-sm text-muted-foreground mb-2">{{ project.client }}</div>
                  <h3 class="text-2xl font-display mb-3">{{ project.title }}</h3>
                  <p class="text-base leading-relaxed text-muted-foreground">
                    {{ project.description }}
                  </p>
                </div>
                <div>
                  <div class="flex flex-wrap gap-2 mb-6">
                    <span
                      *ngFor="let tag of project.tags; let j = index"
                      class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground hover-elevate active-elevate-2"
                      [attr.data-testid]="'badge-tag-' + i + '-' + j">
                      {{ tag }}
                    </span>
                  </div>
                  <button
                    class="min-h-9 px-4 py-2 border border-button-outline bg-background rounded-md hover-elevate active-elevate-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors"
                    [attr.data-testid]="'button-view-case-' + i">
                    View Case Study
                    <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
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
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Modern E-commerce Platform',
      client: 'RetailCo',
      description: 'A full-featured e-commerce solution with advanced product filtering, secure checkout, and admin dashboard.',
      tags: ['E-commerce', 'React', 'Node.js'],
      image: '/assets/generated_images/E-commerce_project_screenshot_8cde993f.png',
      featured: true
    },
    {
      title: 'Corporate Website Redesign',
      client: 'TechCorp Industries',
      description: 'Complete brand refresh and website redesign focusing on user experience and conversion optimization.',
      tags: ['Corporate', 'Design', 'SEO'],
      image: '/assets/generated_images/Corporate_website_project_a7188570.png',
      featured: false
    },
    {
      title: 'SaaS Dashboard Application',
      client: 'DataMetrics',
      description: 'Complex data visualization dashboard with real-time analytics and interactive reporting features.',
      tags: ['Web App', 'Dashboard', 'Analytics'],
      image: '/assets/generated_images/Web_app_dashboard_project_f9d9b515.png',
      featured: true
    },
    {
      title: 'Restaurant Reservation System',
      client: 'Bistro Elegance',
      description: 'Beautiful restaurant website with integrated reservation system and online menu management.',
      tags: ['Hospitality', 'Booking', 'CMS'],
      image: '/assets/generated_images/Restaurant_website_project_89c69fd5.png',
      featured: false
    }
  ];
}

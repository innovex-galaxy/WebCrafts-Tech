import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  icon: string;
  title: string;
  description: string;
  points: string[];
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="process" class="py-20 md:py-32 bg-background">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold font-display mb-4">Our Process</h2>
          <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let step of steps; let i = index" class="relative" [attr.data-testid]="'step-' + i">
            <div *ngIf="i < steps.length - 1" class="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2"></div>
            <div class="relative bg-card text-card-foreground rounded-md border border-card-border hover-elevate transition-all duration-300">
              <div class="p-6">
                <div class="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4">
                  <span [innerHTML]="step.icon" class="w-6 h-6"></span>
                </div>
                <div class="text-sm font-semibold text-primary mb-2">Step {{ i + 1 }}</div>
                <h3 class="text-xl font-display mb-2">{{ step.title }}</h3>
                <p class="text-sm leading-relaxed text-muted-foreground mb-4">
                  {{ step.description }}
                </p>
              </div>
              <div class="px-6 pb-6">
                <ul class="space-y-2">
                  <li *ngFor="let point of step.points" class="flex items-start text-sm text-muted-foreground">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-1.5 flex-shrink-0"></span>
                    {{ point }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProcessComponent {
  steps: Step[] = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>',
      title: 'Discovery & Planning',
      description: 'We start by understanding your goals, target audience, and project requirements through detailed consultation.',
      points: ['Requirements gathering', 'Market research', 'Project roadmap creation']
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>',
      title: 'Design & Prototyping',
      description: 'Creating wireframes and high-fidelity designs that align with your brand and provide exceptional user experience.',
      points: ['Wireframe development', 'UI/UX design', 'Interactive prototypes']
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
      title: 'Development & Testing',
      description: 'Building your website with clean, maintainable code while conducting rigorous testing for quality assurance.',
      points: ['Frontend development', 'Backend integration', 'Quality assurance testing']
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>',
      title: 'Launch & Support',
      description: 'Deploying your website and providing ongoing support to ensure optimal performance and continuous improvement.',
      points: ['Deployment & hosting', 'Training & documentation', 'Ongoing maintenance']
    }
  ];
}

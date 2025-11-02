import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeroComponent } from '../hero/hero.component';
import { ServicesComponent } from '../services/services.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ProcessComponent } from '../process/process.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    HeroComponent,
    ServicesComponent,
    PortfolioComponent,
    ProcessComponent,
    TestimonialsComponent,
    TechStackComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen">
      <app-navigation></app-navigation>
      <app-hero></app-hero>
      <app-services></app-services>
      <app-portfolio></app-portfolio>
      <app-process></app-process>
      <app-testimonials></app-testimonials>
      <app-tech-stack></app-tech-stack>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class HomeComponent {
}

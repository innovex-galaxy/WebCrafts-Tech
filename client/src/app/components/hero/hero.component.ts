import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/assets/generated_images/Hero_workspace_background_6fbe3592.png')">
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      
      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-white mb-6">
          We Build Exceptional Web Experiences
        </h1>
        <p class="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your vision into reality with custom web solutions that combine stunning design, powerful functionality, and seamless user experiences.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            (click)="scrollToSection('#portfolio')"
            class="min-h-10 text-base px-8 py-6 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors border border-primary-border"
            data-testid="button-view-work">
            View Our Work
            <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            (click)="scrollToSection('#contact')"
            class="min-h-10 text-base px-8 py-6 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 rounded-md hover-elevate active-elevate-2 inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors border"
            data-testid="button-start-project">
            Start Your Project
          </button>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          (click)="scrollToSection('#services')"
          class="text-white/60 hover:text-white/90 transition-colors"
          data-testid="button-scroll-indicator">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent {
  scrollToSection(href: string) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

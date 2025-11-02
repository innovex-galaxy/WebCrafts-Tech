import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav
      [class]="'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' + (isScrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent')">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0">
            <button
              (click)="scrollToSection('#hero')"
              class="text-xl font-bold font-display hover-elevate active-elevate-2 px-2 py-1 rounded-md"
              data-testid="link-logo">
              WebCraft
            </button>
          </div>

          <div class="hidden md:flex items-center gap-8">
            <button
              *ngFor="let link of navLinks"
              (click)="scrollToSection(link.href)"
              class="text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              [attr.data-testid]="'link-' + link.name.toLowerCase()">
              {{ link.name }}
            </button>
            <button
              (click)="scrollToSection('#contact')"
              class="min-h-9 px-4 py-2 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-primary-border"
              data-testid="button-contact">
              Start Your Project
            </button>
          </div>

          <div class="md:hidden">
            <button
              (click)="isMobileMenuOpen = !isMobileMenuOpen"
              class="h-9 w-9 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover-elevate active-elevate-2"
              data-testid="button-menu-toggle">
              <svg *ngIf="!isMobileMenuOpen" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg *ngIf="isMobileMenuOpen" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div *ngIf="isMobileMenuOpen" class="md:hidden border-t py-4 bg-background/95 backdrop-blur-md">
          <div class="flex flex-col gap-2">
            <button
              *ngFor="let link of navLinks"
              (click)="scrollToSection(link.href)"
              class="text-foreground hover-elevate active-elevate-2 px-4 py-3 rounded-md text-sm font-medium text-left"
              [attr.data-testid]="'link-mobile-' + link.name.toLowerCase()">
              {{ link.name }}
            </button>
            <div class="px-4 pt-2">
              <button
                (click)="scrollToSection('#contact')"
                class="w-full min-h-9 px-4 py-2 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-primary-border"
                data-testid="button-mobile-contact">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavigationComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  scrollToSection(href: string) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isMobileMenuOpen = false;
    }
  }
}

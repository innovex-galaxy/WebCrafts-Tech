# WebCraft Studio - Professional Web Development Business Website

## Overview

WebCraft Studio is a professional business website designed for a web development startup. The site showcases services, portfolio projects, client testimonials, and provides contact functionality for potential clients.

## Project Architecture

This is a full-stack JavaScript application built with:

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling with custom design system
- **Shadcn UI** - Component library
- **React Query (TanStack Query)** - Server state management
- **Wouter** - Lightweight routing
- **React Hook Form** - Form management
- **Framer Motion** - Animations

### Backend
- **Express.js** - Node.js web framework
- **TypeScript** - Type safety
- **Zod** - Schema validation
- **In-memory storage** - Data persistence (MemStorage)

### Design System
- Custom color palette with light/dark mode support
- Typography: Inter (body) and Space Grotesk (display)
- Consistent spacing and component styling
- Responsive design optimized for mobile and desktop

## Key Features

### 1. Hero Section
- Full-screen hero with professional workspace imagery
- Compelling tagline and call-to-action buttons
- Smooth scroll navigation

### 2. Services Showcase
- Six core service offerings:
  - Custom Web Development
  - E-commerce Solutions
  - Web App Development
  - Brand & Design
  - Ongoing Support & Maintenance
  - Consulting & Strategy
- Card-based layout with icons and feature lists

### 3. Portfolio Gallery
- Featured project showcases with screenshots
- Project details including client name, tags, and descriptions
- Mix of full-width and grid layouts

### 4. Development Process
- Four-step workflow visualization:
  - Discovery & Planning
  - Design & Prototyping
  - Development & Testing
  - Launch & Support

### 5. Client Testimonials
- Authentic client reviews with ratings
- Professional headshots and company details
- Social proof for credibility

### 6. Technology Stack Display
- Visual showcase of technologies used
- React, Node.js, TypeScript, Tailwind CSS, PostgreSQL, AWS

### 7. Contact Form (Fully Functional)
- Integrated with backend API
- Form validation using Zod schemas
- Fields: Name, Email, Project Type, Budget Range, Message
- Real-time submission with loading states
- Toast notifications for success/error feedback
- Data stored in memory (MemStorage)

### 8. Newsletter Subscription (Fully Functional)
- Email subscription form in footer
- Backend validation and storage
- Duplicate email detection
- Toast notifications for feedback

## Data Models

### Contact Submission
```typescript
{
  id: string (auto-generated UUID)
  name: string
  email: string
  projectType: string
  budget: string
  message: string
  createdAt: Date
}
```

### Newsletter Subscription
```typescript
{
  id: string (auto-generated UUID)
  email: string (unique)
  createdAt: Date
}
```

## API Endpoints

### POST /api/contact
Submit a contact form inquiry
- Request body: `{ name, email, projectType, budget, message }`
- Validation: Zod schema validation
- Response: `{ success: true, data: ContactSubmission }`

### GET /api/contact
Retrieve all contact submissions
- Response: `{ success: true, data: ContactSubmission[] }`

### POST /api/newsletter
Subscribe to newsletter
- Request body: `{ email }`
- Validation: Zod schema validation, duplicate email check
- Response: `{ success: true, data: NewsletterSubscription }`

## File Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx - Sticky header with mobile menu
│   │   ├── Hero.tsx - Full-screen hero section
│   │   ├── Services.tsx - Services showcase grid
│   │   ├── Portfolio.tsx - Project portfolio gallery
│   │   ├── Process.tsx - Development process timeline
│   │   ├── Testimonials.tsx - Client testimonials
│   │   ├── TechStack.tsx - Technology stack display
│   │   ├── Contact.tsx - Contact form with API integration
│   │   ├── Footer.tsx - Footer with newsletter subscription
│   │   └── ui/ - Shadcn UI components
│   ├── pages/
│   │   ├── Home.tsx - Main landing page
│   │   └── not-found.tsx - 404 page
│   ├── lib/
│   │   └── queryClient.ts - React Query configuration
│   └── index.css - Global styles and design tokens
│
server/
├── routes.ts - API route definitions
├── storage.ts - In-memory storage implementation
└── index.ts - Express server setup

shared/
└── schema.ts - Shared TypeScript types and Zod schemas

design_guidelines.md - Design system documentation
```

## Running the Application

The application runs on port 5000 with:
- Frontend: Vite dev server
- Backend: Express server with tsx
- Hot reload enabled for development

Command: `npm run dev`

## Data Storage

Currently using **in-memory storage (MemStorage)** which means:
- Data persists only during server runtime
- Server restart clears all submissions
- Suitable for development and demonstration
- Can be easily swapped for database storage (PostgreSQL) in production

## Future Enhancements

Potential improvements for production:
- Database integration (PostgreSQL with Drizzle ORM)
- Email service integration for contact form notifications
- Newsletter email service (Mailchimp, SendGrid)
- Case study detail pages
- Blog section for SEO
- Admin dashboard to view submissions
- Authentication for admin access
- Analytics integration
- Performance optimization
- SEO metadata enhancement

## Design Philosophy

The website follows modern web design principles:
- Clean, professional aesthetic
- Generous whitespace
- Clear visual hierarchy
- Mobile-first responsive design
- Fast, smooth interactions
- Accessibility considerations
- Dark mode support

## Technical Highlights

- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Form Validation**: Zod schemas ensure data integrity
- **Error Handling**: Comprehensive error handling with user feedback
- **State Management**: React Query for server state, local state for UI
- **Component Reusability**: Modular component architecture
- **API Design**: RESTful API with proper HTTP status codes
- **Code Organization**: Clear separation of concerns

## Recent Changes (Latest Session)

1. Created complete data schema for contact and newsletter submissions
2. Implemented storage interface with CRUD operations
3. Built API routes with validation for contact and newsletter forms
4. Integrated frontend components with backend using React Query
5. Added loading states and error handling
6. Implemented toast notifications for user feedback

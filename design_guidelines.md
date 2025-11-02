# Design Guidelines: Web Development Business Portfolio

## Design Approach

**Selected Approach:** Reference-Based with influences from modern SaaS/agency leaders (Vercel, Linear, Stripe, Rally Interactive)

**Core Philosophy:** The website IS the portfolio - every design decision demonstrates the quality clients can expect. Bold typography, generous whitespace, and confident presentation of work.

## Typography System

**Primary Font:** Inter (Google Fonts) - clean, professional, excellent readability
**Accent Font:** Space Grotesk (Google Fonts) - distinctive headlines

**Hierarchy:**
- Hero Headlines: text-6xl to text-8xl, font-bold, tracking-tight, Space Grotesk
- Section Headlines: text-4xl to text-5xl, font-bold, Space Grotesk  
- Subsections: text-2xl to text-3xl, font-semibold, Inter
- Body Text: text-lg, leading-relaxed, Inter
- Small Text/Captions: text-sm to text-base, Inter

## Layout System

**Spacing Primitives:** Tailwind units 4, 8, 12, 16, 20, 32
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-12
- Content margins: mb-8, mb-12 for vertical rhythm

**Container Strategy:**
- Full-width sections with inner max-w-7xl
- Content sections: max-w-6xl
- Text content: max-w-3xl for readability

## Page Structure & Sections

### Hero Section (100vh)
- Large hero background image showing modern workspace/code editor with blur overlay
- Centered content with powerful tagline: "We Build Exceptional Web Experiences"
- Subheading explaining value proposition (1-2 sentences)
- Two CTAs: "View Our Work" (primary) and "Start Your Project" (secondary with blurred background)
- Scroll indicator at bottom

### Services Section
- Three-column grid (lg:grid-cols-3, md:grid-cols-2, single on mobile)
- Each service card includes: custom icon (placeholder comment), service name, 2-3 sentence description, key deliverables list
- Services: Custom Web Development, E-commerce Solutions, Web App Development, Brand & Design, Ongoing Support & Maintenance, Consulting & Strategy
- Hover states with subtle elevation

### Portfolio Showcase
- Asymmetric masonry grid layout (2-3 columns desktop)
- Featured project cards with: project screenshot/image, client name, project type tags, brief description, "View Case Study" link
- Mix of full-width featured projects and smaller grid items
- 6-8 projects minimum for credibility

### Process Section  
- Horizontal timeline or stepped approach
- Four stages: Discovery & Planning → Design & Prototyping → Development & Testing → Launch & Support
- Each stage with icon, title, and 2-3 bullet points explaining approach

### Testimonials
- Two-column grid (stacked mobile)
- 4-6 testimonials with: client photo placeholder, quote, name, company, role
- Varied card heights for visual interest

### Technology Stack
- Grid of technology logos/badges (6-8 visible)
- Technologies: React, Next.js, TypeScript, Tailwind CSS, Node.js, PostgreSQL, AWS, etc.
- Simple, clean presentation without excessive detail

### Contact/CTA Section
- Two-column layout: Contact form (left) + Business info (right)
- Form fields: Name, Email, Project Type (dropdown), Budget Range (dropdown), Message (textarea), Submit button
- Right column: Contact details, office hours "Response within 24 hours", social links (GitHub, LinkedIn, Twitter)
- Background treatment for visual distinction

### Footer
- Three-column grid: Company links, Services links, Contact summary
- Newsletter signup: "Get web development insights" with email input + subscribe button
- Bottom bar: Copyright, Privacy/Terms links, social icons

## Component Library

**Buttons:**
- Primary: Large (px-8 py-4), rounded-lg, font-semibold
- Secondary: Similar size, outlined variant
- On-image buttons: backdrop-blur-md treatment

**Cards:**
- Elevated with subtle shadow
- rounded-xl borders
- Padding: p-8
- Hover: slight scale transform

**Form Inputs:**
- Consistent height (h-12)
- rounded-lg borders
- Focus states with ring
- Placeholder text with reduced opacity

**Navigation:**
- Sticky header with backdrop blur when scrolled
- Logo left, navigation center, CTA button right (desktop)
- Hamburger menu (mobile)
- Links: Services, Portfolio, About, Process, Contact

## Images

**Required Images:**
1. **Hero Background (Large):** Modern developer workspace - dual monitors showing code, clean desk setup, natural lighting. Should convey professionalism and technical expertise. Full viewport width, high quality.

2. **Portfolio Projects (6-8):** Website screenshots/mockups for each project. Mix of desktop and mobile views. Should showcase variety - e-commerce, corporate, web apps, etc.

3. **Client Testimonial Photos (4-6):** Professional headshots, preferably diverse range of clients.

**Image Treatment:** All images use rounded corners (rounded-xl), subtle shadows, and proper aspect ratios (16:9 for projects, 1:1 for testimonials)

## Interaction Principles

- Minimal, purposeful animations
- Smooth scroll behavior
- Subtle hover states (scale, shadow changes)
- No distracting motion - focus on content
- Fast, responsive interactions that feel premium

## Icons

**Library:** Heroicons (via CDN)
**Usage:** Consistent size (w-6 h-6 for inline, w-12 h-12 for feature icons), stroke weight, and spacing throughout
# 📁 TechHive Website - Project Structure

## Overview
Clean, organized Next.js application following professional standards and best practices.

---

## Directory Structure

```
TechHive/CompanySite/
│
├── 📄 Configuration Files
│   ├── .eslintrc.json           # ESLint configuration
│   ├── .gitignore               # Git ignore rules
│   ├── next.config.js           # Next.js configuration
│   ├── package.json             # Dependencies and scripts
│   ├── postcss.config.js        # PostCSS configuration
│   └── tailwind.config.js       # Tailwind CSS configuration
│
├── 📂 components/               # React components
│   ├── layout/                  # Layout components
│   │   ├── Header.js           # Navigation header with sticky scroll
│   │   ├── Footer.js           # Footer with links & social
│   │   └── index.js            # Layout exports
│   │
│   └── ui/                      # UI components
│       ├── MotionWrapper.js    # Scroll animation wrapper
│       ├── ServiceCard.js      # Service display card
│       ├── TestimonialCarousel.js  # Testimonial carousel
│       ├── FAQAccordion.js     # FAQ accordion
│       └── index.js            # UI exports
│
├── 📂 lib/                      # Utility functions
│   └── hooks.js                # Custom React hooks
│
├── 📂 pages/                    # Next.js pages (routes)
│   ├── index.js                # Home page (/)
│   ├── about.js                # About page (/about)
│   ├── services.js             # Services page (/services)
│   ├── book-session.js         # Contact form (/book-session)
│   ├── testimonials.js         # Testimonials (/testimonials)
│   ├── faqs.js                 # FAQs (/faqs)
│   ├── blog.js                 # Blog placeholder (/blog)
│   ├── sitemap.xml.js          # Dynamic sitemap
│   ├── _app.js                 # App wrapper with theme
│   └── _document.js            # Document with fonts
│
├── 📂 public/                   # Static assets
│   ├── assets/
│   │   └── Images/
│   │       └── Icons/
│   └── robots.txt              # SEO robots file
│
├── 📂 styles/                   # Stylesheets
│   ├── globals.css             # Global styles
│   └── variables.css           # CSS variables (brand colors)
│
└── 📂 Documentation/
    ├── BUILD_SUMMARY.md        # Complete build summary
    ├── DEPLOYMENT_GUIDE.md     # Deployment instructions
    ├── PROJECT_README.md       # Technical documentation
    └── STRUCTURE.md            # This file

```

---

## Component Organization

### Layout Components (`components/layout/`)
**Purpose:** Global layout elements used across all pages

- **Header.js**
  - Sticky navigation with scroll effect
  - Desktop: Horizontal nav + CTA button
  - Mobile: Hamburger menu with slide-down
  - Active route highlighting

- **Footer.js**
  - 4-column layout (Company, Services, Company, Support)
  - Social media links
  - Copyright notice

### UI Components (`components/ui/`)
**Purpose:** Reusable UI elements and widgets

- **MotionWrapper.js**
  - Fade-in animation on scroll
  - Configurable delay prop
  - Viewport trigger with `once: true`

- **ServiceCard.js**
  - Icon + title + description
  - Hover lift animation
  - Staggered entry animation

- **TestimonialCarousel.js**
  - Auto-rotating carousel (6s interval)
  - Manual controls (arrows + dots)
  - Smooth slide transitions

- **FAQAccordion.js**
  - Styled MUI Accordion
  - Smooth expand/collapse
  - Custom theme styling

---

## Pages Structure

### Home Page (`pages/index.js`)
**Route:** `/`

**Sections:**
1. Hero with gradient background
2. Stats grid (4 metrics)
3. Services preview (4 cards)
4. Testimonials carousel
5. Final CTA section

### Services Page (`pages/services.js`)
**Route:** `/services`

**Features:**
- 4 detailed service cards
- Feature lists with icons
- Bottom CTA section

### Book a Session (`pages/book-session.js`)
**Route:** `/book-session`

**Features:**
- Formik + Yup validation
- 7 form fields
- Success/error states
- Trust badges

### About Page (`pages/about.js`)
**Route:** `/about`

**Sections:**
1. Hero section
2. Mission & Vision cards
3. Team grid (5 members)
4. Facts section (4 items)
5. CTA section

### FAQs Page (`pages/faqs.js`)
**Route:** `/faqs`

**Features:**
- 8 Q&A items
- MUI Accordion
- Bottom CTA

### Testimonials Page (`pages/testimonials.js`)
**Route:** `/testimonials`

**Features:**
- 6 testimonial cards
- Star ratings
- Stats section
- CTA

### Blog Page (`pages/blog.js`)
**Route:** `/blog`

**Status:** Placeholder for future content

---

## Import Patterns

### Layout Components
```javascript
import { Header, Footer } from '../components/layout';
```

### UI Components
```javascript
import { MotionWrapper, ServiceCard, TestimonialCarousel, FAQAccordion } from '../components/ui';
```

### Single Component
```javascript
import { MotionWrapper } from '../components/ui';
```

---

## Naming Conventions

### Files
- **Components:** PascalCase (e.g., `ServiceCard.js`)
- **Pages:** kebab-case (e.g., `book-session.js`)
- **Utilities:** camelCase (e.g., `hooks.js`)

### Variables
- **Components:** PascalCase (e.g., `Header`)
- **Functions:** camelCase (e.g., `handleSubmit`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `WEBSITE_URL`)

### CSS Classes
- **Tailwind:** utility classes
- **Custom:** kebab-case (e.g., `hero-section`)

---

## File Responsibilities

### Configuration
- **next.config.js:** Next.js build settings
- **tailwind.config.js:** Brand colors, fonts, breakpoints
- **package.json:** Dependencies and scripts

### Styling
- **styles/variables.css:** Brand color tokens
- **styles/globals.css:** Global CSS, resets, scrollbar
- **Tailwind classes:** Component-level styling

### Routing
- **pages/*.js:** Auto-routed by Next.js
- **pages/_app.js:** Global wrapper, theme provider
- **pages/_document.js:** HTML document, fonts

---

## Dependencies

### Core
- `next@14.2.18` - React framework
- `react@18.3.1` - UI library
- `react-dom@18.3.1` - React DOM

### Styling
- `tailwindcss@3.4.15` - Utility-first CSS
- `@mui/material@5.15.10` - Material-UI components
- `@emotion/react@11.11.3` - MUI styling
- `@emotion/styled@11.11.0` - MUI styling

### Animation
- `framer-motion@11.x` - Animation library

### Forms
- `formik@2.4.6` - Form management
- `yup@1.7.0` - Schema validation

### Icons
- `@mui/icons-material@5.15.10` - Material icons

---

## Build & Development

### Development
```bash
npm run dev        # Start dev server (http://localhost:3000)
```

### Production
```bash
npm run build      # Create production build
npm start          # Start production server
```

### Linting
```bash
npm run lint       # Run ESLint
```

---

## Best Practices

### Component Structure
1. Import statements
2. Component definition
3. Props destructuring
4. State management
5. Event handlers
6. Return JSX

### Code Style
- Use functional components with hooks
- Destructure props in function parameters
- Use arrow functions for event handlers
- Keep components under 300 lines
- Extract reusable logic into hooks

### Performance
- Use `viewport: { once: true }` for scroll animations
- Lazy load images with Next.js Image component
- Minimize bundle size with tree-shaking
- Use CSS variables for consistent theming

### Accessibility
- Include alt text on images
- Use semantic HTML tags
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers

---

## Maintenance

### Adding New Pages
1. Create file in `/pages`
2. Add to navigation in `components/layout/Header.js`
3. Add to sitemap in `pages/sitemap.xml.js`
4. Update footer links if needed

### Adding New Components
1. Create in appropriate folder (`layout/` or `ui/`)
2. Export from folder's `index.js`
3. Import using named export

### Updating Styles
1. Update `styles/variables.css` for global tokens
2. Update `tailwind.config.js` for Tailwind extensions
3. Update MUI theme in `pages/_app.js` for component styles

---

**Last Updated:** November 12, 2025  
**Maintainer:** TechHive Development Team

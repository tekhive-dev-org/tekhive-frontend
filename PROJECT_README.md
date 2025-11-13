# TechHive Website

A modern, responsive Next.js website for TechHive - Your easing station for business launch & growth.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (Pages Router)
- **Language:** JavaScript
- **Styling:** Tailwind CSS + MUI (Material-UI)
- **Animations:** Framer Motion
- **Forms:** Formik + Yup
- **Deployment:** Vercel

## 🎨 Design System

### Brand Colors
- **Primary:** #1a4558 (Deep Blue)
- **Secondary:** #566e77 (Slate Gray)
- **Accent:** #2d7a8f (Teal)
- **Font:** Montserrat

### Key Features
- ✅ Responsive design (mobile-first)
- ✅ Light Framer Motion animations
- ✅ Sticky header with scroll effect
- ✅ SEO optimized with meta tags
- ✅ Accessible (WCAG compliant)
- ✅ Form validation
- ✅ Auto-rotating testimonial carousel
- ✅ CAC compliance information

## 📁 Project Structure

```
/pages
  index.js              # Home page
  services.js           # Services overview
  about.js              # About TechHive
  book-session.js       # Lead form
  testimonials.js       # Client testimonials
  faqs.js              # FAQ accordion
  blog.js              # Blog (placeholder)
  _app.js              # App wrapper
  _document.js         # Document (fonts)

/components
  Header.js            # Sticky navigation
  Footer.js            # Footer with links
  MotionWrapper.js     # Animation wrapper
  ServiceCard.js       # Service card component
  TestimonialCarousel.js  # Carousel component
  FAQAccordion.js      # FAQ accordion

/styles
  globals.css          # Global styles
  variables.css        # CSS variables
```

## 🛠️ Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Pages Overview

### Home (/)
- Hero section with CTA
- Stats grid (10+ clients, 100% remote, etc.)
- Services preview (4 cards)
- Testimonials carousel
- Final CTA section

### Services (/services)
- Service grid with detailed features
- Business Consultancy, UI/UX Design, Web Development, Digital Marketing

### Book a Session (/book-session)
- Lead form with Formik validation
- Fields: Name, Email, Phone, Date/Time, Message
- Privacy consent checkbox
- Trust badges (NDPA compliant)

### About (/about)
- Mission & Vision
- Team grid (5 members)
- Why Choose TechHive facts
- CTA

### FAQs (/faqs)
- MUI Accordion with 8 Q&As
- CTA to book session

### Testimonials (/testimonials)
- Grid of 6 client stories
- Stats section
- CTA

## 🎯 Performance Targets

- Lighthouse Score: ≥ 90
- Load Time: < 3s
- Mobile-first responsive
- Cross-browser compatible

## 📝 To-Do / Future Enhancements

- [ ] Add Google Analytics 4
- [ ] Integrate contact form with backend/Netlify Forms
- [ ] Create blog content and CMS integration
- [ ] Add sitemap.xml for SEO
- [ ] Set up Vercel deployment
- [ ] Add more micro-interactions
- [ ] Implement i18n (internationalization)

## 👨‍💻 Development Notes

- Uses CSS variables from `variables.css` for consistent theming
- All animations are lightweight (0.6s duration, ease-out)
- Components follow atomic design principles
- Forms include proper validation and error handling
- Accessibility features: ARIA labels, keyboard navigation, alt texts

## 📄 License

© 2025 TechHive – CAC Registered | Nigeria

---

**Developed by:** Victor Okechukwu (Senior Software Engineer)
**Date:** November 12, 2025

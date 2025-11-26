# TechHive - Company Website Frontend

A modern, responsive Next.js website for TechHive - a tech consultancy and development agency. Built with cutting-edge technologies and best practices for performance, accessibility, and user experience.

## 🚀 Features

- **Next.js 14** - React framework with SSR and static generation
- **Tailwind CSS** - Utility-first CSS for rapid UI development
- **Framer Motion** - Smooth animations and transitions
- **Formik + Yup** - Form validation and submission handling
- **Material-UI Icons** - Beautiful, scalable icon library
- **Responsive Design** - Mobile-first approach with full responsive support
- **SEO Optimized** - Meta tags, Open Graph, and structured data
- **API Integration** - Contact form connected to TechHive backend

## 📋 Pages

- **Home** (`/`) - Landing page with hero, services, features, testimonials, and CTA
- **About** (`/about`) - Company mission, vision, team, and values
- **Services** (`/services`) - Detailed service offerings with pricing
- **Projects** (`/projects`) - Portfolio of completed projects
- **Blog** (`/blog`) - Blog posts and articles
- **Book Session** (`/book-session`) - Free consultation booking form
- **Careers** (`/careers`) - Career opportunities and company culture
- **FAQs** (`/faqs`) - Frequently asked questions
- **404** (`/404`) - Custom 404 error page with navigation

## 🛠️ Tech Stack

### Core
- **Next.js 14.2** - React framework
- **React 18.3** - UI library
- **React DOM 18.3** - DOM rendering

### Styling
- **Tailwind CSS 3.4** - Utility CSS framework
- **PostCSS 8.5** - CSS transformation
- **Autoprefixer 10.4** - Vendor prefixes

### Components & Animations
- **Framer Motion 12.23** - Motion library for React
- **Material-UI (MUI) 5.15** - Component library and icons

### Forms & Validation
- **Formik 2.4** - Form state management
- **Yup 1.7** - Schema validation

### Development Tools
- **ESLint 8.57** - Code quality
- **Autoprefixer** - CSS vendor prefixes

## 📦 Installation

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd CompanySite
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_CONTACT_API_URL=
```

4. **Run development server**
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 🚀 Building & Deployment

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Export Static Site
```bash
npm run export
```

### Lint Code
```bash
npm run lint
```

## 📁 Project Structure

```
CompanySite/
├── pages/                 # Next.js pages (routes)
│   ├── _app.js           # App component wrapper
│   ├── _document.js      # HTML document structure
│   ├── index.js          # Home page
│   ├── about.js          # About page
│   ├── services.js       # Services page
│   ├── projects.js       # Projects portfolio
│   ├── blog.js           # Blog listing
│   ├── book-session.js   # Booking form
│   ├── careers.js        # Careers page
│   ├── faqs.js           # FAQ page
│   ├── 404.js            # 404 error page
│   └── sitemap.xml.js    # Sitemap generation
│
├── components/
│   ├── home/             # Home page components
│   │   ├── HeroSection.js
│   │   ├── FeaturesSection.js
│   │   ├── ServicesSection.js
│   │   ├── ProcessSection.js
│   │   ├── FeaturedProjectsSection.js
│   │   ├── StatsSection.js
│   │   ├── TestimonialsSection.js
│   │   ├── BenefitsSection.js
│   │   ├── CTASection.js
│   │   └── index.js
│   │
│   ├── layout/           # Layout components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Layout.js
│   │   └── index.js
│   │
│   └── ui/               # Reusable UI components
│       ├── MotionWrapper.js
│       ├── ProjectCard.js
│       ├── ServiceCard.js
│       ├── ServiceModal.js
│       ├── TestimonialCarousel.js
│       ├── FAQAccordion.js
│       └── index.js
│
├── styles/
│   ├── globals.css       # Global styles
│   └── variables.css     # CSS variables (colors, fonts)
│
├── lib/
│   └── hooks.js          # Custom React hooks
│
├── public/
│   ├── robots.txt
│   └── assets/           # Images and media
│       ├── Images/
│       │   ├── Icons/
│       │   ├── projects/
│       │   ├── team/
│       │   └── testimonials/
│
├── docs/                 # Documentation
│   ├── STRUCTURE.md
│   ├── BUILD_SUMMARY.md
│   ├── DEPLOYMENT_GUIDE.md
│   └── RESTRUCTURE_SUMMARY.md
│
├── .env.local            # Environment variables (local)
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Styling & Customization

### Color Scheme
Colors are defined in `styles/variables.css`:
- **Primary Color**: Main brand color
- **Secondary Color**: Accent for highlights
- **Accent Color**: Call-to-action elements
- **Teal Light**: Secondary accent

### Tailwind Classes
Custom Tailwind utilities are configured in `tailwind.config.js`. Mobile-first utilities use `mobile:` prefix for small screen styling.

### Responsive Breakpoints
- Mobile: `sm:` (640px)
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)
- Wide: `xl:` (1280px)

## 🔄 Form Integration

### Contact/Book Session Form
- **Location**: `/pages/book-session.js`
- **Fields**: Name, Email, Phone, Service Interest, Preferred Date, Preferred Time, About Project, Privacy Consent
- **Validation**: Formik + Yup
- **API Endpoint**: Configured via `NEXT_PUBLIC_CONTACT_API_URL`
- **Date Format**: MM/DD/YYYY (converted from HTML date input)

### Form Submission Flow
1. User fills out form fields
2. Formik validates all fields on change and blur
3. Submit button is disabled until form is valid
4. On submit, form data is collected
5. Date is converted from yyyy-mm-dd to MM/DD/YYYY format
6. Payload is sent to backend API
7. Success or error message is displayed

## 📱 Mobile Responsiveness

The entire site is designed mobile-first with:
- Touch-friendly interface
- Readable font sizes on all devices
- Optimized images and assets
- Proper viewport configuration
- Smooth scrolling and animations

## 🔐 Security

- Form validation on client and server
- Privacy policy acceptance requirement
- Secure API communication (HTTPS)
- Environment variables for sensitive data

## 📊 Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS minification via Tailwind
- Smooth animations with Framer Motion
- Optimized bundle size

## 🐛 Debugging

### Console Logs
The form submission includes detailed console logging:
- Form state validation
- Payload being sent to backend
- Backend error responses
- API success responses

### Browser DevTools
Open DevTools (F12) > Console tab to view:
- Form validation errors
- API request/response
- Component rendering info

## 📝 Environment Variables

Create `.env.local` for local development:

```env
# Backend API
NEXT_PUBLIC_CONTACT_API_URL=https://techhive-backend-zmq5.onrender.com/api/contact/form
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
- **Netlify**: Export static site with `npm run export`
- **Docker**: Create Dockerfile with Node.js runtime
- **Traditional Hosting**: Build and upload via FTP/SFTP

## 🤝 Contributing

1. Create a feature branch from `dev`
2. Make your changes
3. Test thoroughly on mobile and desktop
4. Commit with clear, descriptive messages
5. Push and create a pull request

## 📄 License

[Add your license here]

## 📧 Support

For issues or questions, contact the development team or open an issue in the repository.

---

**Built with ❤️ by the TechHive Development Team**

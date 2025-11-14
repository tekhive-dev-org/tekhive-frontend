import Head from 'next/head';
import { MotionWrapper, ServiceCard, ServiceModal } from '../components/ui';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import CampaignIcon from '@mui/icons-material/Campaign';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Groups from '@mui/icons-material/Groups';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };
  const services = [
    {
      id: 'consultancy',
      icon: <BusinessCenterIcon className="h-16 w-16" />,
      title: 'Business Consultancy & Strategy',
      tagline: 'From idea to market entry — we build the roadmap.',
      description: 'Most founders fail not because of bad ideas — but because of poor execution strategy. We fix that. In one 30-minute call, we\'ll audit your idea and deliver a 90-day launch blueprint.',
      deliverables: [
        {
          name: 'Ideation Workshop',
          description: 'Validate your idea with market fit, TAM, and competitor analysis.'
        },
        {
          name: 'Business Model Canvas',
          description: 'One-page plan: revenue, costs, channels, customer segments.'
        },
        {
          name: 'Go-to-Market Strategy',
          description: 'Pricing, positioning, first 100 customers.'
        },
        {
          name: 'Fundraising Prep',
          description: 'Pitch deck, financial model, investor outreach script.'
        },
        {
          name: 'Weekly Check-Ins',
          description: 'Slack access to your dedicated strategist.'
        },
      ],
      whoFor: [
        'Pre-seed founders with an idea',
        'Bootstrappers needing clarity',
        'Startups raising seed capital',
        'SMEs entering new markets',
      ],
      outcomes: [
        '80% reduce time-to-launch by 60+ days',
        '3 clients raised $50K+ post-consultancy',
        '100% get a bankable business plan',
      ],
    },
    {
      id: 'design',
      icon: <DesignServicesIcon className="h-16 w-16" />,
      title: 'UI/UX Design & Branding',
      tagline: 'Beautiful. Usable. Conversion-Focused.',
      description: 'Your product can be brilliant — but if the interface frustrates users, they leave. We design user-centered experiences that turn visitors into customers.',
      deliverables: [
        {
          name: 'User Research',
          description: 'Interviews, personas, journey maps'
        },
        {
          name: 'Wireframes & Prototypes',
          description: 'Figma clickable prototype (mobile + desktop)'
        },
        {
          name: 'Visual Identity',
          description: 'Logo, color palette, typography, icon suite'
        },
        {
          name: 'Design System',
          description: 'Reusable components, style guide'
        },
        {
          name: 'Accessibility Audit',
          description: 'WCAG 2.1 AA compliant'
        },
      ],
      tools: 'Figma | Adobe XD | Framer | Miro | Hotjar | Maze',
      whoFor: [
        'SaaS founders needing dashboards',
        'E-commerce brands launching stores',
        'Apps needing App Store screenshots',
        'Startups raising funding (investors love clean UI)',
      ],
      outcomes: [
        '+40% average increase in user session time',
        '95% client satisfaction in usability tests',
        '100% mobile-responsive designs',
      ],
    },
    {
      id: 'development',
      icon: <CodeIcon className="h-16 w-16" />,
      title: 'Web & App Development',
      tagline: 'We code. You scale.',
      description: 'You approve the design. We bring it to life — fast, secure, scalable. No buggy code. No endless revisions.',
      deliverables: [
        {
          name: 'Frontend',
          description: 'React/Next.js, Tailwind, Framer Motion'
        },
        {
          name: 'Backend',
          description: 'Node.js or Django, REST/GraphQL APIs'
        },
        {
          name: 'Database',
          description: 'PostgreSQL, MongoDB, Redis'
        },
        {
          name: 'Deployment',
          description: 'AWS / Vercel / DigitalOcean'
        },
        {
          name: 'CI/CD Pipeline',
          description: 'Automated testing & deployment'
        },
        {
          name: 'Post-Launch Support',
          description: '30 days bug fixes included'
        },
      ],
      tools: 'React • Next.js • Node • Django • PostgreSQL • AWS • Docker • GitHub Actions',
      whoFor: [
        'MVPs needing to launch in 4–6 weeks',
        'SaaS dashboards with user auth',
        'E-commerce platforms',
        'Mobile-responsive web apps',
      ],
      outcomes: [
        '< 2s load time (Google PageSpeed 90+)',
        '99.9% uptime',
        'Zero critical bugs at launch',
      ],
    },
    {
      id: 'marketing',
      icon: <CampaignIcon className="h-16 w-16" />,
      title: 'Digital Marketing & Lead Generation',
      tagline: '20+ qualified leads per month — or we work free.',
      description: 'You don\'t need 10K followers. You need paying customers. We run data-backed campaigns that deliver ROI — not vanity metrics.',
      deliverables: [
        {
          name: 'Google Ads',
          description: 'Search + Display, keyword research, A/B testing'
        },
        {
          name: 'Meta Ads',
          description: 'Instagram/Facebook lead forms, retargeting'
        },
        {
          name: 'Content Engine',
          description: 'Blog posts, case studies, email sequences'
        },
        {
          name: 'Analytics Dashboard',
          description: 'Real-time lead tracking in Google Data Studio'
        },
        {
          name: 'Weekly Reports',
          description: 'CPL, ROAS, conversion rate'
        },
      ],
      tools: 'Google Ads • Meta Business Suite • Mailchimp • Google Analytics • Hotjar • Zapier',
      whoFor: [
        'B2B SaaS needing demo bookings',
        'E-commerce stores wanting sales',
        'Service businesses (coaching, consulting)',
        'Funded startups scaling user acquisition',
      ],
      outcomes: [
        'We deliver 20+ qualified leads in 30 days — or the next month is free',
        '40 leads @ ₦1,200 CPL (fintech client)',
        '$12K in sales from $2K ad spend (e-commerce)',
      ],
      guarantee: true,
    },
  ];

  return (
    <>
      <Head>
        <title>Our Services - TechHive</title>
        <meta
          name="description"
          content="From idea to market dominance: Business Consultancy, UI/UX Design, Web Development, and Digital Marketing with guaranteed results."
        />
      </Head>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-secondary to-teal-light py-24 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <MotionWrapper>
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6"
                >
                  <RocketLaunchIcon className="h-5 w-5 mr-2" />
                  <span className="text-sm font-semibold">OUR SERVICES</span>
                </motion.div>
                
                <h1 className="text-3xl sm:text-6xl font-black mb-6">
                  Your Full-Service
                  <br />
                  <span className="text-cyan-300">Growth Partner</span>
                </h1>
                <p className="text-lg sm:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                  From ideation to market dominance — we handle strategy, design, development, and marketing.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Service Header */}
                  <div className="mb-8">
                    <div className="text-accent mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                      {service.title}
                    </h2>
                    <p className="text-lg text-secondary font-semibold mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-gray-700 mobile:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Quick Highlights */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Key Deliverables:</h3>
                    <ul className="space-y-2">
                      {service.deliverables.slice(0, 3).map((deliverable, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircleIcon className="h-5 w-5 text-success mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{deliverable.name}</span>
                        </li>
                      ))}
                      {service.deliverables.length > 3 && (
                        <li className="text-sm text-accent font-semibold ml-7">
                          + {service.deliverables.length - 3} more...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => openModal(service)}
                      className="flex-1 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 text-primary px-6 py-3 rounded-full font-bold transition-all duration-300 border border-gray-200"
                    >
                      Read More
                    </button>
                    <Link href="/book-session" className="flex-1">
                      <button className="w-full bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                        Book Session
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Modal */}
        <ServiceModal 
          service={selectedService} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />

        {/* Main CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MotionWrapper>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Launch or Scale?
              </h2>
              <p className="text-xl mobile:text-sm text-gray-100 mb-8 max-w-2xl mx-auto">
                Book a free session. Let&apos;s turn your vision into a thriving business.
              </p>
              <Link href="/book-session">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center"
                >
                  <AttachMoneyIcon className="h-6 w-6 mr-2" />
                  Book Your Free Consultation
                </motion.button>
              </Link>
            </MotionWrapper>
          </div>
        </section>
      </main>
    </>
  );
}

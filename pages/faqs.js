import Head from 'next/head';
import { MotionWrapper, FAQAccordion } from '../components/ui';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function FAQs() {
  const faqs = [
    {
      question: 'What services does TechHive offer?',
      answer: 'TechHive provides four core services: Business Consultancy & Strategy (including ideation workshops, business model canvas, go-to-market strategy, and fundraising prep), UI/UX Design & Branding (user research, wireframes, prototypes, visual identity, and design systems), Web & App Development (React/Next.js frontend, Node.js/Django backend, database setup, and deployment), and Digital Marketing & Lead Generation (Google Ads, Meta Ads, content marketing, and analytics). We offer comprehensive support for businesses at every stage of growth.',
    },
    {
      question: 'How long does it take to launch a business with TechHive?',
      answer: 'Our vision is to help any determined founder launch a profitable business in under 90 days. The exact timeline depends on your project scope: Consultancy deliverables typically take 2-4 weeks, UI/UX design projects range from 3-6 weeks, web development (MVP) takes 4-6 weeks, and marketing campaigns start showing results within 30 days. We provide a detailed timeline during your free consultation.',
    },
    {
      question: 'Do you work with startups or only established businesses?',
      answer: 'We work with businesses at all stages - from pre-seed founders with just an idea, to bootstrappers needing clarity, startups raising seed capital, and SMEs entering new markets. Whether you\'re at ideation, building an MVP, or scaling to market dominance, we become your silent co-founder.',
    },
    {
      question: 'What is your pricing model?',
      answer: 'Our pricing varies based on the service and project scope. We offer transparent, competitive rates and provide detailed quotes after understanding your requirements. For our Digital Marketing & Lead Generation service, we guarantee 20+ qualified leads per month — or the next month is free. Book a free consultation to discuss your project and get a custom quote.',
    },
    {
      question: 'Is TechHive registered and compliant?',
      answer: 'Yes, TechHive is a 100% remote innovation studio registered in the US and in Nigeria under the Companies and Allied Matters Act (CAMA) 2020. We are fully compliant with NDPA 2023 (Nigeria Data Protection Act), use encrypted tools, and provide NDAs as standard. Your intellectual property is safe with us.',
    },
    {
      question: 'How do I get started with TechHive?',
      answer: 'Simply book a free consultation through our website. In one 30-minute call, we\'ll audit your idea, discuss your needs, provide recommendations, and deliver a 90-day launch blueprint. We\'ll create a customized plan to achieve your business goals with clear next steps.',
    },
    {
      question: 'What makes TechHive different from other agencies?',
      answer: 'We\'re your silent co-founder, not just a service provider. Key differentiators: 100% remote-first (lower overhead, better value), client-centric approach (we build outcomes, not features), compliant & secure (NDPA 2023, encrypted tools, NDAs standard), results-driven (we measure success in leads, users, revenue), senior specialists only (no juniors, no delays), and comprehensive services (from strategy to marketing - all under one roof).',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment options for most projects. We can discuss payment terms during your consultation to find an arrangement that works for your budget. Our goal is to make professional business services accessible to all entrepreneurs.',
    },
    {
      question: 'What technology stack do you use?',
      answer: 'We use industry-leading tools: Design (Figma, Adobe Suite), Frontend (React, Next.js, Tailwind), Backend (Node.js, Django, PostgreSQL), Cloud (AWS, Vercel, DigitalOcean), Collaboration (Meta Suite, Slack, Trello, Zoom, Google Suite), and Analytics (Google Analytics, Hotjar, Meta Pixel). We guarantee < 2s load time, 99.9% uptime, and zero critical bugs at launch.',
    },
    {
      question: 'What kind of results can I expect?',
      answer: 'Our clients see measurable outcomes: Business Consultancy - 80% reduce time-to-launch by 60+ days, 3 clients raised $50K+ post-consultancy. UI/UX Design - +40% average increase in user session time, 95% client satisfaction. Web Development - < 2s load time, 99.9% uptime. Digital Marketing - 20+ qualified leads per month guaranteed, past results include 40 leads @ ₦1,200 CPL and $12K in sales from $2K ad spend.',
    },
  ];

  return (
    <>
      <Head>
        <title>Frequently Asked Questions - TechHive</title>
        <meta
          name="description"
          content="Find answers to common questions about TechHive's services, pricing, compliance, results, and more. Your easing station for business success."
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
                  <HelpOutlineIcon className="h-5 w-5 mr-2" />
                  <span className="text-sm font-semibold">FAQ</span>
                </motion.div>
                
                <h1 className="text-2xl sm:text-6xl font-black mb-6">
                  Frequently Asked
                  <br />
                  <span className="text-cyan-300">Questions</span>
                </h1>
                <p className="text-lg sm:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                  Everything you need to know about working with TechHive
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <FAQAccordion faqs={faqs} />
            </MotionWrapper>

            {/* Still Have Questions */}
            <MotionWrapper delay={0.3}>
              <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 text-center shadow-xl border border-gray-100">
                <HelpOutlineIcon className="h-16 w-16 text-accent mx-auto mb-6" />
                <h2 className="text-xl sm:text-3xl font-bold text-primary mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg mobile:text-sm">
                  We&apos;re here to help! Book a free consultation and let&apos;s discuss your specific needs. 
                  In one 30-minute call, we&apos;ll provide clarity and a clear path forward.
                </p>
                <Link href="/book-session">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-primary to-accent text-white px-10 py-4 rounded-full font-bold text-lg mobile:text-sm shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
                  >
                    Book a Free Session
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </motion.button>
                </Link>
              </div>
            </MotionWrapper>
          </div>
        </section>
      </main>
    </>
  );
}

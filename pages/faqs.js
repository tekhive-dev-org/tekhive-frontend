import Head from 'next/head';
import { MotionWrapper, FAQAccordion } from '../components/ui';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FAQs() {
  const faqs = [
    {
      question: 'What services does TechHive offer?',
      answer: 'TechHive provides four core services: Business Consultancy (including CAC registration and compliance), UI/UX Design, Web Development, and Digital Marketing. We offer comprehensive support for businesses at every stage of growth.',
    },
    {
      question: 'How long does CAC business registration take?',
      answer: 'Typically, CAC business registration takes 3-5 business days after all required documents are submitted. We handle the entire process for you, ensuring compliance with CAMA 2020 regulations.',
    },
    {
      question: 'Do you work with startups or only established businesses?',
      answer: 'We work with businesses at all stages - from startups just launching to established companies looking to scale. Our services are tailored to meet your specific needs and budget.',
    },
    {
      question: 'What is your pricing model?',
      answer: 'Our pricing varies based on the service and project scope. We offer transparent, competitive rates and provide detailed quotes after understanding your requirements. Book a free consultation to discuss your project and get a custom quote.',
    },
    {
      question: 'Is TechHive registered with CAC?',
      answer: 'Yes, TechHive is fully registered with the Corporate Affairs Commission (CAC) and compliant with all Nigerian business regulations including CAMA 2020.',
    },
    {
      question: 'How do I get started with TechHive?',
      answer: 'Simply book a free consultation through our website. We\'ll discuss your needs, provide recommendations, and create a customized plan to achieve your business goals.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment options for most projects. We can discuss payment terms during your consultation to find an arrangement that works for your budget.',
    },
    {
      question: 'What makes TechHive different from other agencies?',
      answer: 'TechHive is your one-stop solution for business enablement. We combine business consultancy with technical expertise, ensuring your business is both legally compliant and digitally competitive. Our 100% remote team means lower overhead and better value for you.',
    },
  ];

  return (
    <>
      <Head>
        <title>Frequently Asked Questions - TechHive</title>
        <meta
          name="description"
          content="Find answers to common questions about TechHive's services, pricing, CAC registration, and more."
        />
      </Head>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-light py-20 text-white">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                  Find answers to common questions about our services and processes
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
              <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  We&apos;re here to help! Book a free consultation and let&apos;s discuss your specific needs.
                </p>
                <Link href="/book-session">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-colors duration-200"
                  >
                    Book a Session
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

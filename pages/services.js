import Head from 'next/head';
import { MotionWrapper, ServiceCard } from '../components/ui';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import CampaignIcon from '@mui/icons-material/Campaign';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: <BusinessCenterIcon className="h-16 w-16" />,
      title: 'Business Consultancy',
      description: 'Strategic guidance for business launch, CAC registration, and compliance with Nigerian business laws including CAMA 2020.',
      features: [
        'CAC Business Registration',
        'Business Plan Development',
        'Compliance & Legal Advisory',
        'Tax Registration (FIRS)',
        'Business Structure Optimization',
      ],
    },
    {
      icon: <DesignServicesIcon className="h-16 w-16" />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences for your customers.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Usability Testing',
        'Design System Creation',
      ],
    },
    {
      icon: <CodeIcon className="h-16 w-16" />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance.',
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Development & Integration',
        'Performance Optimization',
      ],
    },
    {
      icon: <CampaignIcon className="h-16 w-16" />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your brand, reach your target audience, and drive conversions.',
      features: [
        'Social Media Management',
        'Search Engine Optimization',
        'Content Marketing Strategy',
        'Email Marketing Campaigns',
        'Analytics & Reporting',
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Our Services - TechHive</title>
        <meta
          name="description"
          content="Explore TechHive's comprehensive services: Business Consultancy, UI/UX Design, Web Development, and Digital Marketing."
        />
      </Head>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-light py-20 text-white">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Our Services
                </h1>
                <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                  Comprehensive solutions designed to launch and grow your business with professional excellence
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  id={service.title.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-')}
                >
                  <div className="text-accent mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-primary mb-3">Key Features:</h3>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <MotionWrapper>
              <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
                  Let&apos;s discuss how we can help your business thrive
                </p>
                <Link href="/book-session">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white hover:bg-gray-100 text-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-colors duration-200"
                  >
                    Book a Free Consultation
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

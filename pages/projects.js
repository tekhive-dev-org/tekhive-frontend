import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MotionWrapper } from '../components/ui';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import WorkIcon from '@mui/icons-material/Work';
import ProjectCard from '../components/ui/ProjectCard';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Villa Agency',
      description: 'A modern luxury real estate platform connecting clients with premium properties across Lagos. Features advanced property search, booking management, and professional inspection scheduling.',
      category: 'Web Development',
      link: 'https://stencytochil.github.io/villa',
      image: '/assets/Images/projects/villa.png',
      details: [
        'Property Listing Management',
        'Booking & Inspection Scheduling',
        'Advanced Search & Filtering',
        'Responsive Design',
        'Property Details Pages',
        'Contact Integration',
      ],
      fullDescription: 'Villa Agency is a comprehensive real estate platform built to showcase luxury properties across premium Lagos locations including Victoria Island, Lekki, and Ikoyi. The platform features an intuitive interface for browsing properties, scheduling inspections, and connecting with professional agents.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      client: 'Villa Agency Nigeria',
      year: 2024,
    },
    {
      id: 2,
      title: 'EastHaus Restaurant',
      description: 'A contemporary Pan-Asian restaurant website with dynamic menu showcase, table reservation system, and engaging blog features. Perfect for showcasing culinary excellence and building customer relationships.',
      category: 'Web Development',
      link: 'https://stencytochil.github.io/Easthaus/',
      image: '/assets/Images/projects/easthaus.png',
      details: [
        'Restaurant Menu System',
        'Table Reservations',
        'Blog & Stories Integration',
        'Contact Management',
        'Mobile Optimized',
        'Event Showcase',
      ],
      fullDescription: 'EastHaus is a premium Pan-Asian restaurant website that brings together the bold, balanced, and unforgettable tastes of Pan-Asian cuisine. The site features a comprehensive menu system, online reservation capabilities, and a kitchen journal blog for sharing culinary stories and recipes.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
      client: 'EastHaus Restaurant',
      year: 2024,
    },
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { staggerChildren: 0.1 },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <Head>
        <title>Our Projects - TechHive</title>
        <meta
          name="description"
          content="Explore TechHive's portfolio of successful projects. See how we've helped clients build stunning digital experiences and grow their businesses."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Projects - TechHive" />
        <meta property="og:description" content="Explore TechHive's portfolio of successful projects" />
        <meta property="og:image" content="/assets/logo.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Projects - TechHive" />
        <meta name="twitter:description" content="Explore TechHive's portfolio of successful projects" />
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
                  <WorkIcon className="h-5 w-5 mr-2" />
                  <span className="text-sm font-semibold">OUR PROJECTS</span>
                </motion.div>
                
                <h1 className="text-3xl sm:text-6xl font-black mb-6">
                  Transforming ideas
                  <br />
                  <span className="text-cyan-300">into digital excellence.</span>
                </h1>
                <p className="text-base sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                  Explore our portfolio of successful projects. From luxury real estate platforms to contemporary restaurants, we deliver beautiful, functional digital experiences that drive results.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            >
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>

            {/* Detailed Project Cards */}
            <div className="space-y-12">
              {projects.map((project, index) => (
                <motion.div
                  key={`detail-${project.id}`}
                  variants={itemVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="p-8 md:p-12">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600">
                          Client: <span className="font-semibold text-gray-900">{project.client}</span> • Year: <span className="font-semibold text-gray-900">{project.year}</span>
                        </p>
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-teal text-white font-semibold rounded-lg hover:bg-teal-light transition-colors duration-300 group"
                      >
                        <span>Visit Project</span>
                        <OpenInNewIcon className="ml-2 h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    </div>

                    {/* Description */}
                    <div className="mb-8 pb-8 border-b border-gray-200">
                      <p className="text-lg mobile:text-base text-gray-700 leading-relaxed">
                        {project.fullDescription}
                      </p>
                    </div>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Features */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Key Features</h4>
                        <ul className="space-y-3">
                          {project.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-gradient-to-r from-teal to-accent rounded-full mr-3 mt-2"></span>
                              <span className="text-gray-700 mobile:text-base">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-gradient-to-r from-teal-100 to-accent-light text-gray-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-teal to-accent">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={itemVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Build Your Next Project?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto mobile:text-base"
            >
              Let&apos;s work together to bring your vision to life. Get in touch with our team today to discuss how we can help you create an amazing digital experience.
            </motion.p>

            <motion.div
              variants={itemVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/book-session" legacyBehavior>
                <a className="px-8 py-4 bg-white text-teal font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-block">
                  Book a Free Consultation
                </a>
              </Link>
              <Link href="/" legacyBehavior>
                <a className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-teal transition-all duration-300 inline-block">
                  Back to Home
                </a>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

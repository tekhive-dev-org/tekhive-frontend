import { motion } from 'framer-motion';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProjectCard from '../ui/ProjectCard';

export default function FeaturedProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Villa Agency',
      description: 'A modern luxury real estate platform connecting clients with premium properties across Lagos.',
      category: 'Web Development',
      link: 'https://stencytochil.github.io/villa',
      image: '/assets/Images/projects/villa.png',
      details: [
        'Property Listing Management',
        'Booking & Inspection Scheduling',
        'Advanced Search & Filtering',
      ],
    },
    {
      id: 2,
      title: 'EastHaus Restaurant',
      description: 'A contemporary Pan-Asian restaurant website with menu showcase, reservations, and blog features.',
      category: 'Web Development',
      link: 'https://stencytochil.github.io/Easthaus/',
      image: '/assets/Images/projects/easthaus.png',
      details: [
        'Restaurant Menu System',
        'Table Reservations',
        'Blog & Stories Integration',
      ],
    },
  ];

  const sectionVariants = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.6 },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="py-20 px-4 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-dark rounded-full text-sm font-semibold mb-4">
              ✨ OUR WORK
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-accent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto mobile:text-base"
          >
            Explore some of our recent projects where we&apos;ve helped clients transform their digital presence and achieve their business goals.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          variants={itemVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/projects" legacyBehavior>
            <a className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-teal/50 transition-all duration-300 group">
              <span>View All Projects</span>
              <ArrowForwardIcon className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

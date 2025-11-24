import { motion } from 'framer-motion';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ProjectCard({ project, index }) {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: index * 0.1 },
  };

  const hoverVariants = {
    initial: { y: 0 },
    hover: { y: -10 },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: '-100px' }}
      whileHover="hover"
      className="h-full"
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full group">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
            {/* Project Image */}
            <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
              {project.image ? (
                <motion.div
                  className="relative w-full h-full"
                  variants={imageVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:opacity-90 transition-opacity duration-300"
                  />
                </motion.div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-600">
                  <span className="text-white text-4xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Project Content */}
            <div className="p-6 flex-grow flex flex-col">
              {/* Category Badge */}
              {project.category && (
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-teal-100 text-teal-dark text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Project Details */}
              {project.details && (
                <div className="mb-4 space-y-2">
                  {project.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-700">
                      <span className="w-2 h-2 bg-teal-light rounded-full mr-2"></span>
                      {detail}
                    </div>
                  ))}
                </div>
              )}

              {/* CTA Button */}
              <div className="flex items-center text-teal font-semibold text-sm group-hover:text-teal-light transition-colors duration-300 mt-auto">
                <span>View Project</span>
                <ArrowForwardIcon className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </a>
    </motion.div>
  );
}

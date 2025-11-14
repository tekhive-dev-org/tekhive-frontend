import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Groups from '@mui/icons-material/Groups';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ServiceModal({ service, isOpen, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="sticky top-4 right-4 float-right bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 transition-colors duration-200 z-10"
                >
                  <CloseIcon className="h-6 w-6" />
                </button>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="text-accent mb-4">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-secondary font-semibold mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-lg mobile:text-sm text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                      <CheckCircleIcon className="h-7 w-7 text-accent mr-3" />
                      What You Get
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200 hover:border-accent/50 transition-colors duration-300">
                          <h4 className="font-bold text-primary mb-2">{deliverable.name}</h4>
                          <p className="text-gray-600 text-sm">{deliverable.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools (if available) */}
                  {service.tools && (
                    <div className="mb-10">
                      <h3 className="text-xl font-bold text-primary mb-4">Tools We Master</h3>
                      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10">
                        <p className="text-gray-700 font-mono text-sm md:text-base">
                          {service.tools}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {/* Who This Is For */}
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                        <Groups className="h-6 w-6 text-accent mr-2" />
                        Who This Is For
                      </h3>
                      <ul className="space-y-3">
                        {service.whoFor.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5  text-success mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 mobile:text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                        <TrendingUpIcon className="h-6 w-6 text-accent mr-2" />
                        {service.guarantee ? 'Our Lead Guarantee' : 'Results That Matter'}
                      </h3>
                      <ul className="space-y-3">
                        {service.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 mobile:text-sm">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center pt-6 border-t border-gray-200">
                    <Link href="/book-session">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-primary to-accent text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center mobile:text-sm"
                      >
                        Book a Free {service.title.includes('Consultancy') ? 'Strategy' : service.title.includes('Design') ? 'Design Audit' : service.title.includes('Development') ? 'Tech Consult' : 'Marketing Strategy'} Call
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
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

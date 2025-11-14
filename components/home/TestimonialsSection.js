import { motion } from 'framer-motion';
import Link from 'next/link';
import { MotionWrapper, TestimonialCarousel } from '../ui';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import QuoteIcon from '@mui/icons-material/FormatQuote';

export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-teal/5 to-slate/5"></div>
        
        {/* Static Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a4558' fill-opacity='0.6'%3E%3Cpath d='M30 30m-28 0a28 28 0 1 1 56 0a28 28 0 1 1 -56 0'/%3E%3Cpath d='M30 6v48M6 30h48'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>

      {/* Removed floating decorative elements for cleaner look */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionWrapper>
          <div className="text-center mb-20">
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-gradient-to-r from-accent/10 to-secondary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-accent/20 mb-6"
            >
              <GroupsIcon className="h-5 w-5 text-accent mr-2" />
              <span className="text-sm mobile:text-xs font-semibold text-accent">CLIENT TESTIMONIALS</span>
            </motion.div>
            
            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-black text-primary mb-6"
            >
              What Our Clients{' '}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Say About Us
              </span>
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mobile:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Trusted by innovative businesses to deliver exceptional results. 
              Here&apos;s what our clients have to say about their transformation journey with us.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-8 mt-8"
            >
              <div className="flex mobile:flex-col items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-accent" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-600">5.0 Average Rating</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="text-sm font-semibold text-gray-600">50+ Happy Clients</div>
            </motion.div>
          </div>
        </MotionWrapper>

        {/* Enhanced Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <TestimonialCarousel testimonials={testimonials} />
        </motion.div>

        {/* Enhanced CTA Section */}
        <MotionWrapper delay={0.6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-3xl p-10 mobile:p-6 border border-secondary/10">
              <div className="max-w-2xl mx-auto">
                <QuoteIcon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Ready to Join Our Success Stories?
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Experience the same exceptional service and results that our clients rave about. 
                  Let&apos;s write your success story together.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/testimonials">
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(97, 1, 208, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-secondary to-magenta hover:from-magenta hover:to-secondary text-white mobile:text-sm mobile:px-4 px-10 py-4 rounded-full font-bold shadow-lg transition-all duration-300 inline-flex items-center gap-3 group"
                    >
                      <StarIcon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      View All Testimonials
                      <ArrowForwardIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </Link>
                  
                  <Link href="/book-session">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white hover:bg-gray-50 text-secondary border-2 border-secondary/20 hover:border-secondary/40 px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2"
                    >
                      Start Your Journey
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </MotionWrapper>
      </div>
    </section>
  );
}

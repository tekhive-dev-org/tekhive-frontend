import { motion } from 'framer-motion';
import Link from 'next/link';
import { MotionWrapper } from '../ui';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function BenefitsSection({ benefits }) {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-teal-light">
        {/* Static Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-primary/90 to-secondary/80" />
      </div>

      {/* Simplified floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <MotionWrapper>
            <div className="text-white">
              {/* Section Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="inline-flex items-center bg-white/15 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8"
              >
                <AutoAwesomeIcon className="h-5 w-5 text-accent mr-2" />
                <span className="text-sm mobile:text-xs font-semibold text-white">WHAT YOU GET</span>
              </motion.div>

              {/* Main Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-5xl font-black mb-6 leading-tight"
              >
                Everything You Need to{' '}
                <span className="bg-gradient-to-r from-accent via-teal-light to-teal-lighter bg-clip-text text-transparent">
                  Dominate
                </span>
              </motion.h2>
              
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl mobile:text-base text-white/90 mb-10 leading-relaxed"
              >
                We provide comprehensive support for businesses at every stage of their journey. 
                From legal setup to digital transformation, we&apos;ve got you covered with 
                <span className="font-semibold text-accent"> enterprise-level solutions</span>.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-6 mb-10 items-center"
              >
                <div className="text-center">
                  <div className="text-3xl font-black text-accent mb-1">50+</div>
                  <div className="text-xs text-white/70">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-accent mb-1">98%</div>
                  <div className="text-xs text-white/70">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-accent mb-1">5+</div>
                  <div className="text-xs text-white/70">Years Experience</div>
                </div>
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/about">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white hover:bg-gray-100 text-primary mobile:text-sm px-8 py-4 rounded-full font-bold shadow-xl transition-all duration-300 inline-flex items-center gap-3 group"
                  >
                    <TrendingUpIcon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    Learn More About Us
                    <ArrowForwardIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </Link>
                
                <Link href="/book-session">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold border-2 border-white/20 hover:border-white/40 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Get Free Consultation
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </MotionWrapper>

          {/* Right Benefits Grid */}
          <MotionWrapper delay={0.2}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Benefits Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 mobile:p-6 border border-white/20 shadow-2xl relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 rounded-3xl"></div>
                
                {/* Benefits List */}
                <div className="relative z-10">
                  <div className="grid gap-6">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 group"
                      >
                        {/* Enhanced Check Icon */}
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-8 h-8 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                        >
                          <CheckCircleOutlineIcon className="h-5 w-5 text-white" />
                        </motion.div>
                        
                        {/* Benefit Text */}
                        <span className="text-white/90 font-medium group-hover:text-white transition-colors duration-300 leading-relaxed">
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating Success Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.8,
                    type: "spring",
                    stiffness: 200 
                  }}
                  viewport={{ once: true }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center shadow-xl"
                >
                  <StarIcon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Corner Decoration */}
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full"></div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ scale: 0, y: 50 }}
                whileInView={{ scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1,
                  type: "spring",
                  stiffness: 150 
                }}
                viewport={{ once: true }}
                className="absolute -bottom-16 mobile:-bottom-20 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <AutoAwesomeIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-lg">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction Guaranteed</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}

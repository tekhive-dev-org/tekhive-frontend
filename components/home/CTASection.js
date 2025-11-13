import { motion } from 'framer-motion';
import Link from 'next/link';
import { MotionWrapper } from '../ui';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PhoneIcon from '@mui/icons-material/Phone';
import StarIcon from '@mui/icons-material/Star';
import SecurityIcon from '@mui/icons-material/Security';

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-magenta">
        {/* Static Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary/80 to-secondary/90" />
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
          className="absolute bottom-20 right-10 w-40 h-40 bg-magenta/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionWrapper>
          <div className="text-center max-w-4xl mx-auto">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-white/15 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20"
            >
              <RocketLaunchIcon className="h-6 w-6 text-accent mr-3" />
              <span className="text-sm mobile:text-xs font-semibold text-white">Ready to Transform Your Business?</span>
              <StarIcon className="h-5 w-5 text-accent ml-3" />
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-6xl font-black text-white mb-8 leading-tight"
            >
              Ready to Launch Your{' '}
              <span className="bg-gradient-to-r from-accent via-orange-light to-orange-dark bg-clip-text text-transparent">
                Business Hive?
              </span>
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mobile:text-sm text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Let us handle the complexities while you focus on what matters most - 
              <span className="font-semibold text-accent"> growing your empire</span>. 
              Book a free consultation and discover the TechHive difference.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <SecurityIcon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-white">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <StarIcon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-white">5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <PhoneIcon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-white">24/7 Support</span>
              </div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/book-session">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(229, 123, 12, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-accent via-orange-light to-orange-dark hover:from-orange-dark hover:to-accent text-white mobile:text-sm px-12 py-5 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 inline-flex items-center gap-3 group"
                >
                  <RocketLaunchIcon className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  Start Your Journey
                  <ArrowForwardIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white mobile:text-sm mobile:px-4 mobile:py-3 px-10 py-5 rounded-full font-semibold text-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300 inline-flex items-center gap-3 group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <PlayArrowIcon className="h-6 w-6 text-white ml-1" />
                </div>
                Watch Our Story
              </motion.button>
            </motion.div>

            {/* Bottom Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 pt-8 border-t border-white/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-black text-accent mb-2">50+</div>
                  <div className="text-white/80 font-medium">Successful Launches</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-accent mb-2">98%</div>
                  <div className="text-white/80 font-medium">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-accent mb-2">24H</div>
                  <div className="text-white/80 font-medium">Average Response Time</div>
                </div>
              </div>
            </motion.div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

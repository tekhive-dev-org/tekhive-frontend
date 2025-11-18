import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VerifiedIcon from '@mui/icons-material/Verified';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import CampaignIcon from '@mui/icons-material/Campaign';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import SecurityIcon from '@mui/icons-material/Security';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-teal-light"></div>

      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 40c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm10 0c0-16.6-13.4-30-30-30S10 23.4 10 40s13.4 30 30 30 30-13.4 30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Advanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-accent/30 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-32 right-16 w-40 h-40 bg-secondary/25 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.15, 0.5, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-teal-light/40 rounded-full blur-xl"
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-accent/40 rotate-45"
        />
        <motion.div
          animate={{
            rotate: [0, -360],
            y: [0, 15, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-secondary/30 rounded-full"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mobile:pt-24 md:pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center bg-white/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-accent via-teal-light to-primary-light rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <RocketLaunchIcon className="h-4 w-4 text-white" />
              </div>
              <div className="text-left mobile:text-center">
                <span className="text-xs font-bold text-white block">TechHive Enterprise</span>
                <span className="text-xs text-white/80">Launch Your Business Today</span>
              </div>
              <VerifiedIcon className="h-4 w-4 text-accent ml-3" />
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-2xl capitalize sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
                We handle the
                <span className="block mobile:inline-block capitalize mobile:ml-2 text-cyan-300">
                  details,
                </span>
                <span className="block">
                  you lead the{' '}
                  <span className="text-cyan-300 font-black">
                    hive.
                  </span>
                </span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-sm md:text-xl text-white/90 leading-relaxed max-w-xl lg:max-w-2xl"
              >
                Your <span className="font-semibold text-cyan-300">complete business ecosystem</span> for launch & growth. 
                From CAC registration to cutting-edge web development.
              </motion.p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                <CheckCircleIcon className="h-4 w-4 text-cyan-300" />
                <span className="text-xs font-medium text-white">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                <SecurityIcon className="h-4 w-4 text-cyan-300" />
                <span className="text-xs font-medium text-white">
                  {/* CAC */}
                   Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                <TrendingUpIcon className="h-4 w-4 text-cyan-300" />
                <span className="text-xs font-medium text-white">100% Success Rate</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mobile:items-center lg:justify-start"
            >
              <Link href="/book-session">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(61, 127, 153, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-accent via-accent-light to-teal-lighter hover:from-teal-lighter hover:to-accent text-white px-8 py-3 rounded-full font-bold text-base shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <RocketLaunchIcon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Start Your Journey
                  <ArrowForwardIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold text-base border-2 border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <PlayArrowIcon className="h-4 w-4 text-white ml-0.5" />
                </div>
                Watch Video
              </motion.button>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20"
            >
              <div className="text-center ">
                <div className="text-2xl md:text-3xl font-black text-white mb-1">50+</div>
                <div className="text-xs text-white/70 font-medium">Happy Clients</div>
              </div>
              <div className="text-center ">
                <div className="text-2xl md:text-3xl font-black text-white mb-1">100%</div>
                <div className="text-xs text-white/70 font-medium">Remote Ready</div>
              </div>
              <div className="text-center ">
                <div className="text-2xl md:text-3xl font-black text-white mb-1">24/7</div>
                <div className="text-xs text-white/70 font-medium">Expert Support</div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            {/* Main Dashboard Mockup */}
            <div className="relative">
              {/* Glass Morphism Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl"
              >
                <div className="grid grid-cols-2 gap-4">
                  {/* Service Cards with Enhanced Animations */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -4,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                    }}
                    className="bg-white rounded-xl p-4 shadow-lg h-full flex flex-col group"
                  >
                    <div className="bg-gradient-to-br from-primary to-secondary text-white w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <BusinessCenterIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1 text-sm">Business Setup</h3>
                    <p className="text-xs text-gray-600 flex-grow">CAC Registration & Legal</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -4,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                    }}
                    className="bg-white rounded-xl p-4 shadow-lg h-full flex flex-col group"
                  >
                    <div className="bg-gradient-to-br from-accent to-accent-dark text-white w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <DesignServicesIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1 text-sm">UI/UX Design</h3>
                    <p className="text-xs text-gray-600 flex-grow">Modern Solutions</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -4,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                    }}
                    className="bg-white rounded-xl p-4 shadow-lg h-full flex flex-col group"
                  >
                    <div className="bg-gradient-to-br from-teal-light to-secondary text-white w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <CodeIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1 text-sm">Development</h3>
                    <p className="text-xs text-gray-600 flex-grow">Web & Mobile Apps</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -4,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                    }}
                    className="bg-white rounded-xl p-4 shadow-lg h-full flex flex-col group"
                  >
                    <div className="bg-gradient-to-br from-secondary to-teal-light text-white w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <CampaignIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1 text-sm">Digital Marketing</h3>
                    <p className="text-xs text-gray-600 flex-grow">Growth & Brand</p>
                  </motion.div>
                </div>

                {/* Additional Visual Elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="mt-4 flex items-center justify-between px-2"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-white/80 text-xs font-medium">Live Services</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GroupsIcon className="h-3 w-3 text-white/60" />
                    <span className="text-white/60 text-xs">50+ Projects</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Success Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                className="absolute -top-3 -right-3 bg-gradient-to-r from-accent via-teal-light to-teal-lighter text-white px-4 py-2 rounded-xl shadow-xl"
              >
                <motion.div
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-2"
                >
                  <VerifiedIcon className="h-4 w-4" />
                  <div>
                    <div className="font-bold text-xs">
                      {/* CAC  */}
                      Certified</div>
                    <div className="text-xs opacity-90">Trusted Partner</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ scale: 0, x: -50 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.8,
                  type: "spring",
                  stiffness: 150
                }}
                className="absolute -bottom-3 -left-3 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <TrendingUpIcon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">98%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

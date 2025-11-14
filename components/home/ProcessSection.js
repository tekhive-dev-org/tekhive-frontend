import { motion } from 'framer-motion';
import { MotionWrapper } from '../ui';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RouteIcon from '@mui/icons-material/Route';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function ProcessSection() {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Consultation',
      description: 'We dive deep into your vision, goals, and challenges to create a tailored strategy',
      icon: <SupportAgentIcon className="h-8 w-8" />,
      gradient: "from-accent to-accent-dark",
      delay: 0.1
    },
    {
      step: '02',
      title: 'Strategic Planning',
      description: 'Comprehensive roadmap with clear milestones, timelines, and deliverables',
      icon: <BusinessCenterIcon className="h-8 w-8" />,
      gradient: "from-primary to-secondary",
      delay: 0.2
    },
    {
      step: '03',
      title: 'Expert Execution',
      description: 'Professional implementation with regular updates and quality checkpoints',
      icon: <RocketLaunchIcon className="h-8 w-8" />,
      gradient: "from-teal-light to-secondary",
      delay: 0.3
    },
    {
      step: '04',
      title: 'Growth & Optimization',
      description: 'Continuous support, monitoring, and scaling to maximize your success',
      icon: <TrendingUpIcon className="h-8 w-8" />,
      gradient: "from-secondary to-accent",
      delay: 0.4
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Static Background with Pattern */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-teal/5"></div>
        
        {/* Static subtle gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a4558' fill-opacity='0.6'%3E%3Cpath d='M60 60l20-20v40l-20-20zm-40 0l20-20v40l-20-20zm20-40l20 20H20l20-20zm0 80l20-20H20l20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              className="inline-flex items-center bg-gradient-to-r from-secondary/10 to-accent/10 backdrop-blur-sm px-6 py-3 rounded-full border border-secondary/20 mb-6"
            >
              <RouteIcon className="h-5 w-5 text-secondary mr-2" />
              <span className="text-sm mobile:text-xs font-semibold text-secondary">OUR PROCESS</span>
            </motion.div>
            
            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-black text-primary mb-6"
            >
              Your Success Journey,{' '}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Step by Step
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
              Our proven methodology ensures your business transformation is seamless, 
              strategic, and successful from conception to scale.
            </motion.p>
          </div>
        </MotionWrapper>
        {/* Process Steps Grid */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.15)"
                }}
                className="group relative"
              >
                {/* Main Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mobile:p-6 border border-gray-100 group-hover:border-accent/30 transition-all duration-500 h-full flex flex-col relative overflow-hidden shadow-lg group-hover:shadow-2xl">
                  
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Step Number */}
                  <div className="text-7xl font-black text-gray-100 group-hover:text-accent/10 transition-colors duration-500 mb-4 leading-none">
                    {item.step}
                  </div>

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1 
                    }}
                    transition={{ duration: 0.8 }}
                    className={`bg-gradient-to-br ${item.gradient} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0 group-hover:shadow-lg transition-shadow duration-300 relative z-10`}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Step Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: item.delay + 0.2,
                    type: "spring",
                    stiffness: 200 
                  }}
                  viewport={{ once: true }}
                  className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${item.gradient} text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg`}
                >
                  <AutoAwesomeIcon className="h-5 w-5" />
                </motion.div>

                {/* Connection Arrow (Desktop) */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: item.delay + 0.4 }}
                    viewport={{ once: true }}
                    className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20"
                  >
                    <div className="bg-white rounded-full p-2 shadow-lg border border-gray-100">
                      <ArrowForwardIcon className="h-6 w-6 text-accent" />
                    </div>
                  </motion.div>
                )}

                {/* Mobile Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-6">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.8, delay: item.delay + 0.3 }}
                      viewport={{ once: true }}
                      className="w-0.5 h-12 bg-gradient-to-b from-accent to-secondary"
                    ></motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-2xl p-8 border border-secondary/10">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let&apos;s transform your vision into reality with our proven process and expert guidance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-secondary to-accent text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Your Project
              <RocketLaunchIcon className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

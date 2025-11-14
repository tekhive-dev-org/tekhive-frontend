import { motion } from 'framer-motion';
import Link from 'next/link';
import { MotionWrapper, ServiceCard } from '../ui';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkIcon from '@mui/icons-material/Work';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function ServicesSection({ services }) {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-teal/5 to-slate/5"></div>
        
        {/* Static subtle Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />

        {/* Geometric Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a4558' fill-opacity='0.8'%3E%3Cpath d='M20 20h60v60H20z' fill='none' stroke='%231a4558' stroke-width='1'/%3E%3Ccircle cx='50' cy='50' r='25' fill='none' stroke='%233d7f99' stroke-width='1'/%3E%3Cpath d='M35 35l30 30M65 35l-30 30' stroke='%23566e77' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>

      {/* Removed floating decorations for cleaner look */}

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
              <WorkIcon className="h-5 w-5 text-accent mr-2" />
              <span className="text-sm mobile:text-xs font-semibold text-accent">OUR SERVICES</span>
            </motion.div>
            
            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-black text-primary mb-6"
            >
              Comprehensive Business{' '}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mobile:text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              From legal compliance to cutting-edge digital presence, we provide end-to-end services 
              to launch, scale, and dominate your market with confidence.
            </motion.p>
          </div>
        </MotionWrapper>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(0,0,0,0.15)"
              }}
              className="group relative h-full"
            >
              {/* Enhanced Service Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mobile:p-6 border border-gray-100 group-hover:border-accent/30 transition-all duration-500 h-full flex flex-col relative overflow-hidden shadow-lg group-hover:shadow-2xl min-h-[400px] mobile:min-h-full">
                
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Icon Container */}
                <motion.div
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1 
                  }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-accent to-secondary text-white w-16 h-16 mobile:w-16 mobile:h-16 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0 group-hover:shadow-lg transition-shadow duration-300 relative z-10"
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300 flex-shrink-0">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mobile:text-sm group-hover:text-gray-700 transition-colors duration-300 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0"
                  >
                    <div className="inline-flex items-center text-accent group-hover:text-secondary transition-colors duration-300 font-semibold group cursor-pointer">
                      <span className="text-sm">Learn More</span>
                      <ArrowForwardIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Service Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15 + 0.3,
                  type: "spring",
                  stiffness: 200 
                }}
                viewport={{ once: true }}
                className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-secondary to-magenta text-white rounded-full flex items-center justify-center shadow-lg"
              >
                <AutoAwesomeIcon className="h-5 w-5" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <MotionWrapper delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-3xl p-10 mobile:p-6 border border-secondary/10 backdrop-blur-sm">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-gray-600 mb-8 mobile:text-sm leading-relaxed">
                  Explore our complete range of services and discover how we can help you achieve your business goals faster and more efficiently.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/services">
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(97, 1, 208, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-secondary to-magenta hover:from-magenta hover:to-secondary text-white px-10 mobile:px-4 mobile:text-sm py-4 rounded-full font-bold shadow-lg transition-all duration-300 inline-flex items-center gap-3 group"
                    >
                      <TrendingUpIcon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      Explore All Services
                      <ArrowForwardIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </Link>
                  
                  <Link href="/book-session">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white hover:bg-gray-50 text-secondary border-2 border-secondary/20 hover:border-secondary/40 px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2"
                    >
                      Get Free Consultation
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

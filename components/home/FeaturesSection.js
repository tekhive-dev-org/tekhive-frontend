import { motion } from 'framer-motion';
import { MotionWrapper } from '../ui';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function FeaturesSection({ features }) {
  const defaultFeatures = [
    {
      icon: <WorkspacePremiumIcon className="h-7 w-7" />,
      title: "Premium Quality",
      description: "We deliver nothing but the highest quality solutions that exceed expectations and industry standards."
    },
    {
      icon: <FlashOnIcon className="h-7 w-7" />,
      title: "Lightning Fast",
      description: "Quick turnaround times without compromising on quality. Your business needs move at the speed of light."
    },
    {
      icon: <SecurityIcon className="h-7 w-7" />,
      title: "100% Secure",
      description: "Your data and business information are protected with enterprise-grade security measures."
    },
    {
      icon: <SupportAgentIcon className="h-7 w-7" />,
      title: "24/7 Support",
      description: "Round-the-clock support from our expert team whenever you need assistance or guidance."
    }
  ];

  const displayFeatures = features && features.length > 0 ? features : defaultFeatures;

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple/5"></div>
        
        {/* Static Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236101d0' fill-opacity='0.8'%3E%3Cpath d='M25 25h50v50H25z' fill='none' stroke='%236101d0' stroke-width='1'/%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='%23e57b0c' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>

      {/* Removed decorative elements for cleaner look */}

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
              <WorkspacePremiumIcon className="h-5 w-5 text-secondary mr-2" />
              <span className="text-sm mobile:text-xs font-semibold text-secondary">WHY CHOOSE TECHHIVE</span>
            </motion.div>
            
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-black text-primary mb-6"
            >
              Excellence in Every{' '}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Detail
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
              We combine cutting-edge technology, creative expertise, and unwavering commitment 
              to deliver solutions that transform businesses and exceed expectations.
            </motion.p>
          </div>
        </MotionWrapper>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
              }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 mobile:p-5 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-secondary/30 h-full flex flex-col relative overflow-hidden">
                
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-secondary to-magenta text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0 group-hover:shadow-lg transition-shadow duration-300"
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed flex-grow mobile:text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Number Badge */}
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
                className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-accent to-orange-dark text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

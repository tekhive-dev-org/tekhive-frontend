import { motion } from 'framer-motion';
import { MotionWrapper } from '../ui';
import CountUpIcon from '@mui/icons-material/TrendingUp';
import BusinessIcon from '@mui/icons-material/Business';
import StarIcon from '@mui/icons-material/Star';
import SupportIcon from '@mui/icons-material/Support';

export default function StatsSection({ stats }) {
  const enhancedStats = [
    { value: "50+", label: "Happy Clients", icon: <BusinessIcon className="h-8 w-8" />, gradient: "from-accent to-accent-dark" },
    { value: "100%", label: "Success Rate", icon: <StarIcon className="h-8 w-8" />, gradient: "from-primary to-secondary" },
    { value: "24/7", label: "Expert Support", icon: <SupportIcon className="h-8 w-8" />, gradient: "from-teal-light to-secondary" },
    { value: "5+", label: "Years Experience", icon: <CountUpIcon className="h-8 w-8" />, gradient: "from-secondary to-accent" },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0 bg-primary/90">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-light/70 via-secondary/80 to-primary/90" />
      </div>

      {/* Minimal floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/15 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionWrapper>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6"
            >
              <CountUpIcon className="h-5 w-5 text-accent mr-2" />
              <span className="text-sm mobile:text-xs font-semibold text-white">PROVEN RESULTS</span>
            </motion.div>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4">
              Numbers That Speak For Themselves
            </h2>
            <p className="text-lg mobile:text-sm text-white/80 max-w-2xl mx-auto">
              Our track record of success and client satisfaction
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {enhancedStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="relative group"
            >
              {/* Glass Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mobile:p-4 border border-white/20 shadow-xl group-hover:bg-white/15 transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                {/* Icon */}
                <div
                  className={`w-16 h-16 mobile:w-12 mobile:h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mb-6 text-white shadow-lg transition-transform duration-300`}
                >
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="text-2xl sm:text-5xl font-black text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-white/80 font-semibold text-sm mobile:text-xs group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center"
              >
                <StarIcon className="h-3 w-3 text-white" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

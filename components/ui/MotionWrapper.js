import { motion } from 'framer-motion';

export default function MotionWrapper({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      viewport={{ once: true, margin: '-30px' }}
    >
      {children}
    </motion.div>
  );
}

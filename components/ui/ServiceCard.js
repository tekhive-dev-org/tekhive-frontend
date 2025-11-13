import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServiceCard({ icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -8 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col"
    >
      <div className="text-accent mb-4 flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
    </motion.div>
  );
}

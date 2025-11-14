import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Footer() {
  const servicesLinks = [
    { name: 'Business Consultancy', path: '/services#consultancy' },
    { name: 'UI/UX Design', path: '/services#design' },
    { name: 'Web Development', path: '/services#development' },
    { name: 'Digital Marketing', path: '/services#marketing' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about#team' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
  ];

  const supportLinks = [
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Book a Session', path: '/book-session' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  const socialLinks = [
    { 
      Icon: LinkedInIcon, 
      href: 'https://linkedin.com/company/techhive', 
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    { 
      Icon: InstagramIcon, 
      href: 'https://instagram.com/techhive', 
      label: 'Instagram',
      color: 'hover:bg-pink-600'
    },
    { 
      Icon: TwitterIcon, 
      href: 'https://twitter.com/techhive', 
      label: 'Twitter',
      color: 'hover:bg-blue-500'
    },
    { 
      Icon: WhatsAppIcon, 
      href: 'https://wa.me/2348012345678', 
      label: 'WhatsApp',
      color: 'hover:bg-green-600'
    },
  ];

  const contactInfo = [
    {
      Icon: EmailIcon,
      label: 'Email',
      value: 'tekhive.dev@gmail.com',
      href: 'mailto:tekhive.dev@gmail.com'
    },
    {
      Icon: PhoneIcon,
      label: 'Phone',
      value: '+234 801 234 5678',
      href: 'tel:+2348012345678'
    },
    {
      Icon: LocationOnIcon,
      label: 'Location',
      value: 'Lagos',
      href: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const socialVariants = {
    hover: { 
      scale: 1.1, 
      y: -3,
      transition: { type: "spring", stiffness: 400, damping: 15 }
    },
    tap: { scale: 0.95 }
  };

  const linkVariants = {
    initial: { x: 0 },
    hover: { 
      x: 5,
      transition: { type: "spring", stiffness: 400, damping: 15 }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative bg-primary text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-2xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
        >
          {/* Enhanced Company Info */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-block mb-6 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                <div className="relative w-16 h-16">
                  <Image
                    src="/assets/logo.png"
                    alt="TechHive Logo"
                    fill
                    className="object-contain group-hover:drop-shadow-lg transition-all duration-300"
                  />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">TechHive</div>
                  <div className="text-xs text-gray-300 tracking-wider">Handle Details, Lead Hive</div>
                </div>
              </motion.div>
            </Link>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 mb-6 mobile:text-sm leading-relaxed max-w-md"
            >
              We handle the details, you lead the hive. Your trusted partner for business launch, 
              web development, and digital growth. CAC registered and ready to scale your vision.
            </motion.p>

            {/* Enhanced Contact Info */}
            <motion.div variants={itemVariants} className="space-y-3 mb-6">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm">{value}</span>
                </motion.a>
              ))}
            </motion.div>
            
            {/* Enhanced Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-3"
            >
              {socialLinks.map(({ Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`w-12 h-12 bg-white/10 backdrop-blur-sm ${color} rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/20`}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 text-white relative">
              Services
              <motion.div
                className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h4>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <motion.li 
                  key={link.path}
                  variants={itemVariants}
                  custom={index}
                >
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-white transition-all duration-300 text-sm flex items-center group"
                  >
                    <motion.span 
                      variants={linkVariants}
                      initial="initial"
                      whileHover="hover"
                      className="flex items-center gap-2"
                    >
                      <ArrowForwardIcon className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 text-white relative">
              Company
              <motion.div
                className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li 
                  key={link.path}
                  variants={itemVariants}
                  custom={index}
                >
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-white transition-all duration-300 text-sm flex items-center group"
                  >
                    <motion.span 
                      variants={linkVariants}
                      initial="initial"
                      whileHover="hover"
                      className="flex items-center gap-2"
                    >
                      <ArrowForwardIcon className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Support */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 text-white relative">
              Support
              <motion.div
                className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <motion.li 
                  key={link.path}
                  variants={itemVariants}
                  custom={index}
                >
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-white transition-all duration-300 text-sm flex items-center group"
                  >
                    <motion.span 
                      variants={linkVariants}
                      initial="initial"
                      whileHover="hover"
                      className="flex items-center gap-2"
                    >
                      <ArrowForwardIcon className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* CTA in Support Section */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <h5 className="text-white font-semibold mb-2">Ready to Start?</h5>
              <p className="text-gray-300 text-sm mb-4">Let&apos;s build something amazing together.</p>
              <Link href="/book-session">
                <motion.button
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-accent to-secondary hover:from-secondary hover:to-accent text-white px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 text-sm flex items-center justify-center gap-2 group"
                >
                  Book Session
                  <ArrowForwardIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              {[
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
                { name: 'Contact', path: '/contact' },
                { name: 'Sitemap', path: '/sitemap.xml' }
              ].map((link, index) => (
                <motion.div key={link.path} variants={itemVariants} custom={index}>
                  <Link 
                    href={link.path} 
                    className="hover:text-accent transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="flex mobile:flex-col items-center gap-2 text-sm text-gray-400"
            >
              <span>© {new Date().getFullYear()} TechHive. All Rights Reserved</span>
             
              
              <span className="w-1 h-1 bg-accent rounded-full"></span>
              <span className="bg-accent/20 px-2 py-1 rounded-full text-accent font-semibold">
                CAC Registered
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

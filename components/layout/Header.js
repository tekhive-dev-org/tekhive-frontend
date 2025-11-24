import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import CampaignIcon from '@mui/icons-material/Campaign';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [router.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.services-dropdown')) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services = [
    {
      icon: <BusinessCenterIcon className="h-5 w-5" />,
      title: 'Business Consultancy',
      description: 'Strategic guidance for business launch and compliance',
      path: '/services#business-consultancy',
    },
    {
      icon: <DesignServicesIcon className="h-5 w-5" />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions',
      path: '/services#ui-ux-design',
    },
    {
      icon: <CodeIcon className="h-5 w-5" />,
      title: 'Web Development',
      description: 'Modern, responsive websites and applications',
      path: '/services#web-development',
    },
    {
      icon: <CampaignIcon className="h-5 w-5" />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies',
      path: '/services#digital-marketing',
    },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQs', path: '/faqs' },
  ];

  const headerVariants = {
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
      borderBottom: '1px solid rgba(97, 1, 208, 0.1)',
    },
    top: {
      backgroundColor: 'rgba(255, 255, 255, 1',
      backdropFilter: 'blur(4px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
      borderBottom: '1px solid transparent',
    },
  };

  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.05, 
      rotate: 2,
      transition: { type: "spring", stiffness: 400, damping: 15 }
    },
    tap: { scale: 0.95 }
  };

  const navItemVariants = {
    initial: { y: 0, opacity: 0.8 },
    hover: { 
      y: -2, 
      opacity: 1,
      transition: { type: "spring", stiffness: 400, damping: 15 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1],
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1],
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const mobileItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        animate={scrolled ? "scrolled" : "top"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center z-50">
              <motion.div
                variants={logoVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="flex items-center group"
              >
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-16 lg:h-16">
                  <Image
                    src="/assets/logo.png"
                    alt="TechHive Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                  
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Enhanced logo text */}
                <motion.div 
                  className="ml-2 block"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-xl mobile:text-lg font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    TechHive
                  </span>
                  <div className="text-xs mobile:text-[10px] text-gray-600 font-medium tracking-wider">
                    Handle Details, Lead Hive
                  </div>
                </motion.div>
              </motion.div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {/* Home and About */}
              {navLinks.slice(0, 2).map((link, index) => (
                <motion.div
                  key={link.path}
                  variants={navItemVariants}
                  initial="initial"
                  whileHover="hover"
                  custom={index}
                >
                  <Link
                    href={link.path}
                    className={`relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 group ${
                      router.pathname === link.path
                        ? 'text-accent bg-gradient-to-r from-accent/10 to-secondary/10 shadow-lg'
                        : 'text-gray-700 hover:text-accent hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50'
                    }`}
                  >
                    {link.name}
                    
                    {/* Active indicator */}
                    {router.pathname === link.path && (
                      <motion.div
                        layoutId="activeNavItem"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      />
                    )}
                    
                    {/* Hover indicator */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 -z-10"
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}

              {/* Services Dropdown */}
              <div className="relative services-dropdown">
                <motion.button
                  variants={navItemVariants}
                  initial="initial"
                  whileHover="hover"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 group flex items-center gap-1 ${
                    router.pathname === '/services' || servicesDropdownOpen
                      ? 'text-accent bg-gradient-to-r from-accent/10 to-secondary/10 shadow-lg'
                      : 'text-gray-700 hover:text-accent hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50'
                  }`}
                >
                  Services
                  <motion.div
                    animate={{ rotate: servicesDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <KeyboardArrowDownIcon className="h-4 w-4" />
                  </motion.div>
                  
                  {/* Active indicator */}
                  {router.pathname === '/services' && (
                    <motion.div
                      layoutId="activeNavItem"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    />
                  )}
                  
                  {/* Hover indicator */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 -z-10"
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 z-50"
                    >
                      <div className="px-4 pb-2">
                        <Link
                          href="/services"
                          className="block text-sm font-semibold text-accent hover:text-secondary transition-colors duration-200"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          View All Services →
                        </Link>
                      </div>
                      <div className="border-t border-gray-100 pt-2">
                        {services.map((service, index) => (
                          <motion.div
                            key={service.title}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <Link
                              href={service.path}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="flex items-start gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-accent/5 hover:to-secondary/5 transition-all duration-200 group"
                            >
                              <div className="text-accent mt-0.5 group-hover:scale-110 transition-transform duration-200">
                                {service.icon}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 text-sm group-hover:text-accent transition-colors duration-200">
                                  {service.title}
                                </h4>
                                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Remaining navigation items */}
              {navLinks.slice(2).map((link, index) => (
                <motion.div
                  key={link.path}
                  variants={navItemVariants}
                  initial="initial"
                  whileHover="hover"
                  custom={index + 3} // Offset by 3 to account for Home, About, and Services
                >
                  <Link
                    href={link.path}
                    className={`relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 group ${
                      router.pathname === link.path
                        ? 'text-accent bg-gradient-to-r from-accent/10 to-secondary/10 shadow-lg'
                        : 'text-gray-700 hover:text-accent hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50'
                    }`}
                  >
                    {link.name}
                    
                    {/* Active indicator */}
                    {router.pathname === link.path && (
                      <motion.div
                        layoutId="activeNavItem"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      />
                    )}
                    
                    {/* Hover indicator */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 -z-10"
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Enhanced CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Call button */}
              <motion.a
                href="tel:+2348012345678"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2.5 text-accent border-2 border-accent/20 hover:border-accent/40 rounded-full font-semibold transition-all duration-300 hover:shadow-lg group"
              >
                <PhoneIcon className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden xl:inline">Call Us</span>
              </motion.a>
              
              {/* Primary CTA */}
              <Link href="/book-session">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(97, 1, 208, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-magenta text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-xl inline-flex items-center gap-2 group"
                >
                  Get Started
                  <ArrowForwardIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative p-3 rounded-xl bg-white/80 border border-gray-200 hover:border-accent/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CloseIcon className="h-6 w-6 text-accent" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MenuIcon className="h-6 w-6 text-gray-700 group-hover:text-accent transition-colors duration-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-6">
                <motion.nav className="space-y-2">
                  {/* Home and About */}
                  {navLinks.slice(0, 2).map((link, index) => (
                    <motion.div
                      key={link.path}
                      variants={mobileItemVariants}
                      custom={index}
                    >
                      <Link
                        href={link.path}
                        className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 group ${
                          router.pathname === link.path
                            ? 'text-accent bg-gradient-to-r from-accent/10 to-secondary/10 shadow-lg'
                            : 'text-gray-700 hover:text-accent hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          {link.name}
                          <ArrowForwardIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile Services Section */}
                  <motion.div
                    variants={mobileItemVariants}
                    custom={2}
                    className="space-y-2"
                  >
                    <button
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                        router.pathname === '/services' || servicesDropdownOpen
                          ? 'text-accent bg-gradient-to-r from-accent/10 to-secondary/10 shadow-lg'
                          : 'text-gray-700 hover:text-accent hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50'
                      }`}
                    >
                      Services
                      <motion.div
                        animate={{ rotate: servicesDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <KeyboardArrowDownIcon className="h-5 w-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden bg-gray-50/50 rounded-xl ml-2 border-l-2 border-accent/20"
                        >
                          <Link
                            href="/services"
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              setMobileMenuOpen(false);
                            }}
                            className="block px-4 py-2 text-sm font-semibold text-accent hover:text-secondary transition-colors duration-200"
                          >
                            View All Services →
                          </Link>
                          <div className="space-y-1">
                            {services.map((service, serviceIndex) => (
                              <Link
                                key={service.title}
                                href={service.path}
                                onClick={() => {
                                  setServicesDropdownOpen(false);
                                  setMobileMenuOpen(false);
                                }}
                                className="flex items-center gap-3 px-4 py-2 hover:bg-white/80 transition-all duration-200 group"
                              >
                                <div className="text-accent text-sm group-hover:scale-110 transition-transform duration-200">
                                  {service.icon}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-accent transition-colors duration-200">
                                    {service.title}
                                  </h4>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Remaining navigation items */}
                  {navLinks.slice(2).map((link, index) => (
                    <motion.div
                      key={link.path}
                      variants={mobileItemVariants}
                      custom={index + 3} // Offset by 3 to account for Home, About, and Services
                    >
                      <Link
                        href={link.path}
                        className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 group ${
                          router.pathname === link.path
                            ? 'text-accent bg-gradient-to-r from-accent/10 to-secondary/10 shadow-lg'
                            : 'text-gray-700 hover:text-accent hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          {link.name}
                          <ArrowForwardIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
                
                {/* Mobile CTA Buttons */}
                <motion.div 
                  variants={mobileItemVariants}
                  className="flex flex-col gap-3 mt-6 pt-6 border-t border-gray-200"
                >
                  <motion.a
                    href="tel:+2348012345678"
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 text-accent border-2 border-accent/20 rounded-xl font-semibold transition-all duration-300"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    Call Us Now
                  </motion.a>
                  
                  <Link href="/book-session">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-secondary to-accent text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
                    >
                      Get Started
                      <ArrowForwardIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-magenta origin-left z-50"
        style={{ 
          scaleX: scrolled ? 1 : 0,
          transformOrigin: "0% 50%"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </>
  );
}

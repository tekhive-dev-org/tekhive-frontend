import Head from 'next/head';
import Link from 'next/link';
import { MotionWrapper } from '../components/ui';
import { motion } from 'framer-motion';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found - TechHive</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Let's get you back on track."
        />
      </Head>

      <main className="min-h-screen pt-20 bg-gray-50 flex flex-col">
        {/* Main 404 Section */}
        <section className="flex-1 flex items-center justify-center py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MotionWrapper>
              {/* 404 Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-8">
                  <ErrorOutlineIcon 
                    className="h-32 w-32 sm:h-40 sm:w-40 text-accent mx-auto"
                    style={{ filter: 'drop-shadow(0 10px 20px rgba(16, 185, 129, 0.1))' }}
                  />
                </div>
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl sm:text-7xl font-black text-primary mb-4">
                  404
                </h1>
                <h2 className="text-2xl sm:text-4xl font-bold text-primary mb-4">
                  Page Not Found
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Oops! It seems like the page you&apos;re looking for has wandered off into the digital void. 
                  Don&apos;t worry, we&apos;ll help you find your way back.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <HomeIcon className="mr-2 h-5 w-5" />
                    Back to Home
                  </motion.div>
                </Link>
                <Link href="/book-session">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <ContactSupportIcon className="mr-2 h-5 w-5" />
                    Contact Us
                  </motion.div>
                </Link>
              </motion.div>
            </MotionWrapper>
          </div>
        </section>

        {/* Helpful Links Section */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-8 text-center">
                Here are some helpful links instead
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mobile:gap-3">
                {[
                  { title: 'Home', href: '/' },
                  { title: 'About Us', href: '/about' },
                  { title: 'Services', href: '/services' },
                  { title: 'Projects', href: '/projects' },
                  { title: 'Blog', href: '/blog' },
                  { title: 'Careers', href: '/careers' },
                  { title: 'Book Session', href: '/book-session' },
                  { title: 'FAQs', href: '/faqs' },
                ].map((link, idx) => (
                  <Link key={idx} href={link.href}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * idx }}
                      whileHover={{ translateX: 5 }}
                      className="block p-4 bg-gray-50 hover:bg-primary hover:text-white rounded-lg text-center text-gray-700 font-semibold transition-all duration-300 mobile:p-3 mobile:text-sm cursor-pointer"
                    >
                      {link.title}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </section>
      </main>
    </>
  );
}

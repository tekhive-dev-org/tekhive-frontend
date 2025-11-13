import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const router = useRouter();

  // Scroll to top on route change
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    router.events?.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events?.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={router.route}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-grow"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

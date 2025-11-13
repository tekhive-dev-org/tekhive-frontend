import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function TestimonialCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const handleNext = useCallback(() => {
    if (testimonials.length <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    if (testimonials.length <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToSlide = useCallback((index) => {
    if (index === currentIndex || testimonials.length <= 1) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex, testimonials.length]);

  // Professional auto-advance with hover pause
  useEffect(() => {
    if (isPaused || isHovered || testimonials.length <= 1) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 7000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [handleNext, isPaused, isHovered, testimonials.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPaused(prev => !prev);
      }
    };

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [handleNext, handlePrev]);

  // Swipe detection
  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      handlePrev();
    } else if (info.offset.x < -threshold) {
      handleNext();
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 400 : -400,
      opacity: 0,
      scale: 0.95,
    }),
  };

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No testimonials available
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="relative max-w-5xl mx-auto focus:outline-none"
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Customer testimonials carousel"
    >
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 35 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            className="relative cursor-grab active:cursor-grabbing"
          >
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/40 overflow-hidden">
              <motion.div
                animate={{
                  background: [
                    'radial-gradient(600px circle at 20% 20%, rgba(97, 1, 208, 0.06) 0%, transparent 50%)',
                    'radial-gradient(600px circle at 80% 80%, rgba(229, 123, 12, 0.06) 0%, transparent 50%)',
                    'radial-gradient(600px circle at 20% 20%, rgba(97, 1, 208, 0.06) 0%, transparent 50%)'
                  ]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0"
              />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-6 right-6 w-4 h-4 bg-accent/20 rounded-full"
              />

              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  delay: 0.2
                }}
                className="relative z-10 mb-6"
              >
                <FormatQuoteIcon className="text-accent text-5xl md:text-6xl opacity-80" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative z-10 flex items-center gap-2 mb-6"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 0.4 + i * 0.08,
                        type: "spring"
                      }}
                    >
                      <StarIcon className="h-5 w-5 text-accent" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-accent font-semibold text-sm ml-2">5.0</span>
              </motion.div>

              <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative z-10 text-gray-700 text-xl md:text-2xl leading-relaxed mb-8 font-medium"
              >
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative z-10 flex items-center justify-between flex-wrap gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 bg-gradient-to-br from-secondary via-accent to-magenta rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                    >
                      {testimonials[currentIndex].name.charAt(0)}
                    </motion.div>
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, type: "spring" }}
                      className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1.5 shadow-md"
                    >
                      <VerifiedIcon className="h-3 w-3 text-white" />
                    </motion.div>
                  </div>

                  <div>
                    <motion.h4
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="font-bold text-lg text-primary"
                    >
                      {testimonials[currentIndex].name}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-gray-600 font-medium"
                    >
                      {testimonials[currentIndex].role}
                    </motion.p>
                    {testimonials[currentIndex].company && (
                      <motion.p
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                        className="text-gray-500 text-sm"
                      >
                        {testimonials[currentIndex].company}
                      </motion.p>
                    )}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 }}
                  className="hidden sm:block bg-accent/10 px-4 py-2 rounded-full border border-accent/20"
                >
                  <span className="text-accent font-semibold text-sm">Verified</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {testimonials.length > 1 && (
        <>
          <motion.button
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(97, 1, 208, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/95 backdrop-blur-sm border border-gray-200 hover:border-accent/30 p-3 rounded-full shadow-lg transition-all duration-300 group z-10"
          >
            <ArrowBackIosNewIcon className="h-5 w-5 text-gray-600 group-hover:text-accent transition-colors duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(97, 1, 208, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/95 backdrop-blur-sm border border-gray-200 hover:border-accent/30 p-3 rounded-full shadow-lg transition-all duration-300 group z-10"
          >
            <ArrowForwardIosIcon className="h-5 w-5 text-gray-600 group-hover:text-accent transition-colors duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPaused(!isPaused)}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-accent/30 p-2 rounded-full shadow-md transition-all duration-300 group z-10"
          >
            {isPaused ? (
              <PlayArrowIcon className="h-4 w-4 text-gray-600 group-hover:text-accent transition-colors duration-300" />
            ) : (
              <PauseIcon className="h-4 w-4 text-gray-600 group-hover:text-accent transition-colors duration-300" />
            )}
          </motion.button>
        </>
      )}

      {testimonials.length > 1 && (
        <div className="flex justify-center items-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentIndex ? 'w-10 h-3' : 'w-3 h-3'
              }`}
            >
              <div
                className={`w-full h-full rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-secondary to-accent shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            </motion.button>
          ))}
        </div>
      )}

      {testimonials.length > 1 && !isPaused && !isHovered && (
        <div className="mt-4 mx-auto max-w-sm">
          <div className="bg-gray-200 rounded-full h-1.5 overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 7, ease: "linear" }}
              className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
            />
          </div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-3 text-sm text-gray-500"
      >
        {currentIndex + 1} of {testimonials.length}
      </motion.div>
    </div>
  );
}

import Head from 'next/head';
import Image from 'next/image';
import { MotionWrapper } from '../components/ui';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import RateReviewIcon from '@mui/icons-material/RateReview';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: 'TechHive made our business launch seamless. Their expertise in CAC registration and consultancy was invaluable. The team handled every detail professionally, allowing us to focus on our core business operations.',
      name: 'Adebayo Johnson',
      role: 'Founder',
      company: 'GreenLeaf Ventures',
      rating: 5,
    },
    {
      quote: 'The web development team delivered beyond our expectations. Our new platform has transformed our customer engagement and increased our conversion rate by 45%. Highly recommended!',
      name: 'Chioma Okafor',
      role: 'CEO',
      company: 'EduTech Solutions',
      rating: 5,
    },
    {
      quote: 'Professional, reliable, and innovative. TechHive truly handles the details so we can focus on leading our hive. Their digital marketing strategies doubled our online visibility.',
      name: 'Ibrahim Musa',
      role: 'Managing Director',
      company: 'FinServe',
      rating: 5,
    },
    {
      quote: 'The UI/UX design work was exceptional. Our customers love the new interface, and we\'ve seen a significant improvement in user satisfaction scores. The team understood our vision perfectly.',
      name: 'Funke Adeleke',
      role: 'Product Manager',
      company: 'RetailHub NG',
      rating: 5,
    },
    {
      quote: 'From CAC registration to website launch, TechHive provided end-to-end support. Their one-stop-shop approach saved us time and money. We couldn\'t have asked for a better partner.',
      name: 'Emeka Nwankwo',
      role: 'Co-founder',
      company: 'AgriTech Innovations',
      rating: 5,
    },
    {
      quote: 'Working with TechHive was a game-changer for our startup. Their business consultancy helped us structure our company properly, and their marketing team built our brand from scratch.',
      name: 'Aisha Abdullahi',
      role: 'Founder & CEO',
      company: 'HealthFirst Clinic',
      rating: 5,
    },
  ];

  const testimonialImages = [
    {
      src: '/assets/Images/testimonials/test1.jpg',
      alt: 'Client testimonial showcase 1',
    },
    {
      src: '/assets/Images/testimonials/test2.jpg',
      alt: 'Client testimonial showcase 2',
    },
    {
      src: '/assets/Images/testimonials/test3.jpg',
      alt: 'Client testimonial showcase 3',
    },
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(testimonialImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % testimonialImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(testimonialImages[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + testimonialImages.length) % testimonialImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(testimonialImages[prevIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
  };

  return (
    <>
      <Head>
        <title>Client Testimonials - TechHive</title>
        <meta
          name="description"
          content="Read what our clients say about TechHive's services. Trusted by businesses for consultancy, design, development, and marketing."
        />
      </Head>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-secondary to-teal-light py-24 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <MotionWrapper>
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6"
                >
                  <RateReviewIcon className="h-5 w-5 mr-2" />
                  <span className="text-sm font-semibold">CLIENT TESTIMONIALS</span>
                </motion.div>
                
                <h1 className="text-3xl sm:text-6xl font-black mb-6">
                  What Our Clients Say
                </h1>
                <p className="text-lg sm:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                  Trusted by businesses to launch and grow successfully
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <FormatQuoteIcon className="text-accent text-4xl" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="text-warning h-5 w-5" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  
                  <div className="flex items-center border-t border-gray-100 pt-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <MotionWrapper delay={0.4}>
              <div className="mt-20 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-12 text-white shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl md:text-6xl font-bold mb-2">98%</div>
                    <p className="text-xl text-gray-100">Client Satisfaction</p>
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl font-bold mb-2">50+</div>
                    <p className="text-xl text-gray-100">Successful Projects</p>
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl font-bold mb-2">5.0</div>
                    <p className="text-xl text-gray-100">Average Rating</p>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Moments with Our Clients
                </h2>
                <p className="text-xl text-gray-600">
                  Building lasting partnerships and success stories
                </p>
              </div>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonialImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onClick={() => openLightbox(index)}
                  className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative h-80 w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">Click to view</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 text-center border border-gray-100 shadow-xl">
                <h2 className="text-xl sm:text-4xl font-bold text-primary mb-4">
                  Ready to Join Our Success Stories?
                </h2>
                <p className="text-lg mobile:text-sm text-gray-700 mb-8 max-w-2xl mx-auto">
                  Let&apos;s work together to achieve your business goals
                </p>
                <Link href="/book-session">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-primary to-accent text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl mobile:text-sm transition-all duration-300 inline-flex items-center"
                  >
                    Book a Free Consultation
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </motion.button>
                </Link>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              style={{ margin: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
                aria-label="Close"
              >
                <CloseIcon className="h-10 w-10" />
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="h-12 w-12" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50"
                aria-label="Next image"
              >
                <ChevronRightIcon className="h-12 w-12" />
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold z-50">
                {currentIndex + 1} / {testimonialImages.length}
              </div>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}

import Head from 'next/head';
import { MotionWrapper } from '../components/ui';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';

export default function Testimonials() {
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
      company: 'FinServe Nigeria',
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

  return (
    <>
      <Head>
        <title>Client Testimonials - TechHive</title>
        <meta
          name="description"
          content="Read what our clients say about TechHive's services. Trusted by businesses across Nigeria for consultancy, design, development, and marketing."
        />
      </Head>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-light py-20 text-white">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  What Our Clients Say
                </h1>
                <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                  Trusted by businesses across Nigeria to launch and grow successfully
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex items-center border-t border-gray-100 pt-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg mr-4">
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
              <div className="mt-20 bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold mb-2">98%</div>
                    <p className="text-gray-100">Client Satisfaction</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">10+</div>
                    <p className="text-gray-100">Successful Projects</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">5.0</div>
                    <p className="text-gray-100">Average Rating</p>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-20">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="bg-primary-lighter rounded-2xl p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Ready to Join Our Success Stories?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Let&apos;s work together to achieve your business goals
                </p>
                <Link href="/book-session">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-colors duration-200"
                  >
                    Book a Free Consultation
                  </motion.button>
                </Link>
              </div>
            </MotionWrapper>
          </div>
        </section>
      </main>
    </>
  );
}

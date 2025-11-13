import Head from 'next/head';
import { MotionWrapper } from '../components/ui';
import { motion } from 'framer-motion';
import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function About() {
  const teamMembers = [
    {
      name: 'Victor Okechukwu',
      role: 'Senior Software Engineer',
      initials: 'VO',
    },
    {
      name: 'Adebayo Thompson',
      role: 'Business Consultant',
      initials: 'AT',
    },
    {
      name: 'Chioma Nwosu',
      role: 'UI/UX Designer',
      initials: 'CN',
    },
    {
      name: 'Ibrahim Aliyu',
      role: 'Digital Marketing Lead',
      initials: 'IA',
    },
    {
      name: 'Funke Adeleke',
      role: 'Project Manager',
      initials: 'FA',
    },
  ];

  const facts = [
    {
      icon: <PublicIcon className="h-10 w-10" />,
      title: '100% Remote',
      description: 'Distributed team across Nigeria',
    },
    {
      icon: <VerifiedIcon className="h-10 w-10" />,
      title: 'CAC Registered',
      description: 'Fully compliant with CAMA 2020',
    },
    {
      icon: <BusinessIcon className="h-10 w-10" />,
      title: 'Professional Tools',
      description: 'Industry-standard software & processes',
    },
    {
      icon: <GroupsIcon className="h-10 w-10" />,
      title: 'Expert Team',
      description: 'Experienced professionals across all services',
    },
  ];

  return (
    <>
      <Head>
        <title>About Us - TechHive</title>
        <meta
          name="description"
          content="Learn about TechHive - your easing station for business launch & growth. Meet our team and discover our mission."
        />
      </Head>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-light py-20 text-white">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  We handle the details,
                  <br />
                  <span className="text-accent">you lead the hive.</span>
                </h1>
                <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                  TechHive is your trusted partner for business launch and growth in Nigeria
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <MotionWrapper>
                <div className="bg-primary-lighter rounded-2xl p-8">
                  <div className="text-accent mb-4">
                    <TrackChangesIcon className="h-12 w-12" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
                  <p className="text-gray-700 leading-relaxed">
                    To simplify business operations and empower entrepreneurs across Nigeria by providing 
                    comprehensive consultancy, design, development, and marketing services. We exist to be 
                    the easing station where business owners find the support they need to launch and scale 
                    successfully.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.2}>
                <div className="bg-primary-lighter rounded-2xl p-8">
                  <div className="text-accent mb-4">
                    <VisibilityIcon className="h-12 w-12" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
                  <p className="text-gray-700 leading-relaxed">
                    To become Nigeria&apos;s leading one-stop solution for business enablement, where every 
                    entrepreneur can access world-class services that transform their ideas into thriving 
                    enterprises. We envision a future where launching and growing a business is seamless, 
                    efficient, and accessible to all.
                  </p>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* Meet the Hive */}
        <section className="py-20 bg-gray-50" id="team">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Meet the Hive
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Our passionate team of experts dedicated to your success
                </p>
              </div>
            </MotionWrapper>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent text-white text-3xl font-bold flex items-center justify-center mx-auto mb-4">
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Facts Section */}
        <section className="py-20 bg-white">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Why Choose TechHive
                </h2>
                <p className="text-xl text-gray-600">
                  Built on professionalism, compliance, and excellence
                </p>
              </div>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-accent mb-4 flex justify-center">
                    {fact.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {fact.title}
                  </h3>
                  <p className="text-gray-600">{fact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-20">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Work With Us?
                </h2>
                <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
                  Let&apos;s turn your business vision into reality
                </p>
                <Link href="/book-session">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white hover:bg-gray-100 text-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-colors duration-200"
                  >
                    Book a Session
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
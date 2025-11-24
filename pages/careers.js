import Head from 'next/head';
import Link from 'next/link';
import { MotionWrapper } from '../components/ui';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

export default function Careers() {
  const values = [
    {
      icon: <LightbulbIcon className="h-10 w-10" />,
      title: 'Innovation',
      description: 'We push boundaries and embrace creative problem-solving in everything we do.',
    },
    {
      icon: <EmojiPeopleIcon className="h-10 w-10" />,
      title: 'Collaboration',
      description: 'Teamwork makes the dream work. We thrive when we work together.',
    },
    {
      icon: <TrendingUpIcon className="h-10 w-10" />,
      title: 'Growth',
      description: 'We invest in continuous learning and professional development.',
    },
    {
      icon: <SchoolIcon className="h-10 w-10" />,
      title: 'Integrity',
      description: 'Honesty and transparency guide all our interactions and decisions.',
    },
  ];

  return (
    <>
      <Head>
        <title>Careers - TechHive</title>
        <meta
          name="description"
          content="Join the TechHive team and make an impact. Explore career opportunities and be part of our mission to transform businesses."
        />
      </Head>

      <main className="pt-20 bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-secondary to-teal-light py-20 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
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
                  <WorkIcon className="h-5 w-5 mr-2" />
                  <span className="text-sm font-semibold">JOIN OUR TEAM</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-black mb-6">
                  Build the Future
                  <br />
                  <span className="text-cyan-300">With TechHive</span>
                </h1>
                <p className="text-lg sm:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                  We&apos;re looking for talented, passionate individuals to join our growing team. Let&apos;s create
                  something amazing together.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
                <p className="text-gray-600 text-lg">What drives us every day</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-accent mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Why Join TechHive?</h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: 'Competitive Compensation',
                    description: 'We offer competitive salaries and benefits packages that value your contributions.',
                  },
                  {
                    title: 'Professional Growth',
                    description: 'Access training, mentorship, and opportunities to develop your skills and advance your career.',
                  },
                  {
                    title: 'Collaborative Environment',
                    description: 'Work alongside talented professionals who are passionate about innovation and excellence.',
                  },
                  {
                    title: 'Work-Life Balance',
                    description: 'We believe in flexible working arrangements that let you thrive both professionally and personally.',
                  },
                  {
                    title: 'Impactful Work',
                    description: 'Be part of projects that make a real difference for our clients and their businesses.',
                  },
                  {
                    title: 'Modern Tech Stack',
                    description: 'Work with cutting-edge technologies and tools that keep you at the forefront of the industry.',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    className="flex gap-4 md:gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/20">
                        <div className="h-2 w-2 bg-accent rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 border border-primary/10 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6"
                >
                  <PeopleIcon className="h-20 w-20 text-accent mx-auto" />
                </motion.div>

                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Open Positions</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Currently, we don&apos;t have any open positions at the moment.
                </p>
                <p className="text-gray-600 mb-8">
                  However, if you believe you&apos;d be a great fit for TechHive, we&apos;d love to hear from you! 
                  Feel free to reach out with your resume and let us know why you&apos;d be interested in joining our team.
                </p>

                <Link href="/book-session">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <EmailIcon className="mr-2 h-5 w-5" />
                    Get In Touch
                  </motion.div>
                </Link>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MotionWrapper>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                Stay Updated About Future Opportunities
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Subscribe to get notifications when we open new positions that match your skills and interests.
              </p>
              <p className="text-gray-500 text-sm">
                In the meantime, feel free to connect with us on social media or reach out directly at{' '}
                <a href="mailto:careers@techhive.com" className="text-accent font-semibold hover:text-accent-dark">
                  careers@techhive.com
                </a>
              </p>
            </MotionWrapper>
          </div>
        </section>
      </main>
    </>
  );
}

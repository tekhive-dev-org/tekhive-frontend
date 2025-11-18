import Head from 'next/head';
import Image from 'next/image';
import { MotionWrapper } from '../components/ui';
import { motion } from 'framer-motion';
import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function About() {
  const teamMembers = [
    {
      name: 'Eaton Tochi',
      role: 'Managinng Director',
      description: 'Vision architect. Turns chaos into 90-day roadmaps.',
      image: '/assets/Images/team/tochi.jpg',
    },
    {
      name: 'Joshua Olanrewaju',
      role: 'HR/Operations',
      description: 'Coordinates business processes',
      image: '/assets/Images/team/joshua.jpg',
    },
    {
      name: 'Nwachukwu Chidiebere',
      role: 'Lead UI/UX Designer',
      description: 'Crafts intuitive, conversion-focused experiences in Figma.',
      image: '/assets/Images/team/chidi.jpg',
    },
    {
      name: 'Victor Okechukwu',
      role: 'Front-End Engineer',
      description: 'Builds pixel-perfect, lightning-fast web apps.',
      image: '/assets/Images/team/victor.jpg',
    },
    {
      name: 'Babasola Oso',
      role: 'Backend Engineer',
      description: 'Scales APIs and databases like clockwork.',
      image: '/assets/Images/team/babasola.jpg',
    },
    {
      name: 'Sharon E. Oche',
      role: 'Digital Marketer',
      description: 'Turns cold traffic into 20+ qualified leads per month.',
      image: '/assets/Images/team/sharon.jpg',
    },
  ];

  const principles = [
    {
      icon: <PublicIcon className="h-10 w-10" />,
      title: 'Remote-First',
      description: 'Our team operates across Nigeria and beyond — no office, no limits.',
    },
    {
      icon: <PeopleIcon className="h-10 w-10" />,
      title: 'Client-Centric',
      description: "Your goals drive every decision. We don't build features — we build outcomes.",
    },
    {
      icon: <SecurityIcon className="h-10 w-10" />,
      title: 'Compliant & Secure',
      description: 'NDPA 2023, encrypted tools, NDAs standard. Your IP is safe.',
    },
    {
      icon: <TrendingUpIcon className="h-10 w-10" />,
      title: 'Results-Driven',
      description: 'We measure success in leads, users, revenue — not just deliverables.',
    },
  ];

  const tools = [
    { category: 'Design', items: 'Figma, Adobe Suite' },
    { category: 'Frontend', items: 'React, Next.js, Tailwind' },
    { category: 'Backend', items: 'Node.js, Django, PostgreSQL' },
    { category: 'Cloud', items: 'AWS, Vercel, DigitalOcean' },
    { category: 'Collaboration', items: 'Meta Suite, Slack, Trello, Zoom, Google Suite' },
    { category: 'Analytics', items: 'Google Analytics, Hotjar, Meta Pixel' },
  ];

  const facts = [
    {
      icon: <PublicIcon className="h-10 w-10" />,
      title: '100% Remote',
      description: 'Distributed team',
    },
    {
      icon: <VerifiedIcon className="h-10 w-10" />,
      title: 'Registered',
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
                  <BusinessIcon className="h-5 w-5 mr-2" />
                  <span className="text-sm font-semibold">ABOUT TECHHIVE</span>
                </motion.div>
                
                <h1 className="text-3xl sm:text-6xl font-black mb-6">
                  We handle the details,
                  <br />
                  <span className="text-cyan-300">you lead the hive.</span>
                </h1>
                <p className="text-lg sm:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                  A 100% remote innovation studio registered in the US and Nigeria. 
                  We exist to simplify business launch and growth for visionary entrepreneurs.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-20 mobile:pt-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-4xl font-bold text-primary mb-6 text-center">
                  Welcome to Your Easing Station
                </h2>
                <div className="prose prose-lg max-w-none mobile:text-center text-gray-700 leading-relaxed">
                  <p className="text-xl mobile:text-base mb-6">
                    Techhive is a <strong>100% remote innovation studio</strong> registered in the US and in Nigeria 
                    under the Companies and Allied Matters Act (CAMA) 2020. We exist to <strong>simplify business 
                    launch and growth</strong> for African and global entrepreneurs who are visionaries.
                  </p>
                  <p className="text-xl mobile:text-base">
                    Whether you&apos;re at <strong>ideation</strong>, building an <strong>MVP</strong>, or scaling to{' '}
                    <strong>market dominance</strong>, we become your <strong>silent co-founder</strong> — handling 
                    strategy, design, development, and marketing so you can focus on leading.
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <MotionWrapper>
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="text-accent mb-6">
                    <TrackChangesIcon className="h-16 w-16" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                  <blockquote className="text-xl mobile:text-sm  text-gray-700 leading-relaxed border-l-4 border-accent pl-6 italic">
                    To be the remote &quot;easing station&quot; for Global entrepreneurs — turning raw ideas into scalable, 
                    revenue-generating businesses.
                  </blockquote>
                  <p className="text-gray-600 mt-6 leading-relaxed">
                    We believe launching a business should be as seamless as joining a hive. No bureaucracy. 
                    No overwhelm. Just clarity, execution, and growth.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.2}>
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="text-accent mb-6">
                    <VisibilityIcon className="h-16 w-16" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
                  <blockquote className="text-xl mobile:text-sm  text-gray-700 leading-relaxed border-l-4 border-accent pl-6 italic">
                    A world where any determined founder can launch a profitable business in under 90 days — from anywhere.
                  </blockquote>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  How We Work
                </h2>
                <p className="text-xl mobile:text-sm  text-gray-600">
                  Our principles guide everything we do
                </p>
              </div>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="text-accent mb-4">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 mobile:text-sm  leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Hive */}
        <section className="py-20 bg-gray-50" id="team">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Meet the Hive
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
                  Our passionate team of experts dedicated to your success
                </p>
                <p className="text-sm text-gray-500 italic">
                  We&apos;re small by design. Every member is a senior specialist — no juniors, no delays.
                </p>
              </div>
            </MotionWrapper>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 shadow-lg relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-sm text-secondary font-semibold mb-3 text-center">{member.role}</p>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Stack */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Our Tools & Stack
                </h2>
                <p className="text-xl text-gray-600">
                  Industry-leading technology powering your success
                </p>
              </div>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-accent/50 transition-colors duration-300"
                >
                  <div className="flex items-start">
                    <div className="bg-accent/10 text-accent font-bold px-3 py-1 rounded-lg text-sm mr-4 flex-shrink-0">
                      {tool.category}
                    </div>
                    <p className="text-gray-700 font-mono text-sm leading-relaxed">
                      {tool.items}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose TechHive Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Why Choose TechHive
                </h2>
                <p className="text-xl mobile:text-sm  text-gray-600">
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
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                >
                  <div className="text-accent mb-4 flex justify-center">
                    {fact.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {fact.title}
                  </h3>
                  <p className="text-sm text-gray-600">{fact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MotionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Launch Your Business?
              </h2>
              <p className="text-xl mobile:text-sm text-gray-100 mb-8 max-w-2xl mx-auto">
                Let&apos;s turn your vision into reality. Book a free consultation today.
              </p>
              <Link href="/book-session">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center"
                >
                  Book a Free Session
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </motion.button>
              </Link>
            </MotionWrapper>
          </div>
        </section>
      </main>
    </>
  );
}
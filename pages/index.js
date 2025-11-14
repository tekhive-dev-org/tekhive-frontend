import Head from 'next/head';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import CampaignIcon from '@mui/icons-material/Campaign';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SpeedIcon from '@mui/icons-material/Speed';
import {
  HeroSection,
  StatsSection,
  FeaturesSection,
  ServicesSection,
  BenefitsSection,
  ProcessSection,
  TestimonialsSection,
  CTASection,
} from '../components/home';

export default function Home() {
  const services = [
    {
      icon: <BusinessCenterIcon className="h-12 w-12" />,
      title: 'Business Consultancy',
      description: 'Strategic guidance for business launch, CAC registration, and compliance with business laws.',
    },
    {
      icon: <DesignServicesIcon className="h-12 w-12" />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
    },
    {
      icon: <CodeIcon className="h-12 w-12" />,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies for optimal performance.',
    },
    {
      icon: <CampaignIcon className="h-12 w-12" />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your brand and reach your target audience.',
    },
  ];

  const testimonials = [
    {
      quote: 'TechHive made our business launch seamless. Their expertise in CAC registration and consultancy was invaluable.',
      name: 'Adebayo Johnson',
      role: 'Founder',
      company: 'GreenLeaf Ventures',
    },
    {
      quote: 'The web development team delivered beyond our expectations. Our new platform has transformed our customer engagement.',
      name: 'Chioma Okafor',
      role: 'CEO',
      company: 'EduTech Solutions',
    },
    {
      quote: 'Professional, reliable, and innovative. TechHive truly handles the details so we can focus on leading our hive.',
      name: 'Ibrahim Musa',
      role: 'Managing Director',
      company: 'FinServe',
    },
  ];

  const stats = [
    { value: '10+', label: 'Clients Launched' },
    { value: '100%', label: 'Remote Team' },
    { value: '4', label: 'Core Services' },
    { value: 'CAC', label: 'Compliant' },
  ];

  const features = [
    {
      icon: <RocketLaunchIcon className="h-10 w-10" />,
      title: 'Fast Launch',
      description: 'Get your business up and running quickly with our streamlined processes.',
    },
    {
      icon: <VerifiedIcon className="h-10 w-10" />,
      title: 'Compliance Assured',
      description: 'Full CAC registration and regulatory compliance handled expertly.',
    },
    {
      icon: <SupportAgentIcon className="h-10 w-10" />,
      title: 'Dedicated Support',
      description: '24/7 support to ensure your business runs smoothly at all times.',
    },
    {
      icon: <SpeedIcon className="h-10 w-10" />,
      title: 'Agile Delivery',
      description: 'Fast, iterative development with rapid turnaround times.',
    },
  ];

  const benefits = [
    'CAC-compliant business registration',
    'Professional website development',
    'Brand identity & design systems',
    'Digital marketing strategy',
    'Ongoing technical support',
    'Scalable solutions for growth',
  ];

  return (
    <>
      <Head>
        <title>TechHive - We handle the details, you lead the hive</title>
        <meta
          name="description"
          content="Your easing station for business launch & growth. We provide business consultancy, UI/UX design, web development, and digital marketing services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="overflow-hidden">
        <HeroSection />
        <StatsSection stats={stats} />
        <FeaturesSection features={features} />
        <ServicesSection services={services} />
        <BenefitsSection benefits={benefits} />
        <TestimonialsSection testimonials={testimonials} />
        <ProcessSection />
        <CTASection />
      </main>
    </>
  );
}

import React from "react";
import { CheckCircle } from "@mui/icons-material";
import { Button } from "../../common/Button";
import { Card } from "../../common/Card";
import Image from 'next/image';

const ServicesSection = () => {
  const services = [
    {
      title: "Graphic Design",
      description: "Transform your brand with stunning visuals. Our creative team delivers exceptional designs that exceed expectations and drive business growth.",
      image: "/assets/Images/graphicsDesignIcon.svg",
      features: ["Brand Identity", "UI/UX Design", "Marketing Materials"]
    },
    {
      title: "IT Support",
      description: "24/7 technical support from certified professionals with years of experience in cutting-edge technology solutions and infrastructure management.",
      image: "/assets/Images/itSupportIcon.svg",
      features: ["System Management", "Cloud Solutions", "Security"]
    },
    {
      title: "Digital Marketing",
      description: "Boost your online presence with data-driven strategies. Track record of successful implementations across various industries and business sizes.",
      image: "/assets/Images/digitalMarIcon.svg",
      features: ["SEO/SEM", "Social Media", "Content Strategy"]
    },
  ];

  const offerings = [
    "Technical Assistance in Product Build",
    "Product Visibility & Management",
    "Community & Networking",
    "Training & Development"
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Our Services
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Our Outstanding
            <br />
            <span className="text-blue-200">Workmanship & Services</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            TechHive is a dynamic startup designed to equip industries, clients, and individuals 
            with in-depth, industry-based products, leveraging technology and innovation.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {offerings.map((offering, index) => (
            <div 
              key={index}
              className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
            >
              <CheckCircle className="text-green-400 flex-shrink-0" sx={{ fontSize: 24 }} />
              <span className="text-white font-medium text-sm lg:text-base">{offering}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <Button 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
          >
            Join Our Talent Network
          </Button>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-0"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Popular
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-blue-50 group-hover:text-blue-600"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-blue-100 text-lg mb-4">
            Need a custom solution? Let&apos;s talk about your specific requirements.
          </p>
          <Button 
            variant="gradient"
            size="lg"
            className="shadow-xl hover:shadow-2xl"
          >
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
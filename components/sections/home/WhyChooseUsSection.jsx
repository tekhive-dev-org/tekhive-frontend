import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from '@mui/icons-material';
import { Button } from '../../common/Button';
import { Card } from '../../common/Card';
import Image from 'next/image';
import { useIsClient } from '../../../lib/hooks';

const WhyChooseUsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isClient = useIsClient();

  const features = [
    {
      title: "Seamless Collaboration",
      description: "Our user-friendly platform ensures effortless communication with clients and real-time project tracking for maximum productivity.",
      icon: "/assets/Images/Icons/customerserviceicon1.svg",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Secure & Reliable",
      description: "Industry-leading security measures and 99.9% uptime guarantee. Your data is protected with enterprise-grade encryption.",
      icon: "/assets/Images/Icons/securepaymentlineicon2.svg",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "24/7 Support & Community",
      description: "Join a thriving community with round-the-clock support. Get expert help and collaborate with peers to solve challenges faster.",
      icon: "/assets/Images/Icons/securepaymentlineicon2.svg",
      color: "from-purple-500 to-pink-500"
    },
  ];

  const testimonials = [
    {
      quote: "I recently hired TechHive for a project, and I couldn't be happier with the results. The work exceeded my expectations in every way. Communication was smooth, deadlines were met, and the quality was outstanding.",
      author: "Chidi British",
      position: "CEO at Cube Ltd",
      avatar: "/assets/Images/Icons/humanicon.svg",
      rating: 5
    },
    {
      quote: "Working with TechHive has been a game-changer for our business. Their innovative solutions and dedicated support team helped us streamline our operations and increase productivity by 40%.",
      author: "Sarah Johnson",
      position: "CTO at InnovateTech",
      avatar: "/assets/Images/Icons/humanicon.svg",
      rating: 5
    },
    {
      quote: "The level of expertise and professionalism shown by TechHive is unmatched. They delivered our complex project on time and within budget, exceeding all our requirements.",
      author: "Michael Chen",
      position: "Founder at StartupHub",
      avatar: "/assets/Images/Icons/humanicon.svg",
      rating: 5
    },
    {
      quote: "TechHive transformed our digital presence completely. Their strategic approach and cutting-edge technology solutions helped us reach new markets and double our revenue.",
      author: "Emily Rodriguez",
      position: "Marketing Director at GrowthCorp",
      avatar: "/assets/Images/Icons/humanicon.svg",
      rating: 5
    },
  ];

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying || !isClient) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isClient, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Why Choose Us
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose TechHive?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose us for unmatched quality, exceptional service, and a commitment to 
            <span className="text-blue-600 font-semibold"> exceeding your expectations</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="relative p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Image 
                      src={feature.icon} 
                      alt={feature.title}
                      width={32}
                      height={32}
                      className="brightness-0 invert"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h3>
            <p className="text-lg text-gray-600">
              Don&apos;t just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Testimonial Card */}
            <Card className="relative border-0 shadow-2xl overflow-hidden">
              <div className="p-8 lg:p-12">
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 text-blue-100 opacity-50">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" sx={{ fontSize: 24 }} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                  &quot;{testimonials[currentTestimonial].quote}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                      <Image 
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].author}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].position}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              {/* Previous Button */}
              <button
                onClick={prevTestimonial}
                className="flex items-center justify-center w-12 h-12 bg-white shadow-lg hover:shadow-xl border border-gray-200 rounded-full text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
                aria-label="Previous testimonial"
              >
                <ChevronLeft />
              </button>

              {/* Dots */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextTestimonial}
                className="flex items-center justify-center w-12 h-12 bg-white shadow-lg hover:shadow-xl border border-gray-200 rounded-full text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
                aria-label="Next testimonial"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience the TechHive difference?
          </p>
          <Button 
            variant="gradient"
            size="lg"
            className="shadow-xl hover:shadow-2xl"
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
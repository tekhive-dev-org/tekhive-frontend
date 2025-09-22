import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Testimonial Card Component
const TestimonialCard = ({ quote, author, company, location }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <p className="text-gray-700 italic mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="mr-4">
          <img 
            src="https://picsum.photos/seed/client1/40/40.jpg" 
            alt={`${author}'s avatar`} 
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-gray-600 text-sm">{company}, {location}</p>
        </div>
      </div>
    </div>
  );
};

// Main Testimonial Section Component
const TestimonySection = () => {
  const testimonials = [
    {
      quote: " I have an understanding that, even if the work is not perfect, it's a work in progress. And the reason why I'm on Skillshare is to develop a skill. I feel that it's a safe space. Wonderful UX learning platform! The courses are very well structured. Information is well explained and condense, you don't need to spend a lot of time trying to understand a topic. Good job!",
      author: "John Doe",
      company: "Techhive LLC",
      location: "USA"
    },
    {
      quote: " I have an understanding that, even if the work is not perfect, it's a work in progress. And the reason why I'm on Skillshare is to develop a skill. I feel that it's a safe space. Wonderful UX learning platform! The courses are very well structured. Information is well explained and condense, you don't need to spend a lot of time trying to understand a topic. Good job!",
      author: "Jane Smith",
      company: "Creative Agency",
      location: "California"
    },
    {
      quote: " I have an understanding that, even if the work is not perfect, it's a work in progress. And the reason why I'm on Skillshare is to develop a skill. I feel that it's a safe space. Wonderful UX learning platform! The courses are very well structured. Information is well explained and condense, you don't need to spend a lot of time trying to understand a topic. Good job!",
      author: "Michael Johnson",
      company: "Design Studio",
      location: "New York"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-[#0A0D14] mb-2">Clients Testimonials</h2>
          <p className="text-[#525866] text-base">Discover what our clients have to say about us</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
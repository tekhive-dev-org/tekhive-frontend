import React, { useState, useRef, useEffect } from 'react';
import aboutusIcon2 from '../../../assets/Images/Icons/aboutusIcon2.svg';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';

const CommitmentSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSpinner, setShowSpinner] = useState(true);
  const timeoutRef = useRef(null);

  const handleImageLoad = () => {
    setIsLoading(false);
    // Set a timeout to hide the spinner after 300ms
    timeoutRef.current = setTimeout(() => {
      setShowSpinner(false);
    }, 300);
  };

  const handleError = () => {
    setIsLoading(false);
    setShowSpinner(false);
  };

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image Section - Responsive Image Container */}
          <div className="lg:w-1/2 relative">
            {/* Loading spinner overlay */}
            {showSpinner && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 rounded-lg shadow-lg z-10">
                <LoadingSpinner size="large" text="Loading..." />
              </div>
            )}
            
            {/* Image with fade effect */}
            <img 
              src={aboutusIcon2}
              alt="Team Collaboration" 
              className={`rounded-lg shadow-lg w-full h-90 object-cover transition-opacity duration-300 ${
                showSpinner ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={handleImageLoad}
              onError={handleError}
            />
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold text-[#111111] mb-6">Commitment to Excellence:</h2>
            <p className="text-[#525866] text-base mb-4 leading-relaxed">
              Perhaps one of the most significant impacts of SaaS-powered communication and collaboration is the shift in organizational culture.
            </p>
            <p className="text-[#525866] text-base mb-4 leading-relaxed">
              Perhaps one of the most significant impacts of SaaS-powered communication and collaboration is the shift in organizational culture.
            </p>
            <p className="text-[#525866] text-base leading-relaxed">
              Perhaps one of the most significant impacts of SaaS-powered communication and collaboration is the shift in organizational culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
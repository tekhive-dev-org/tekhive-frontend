import React, { useState, useEffect, useRef } from 'react';
import aboutusIcon4 from '../../../assets/Images/Icons/aboutusIcon4.svg';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';

function LastSection() {
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
    <section className="relative min-h-[400px]">
      {/* Loading spinner overlay */}
      {showSpinner && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-10">
          <LoadingSpinner size="large" text="Loading..." />
        </div>
      )}
      
      {/* Image with fade effect */}
      <img 
        src={aboutusIcon4} 
        alt="Hero" 
        className={`w-full object-cover transition-opacity duration-300 ${
          showSpinner ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={handleImageLoad}
        onError={handleError}
      />
    </section>
  );
}

export default LastSection;
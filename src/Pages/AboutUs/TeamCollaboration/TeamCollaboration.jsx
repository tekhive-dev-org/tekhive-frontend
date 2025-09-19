import React from 'react';
import aboutusIcon3 from  '../../../assets/Images/Icons/aboutusIcon3.svg';

const TeamCollaboration = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
         
          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold text-[#111111] mb-6">Client-Centric Approach:</h2>
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

           {/* Image Section - Responsive Image Container */}
          <div className="lg:w-1/2">
            <img 
              src={aboutusIcon3}
              alt="Team Collaboration" 
              className="rounded-lg shadow-lg w-full h-90 object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TeamCollaboration;
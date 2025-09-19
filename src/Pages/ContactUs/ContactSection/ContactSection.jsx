import React from 'react';

const ContactSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-[#0A0D14] sm:text-4xl mb-4">
            We'd love to hear from you
          </h1>
          <p className="text-lg font-normal text-[#525866]">
            Chat to our friendly team
          </p>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-[#0066FF] flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Chat to support</h2>
            <p className="text-gray-600 mb-4">We're here to help</p>
            <button className="mt-auto bg-[#0066FF] hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
              Chat to support
            </button>
          </div>

         
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-[#0066FF] flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Visit us</h2>
            <p className="text-gray-600 mb-4">York near office HQ</p>
            <button className="mt-auto bg-[#0066FF] hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
              Get directions
            </button>
          </div>

          
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-[#0066FF] flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Call us</h2>
            <p className="text-gray-600 mb-4">Mon - Fri from 9am to 5pm</p>
            <button className="mt-auto bg-[#0066FF] hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
              Call us now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
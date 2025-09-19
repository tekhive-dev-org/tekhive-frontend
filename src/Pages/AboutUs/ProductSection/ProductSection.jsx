import React from 'react';
import { Button } from '../../../Components/Button/Button';

const ProductSection = () => {
  return (
    <section className="bg-[#0066FF] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          Join 500,000+ product professionals levelling up with Tech-Hive
        </h1>
        
        <p className="text-base text-white mb-8 max-w-2xl mx-auto">
          Build real skills, get certified, and grow fast in the AI-powered product world. Ready to stand out?
        </p>
        
        <Button className=" text-white border font-medium px-6 py-3 rounded-md hover:bg-[#569aff] transition-colors">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default ProductSection;
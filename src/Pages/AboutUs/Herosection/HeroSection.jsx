
import React from 'react';
import { Button } from '../../../Components/Button/button';
import aboutusIcon1 from  '../../../assets/Images/Icons/aboutusIcon1.svg';

function HeroSection() {
  return (
    <section className="pt-24 pb-12 bg-background"> {/* Changed py-15 to pt-24 pb-12 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-3xl lg:text-4xl xl:text-4xl font-medium text-[#1C1C1C]">
            Bringing Your Vision To Life
With Expertise and Dedication
            <br />
            <span className="">transform operations</span>
          </h2>
          <p className="text-[#525866] text-base sm:text-sm lg:text-base mb-3 mt-4 max-w-2xl mx-auto">
            Welcome to Tekhive LLC – where Technology meets opportunity! We empower tech professionals with industry-standard skills in design, Product Management, and handoff to break into future world of works. Contact us and start your transformation today!
          </p>
          <Button size="lg" className=" bg-[#0066FF] hover:bg- font-semibold text-white px-8 py-3 text-sm">Get Started</Button>
        </div>

        <img src={aboutusIcon1} alt="Hero" className="w-full  object-cover" />
      </div>
    </section>
  );
}

export default HeroSection;
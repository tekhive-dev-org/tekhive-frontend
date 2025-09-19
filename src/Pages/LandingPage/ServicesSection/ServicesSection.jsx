import React from "react";
import { Asterisk } from "lucide-react";
import { Button } from "../../../Components/Button/Button"; // Make sure this path is correct
import graphicsDesignIcon from '../../../assets/Images/graphicsDesignIcon.svg'
import itSupportIcon from '../../../assets/Images/itSupportIcon.svg'
import digitalMarIcon from '../../../assets/Images/digitalMarIcon.svg'

const features = [
  {
    title: "Graphic Design",
    description: "We deliver exceptional results that exceed expectations and drive business growth.",
    image: graphicsDesignIcon,

  },
  {
    title: "IT Support",
    description: "Our certified professionals bring years of experience in cutting-edge technology solutions.",
    image: itSupportIcon,
  },
  {
    title: "Digital Marketing",
    description: "Track record of successful implementations across various industries and business sizes.",
    image: digitalMarIcon,

  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#0066FF] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-white text-4xl sm:text-4xl lg:text-4xl  font-semibold mb-6">
            <span className="text-[#06202C]">Discover </span>
            Some Of Our Outstanding <br /> <span>Workmanship & Services.</span>
          </h1>
          <p className="text-white text-sm sm:text-base font-normal lg:text-base max-w-2xl text-pretty">
            Techhive is a dynamic startup designed to equip industries, clients and individuals with in-depth and industry-based products, leveraging technology and innovationskills. Techhive offers the following below:
          </p>
        </div>

        {/* Features list */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 mb-2.5">
          <div className="flex items-center  w-full sm:w-1/2 lg:w-1/4">
            <Asterisk color='#669C54' className='mr-2' />
            <div className=" bg-accent rounded-full flex-shrink-0" />
            <span className="text-white text-base font-medium">Technical Assistance in Product Build</span>
          </div>

          <div className="flex items-center  w-full sm:w-1/2 lg:w-1/4">
            <Asterisk color='#669C54' className='mr-2' />
            <div className=" bg-accent rounded-full flex-shrink-0" />
            <span className="text-white text-base font-medium">Product Visibilty & Management</span>
          </div>

          <div className="flex items-center  w-full sm:w-1/2 lg:w-1/4">
            <Asterisk color='#669C54' className='mr-2' />
            <div className=" bg-accent rounded-full flex-shrink-0" />
            <span className="text-white text-base font-medium">Community & Networking.</span>
          </div>
        </div>

        <Button className="mt-4 border border-white text-white text-base mb-5">
          For Talent
        </Button>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48  object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {feature.stats}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-3 text-[#0A0D14]">{feature.title}</h3>
                <p className="text-gray-700 text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
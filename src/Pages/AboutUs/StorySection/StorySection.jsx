import React from 'react';

function StorySection() {
  return (
    <section className="pt- pb-12 bg-background"> {/* Changed py-15 to pt-24 pb-12 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-3xl lg:text-4xl xl:text-4xl font-medium text-[#0A0D14]">
            The Tech-Hives Journey Story
            <br />
            <span className="">transform operations</span>
          </h2>
          <p className="text-[#525866] text-base sm:text-sm lg:text-base mb-3 mt-4 max-w-2xl mx-auto">
            Founded by Kelvin Oluwasegun Esho on March 4, 2024, DIH is more than just a training institute—it is a revolutionary movement dedicated to empowering individuals who aspire to transition into tech. Originally launched as DIH has evolved into a beacon of opportunity for those struggling to navigate their career paths, seeking clarity on where to begin.
          </p>
         
        </div>

       
      </div>
    </section>
  );
}

export default StorySection;
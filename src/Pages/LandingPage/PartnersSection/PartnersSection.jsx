import React from "react";
import { SiCoinbase, SiSlack, SiWebflow, SiSpotify, SiZoom, SiDropbox } from "react-icons/si";

const partners = [
  { name: "", icon: <SiCoinbase size={100} className="text-[#1652F0]" /> },
  { name: "Spotify", icon: <SiSpotify size={40} className="text-[#1DB954]" /> },
  { name: "Slack", icon: <SiSlack size={40} className="text-[#4A154B] " /> },
  { name: "Dropbox", icon: <SiDropbox size={40} className="text-[#0061FF]" /> },
  { name: "Webflow", icon: <SiWebflow size={40} className="text-[#1F3AB4]" /> },
  { name: "", icon: <SiZoom size={90} className="text-[#2D8CFF]" /> },
];

const PartnersSection = () => {
  return (
    <section className="py-12 border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h3 className="text-[20px] leading-7 tracking-[-0.02em] text-center text-lg font-semibold text-[#525866] mb-6">
            Some Partners we have worked for
          </h3>
        </div>

        {/* Partners in a single straight line */}
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300"
            >
              {partner.icon}
              <span className="text-gray-700 font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
import React from "react";
import Image from "next/image";

const PartnersSection = () => {
  const partners = [
    { name: "Microsoft", logo: "/assets/partners/microsoft.svg" },
    { name: "Google", logo: "/assets/partners/google.svg" },
    { name: "Amazon", logo: "/assets/partners/amazon.svg" },
    { name: "Spotify", logo: "/assets/partners/spotify.svg" },
    { name: "Slack", logo: "/assets/partners/slack.svg" },
    { name: "Dropbox", logo: "/assets/partners/dropbox.svg" },
  ];

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "50+", label: "Countries" },
    { value: "99%", label: "Success Rate" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
            Trusted Partnerships
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Proud Partners & Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by industry leaders and innovative startups worldwide
          </p>
        </div>

        {/* Partners Logos */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 group"
              >
                <div className="text-center">
                  {/* Placeholder for logos - replace with actual Image components when you have logos */}
                  <div className="w-24 h-12 mx-auto mb-2 bg-gray-200 rounded flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                    <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-800">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-b border-gray-200 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote/Testimonial Highlight */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 italic mb-6">
            &quot;TechHive has been instrumental in our digital transformation journey&quot;
          </blockquote>
          <p className="text-lg text-gray-600">
            — Fortune 500 Technology Partner
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
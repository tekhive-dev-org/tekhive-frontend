import React, { useEffect, useState } from 'react';

// Simple Stat Item Component
const StatItem = ({ number, label }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Start counting when component mounts
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= number) {
          clearInterval(interval);
          return number;
        }
        return prev + 1;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, [number]);

  return (
    <div className="text-center p-6 rounded-lg ">
      <div className="text-4xl font-bold">{count}+</div>
      <div className="text-[#525866] mt-2">{label}</div>
    </div>
  );
};


const StatisticsSection = () => {
  const stats = [
    { number: 80, label: "Clients projects delivered" },
    { number: 20, label: "Project Awards" },
    { number: 4.7, label: "Average products rating" }
  ];

  return (
    <section className="py-20 ">
      <div className="container border-1 rounded-4xl border-[#0066FF] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
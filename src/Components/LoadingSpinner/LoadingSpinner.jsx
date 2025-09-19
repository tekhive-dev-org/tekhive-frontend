// LoadingSpinner.js
import React from "react";

const LoadingSpinner = ({ size = "medium", text = "Loading..." }) => {
  const sizeClasses = {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-16 w-16"
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`inline-block ${sizeClasses[size]} animate-spin rounded-full border-4 border-solid border-[#0066FF] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`} role="status">
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          {text}
        </span>
      </div>
      <p className="mt-2 text-sm text-[#0066FF]">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
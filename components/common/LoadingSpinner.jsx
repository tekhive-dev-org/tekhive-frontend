import React from 'react'

const LoadingSpinner = ({ 
  size = 'default', 
  text = '', 
  className = '' 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    default: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  return (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {/* Spinner */}
      <div className="relative">
        <div className={`${sizes[size]} border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin`}></div>
      </div>
      
      {/* Loading Text */}
      {text && (
        <p className="text-sm font-medium text-gray-600 animate-pulse">
          {text}
        </p>
      )}
    </div>
  )
}

export default LoadingSpinner
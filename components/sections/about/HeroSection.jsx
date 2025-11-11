import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 lg:pt-24 pb-12 lg:pb-16">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover our story and mission to transform businesses through innovation
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

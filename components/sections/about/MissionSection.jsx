import React from 'react'

const MissionSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We are committed to delivering exceptional solutions that drive business growth and innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-700">
                To be the leading technology partner for businesses worldwide
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Values</h3>
              <p className="text-gray-700">
                Innovation, integrity, and customer success drive everything we do
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection

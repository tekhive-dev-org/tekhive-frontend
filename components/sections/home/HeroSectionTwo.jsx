import React from 'react'
import { useIsClient } from '../../../lib/hooks'
import { Bolt, Lock, Rocket, Lightbulb } from '@mui/icons-material'

const HeroSectionTwo = () => {
  const isClient = useIsClient()

  const features = [
    { Icon: Bolt, text: "Lightning Fast" },
    { Icon: Lock, text: "Secure" },
    { Icon: Rocket, text: "Scalable" },
    { Icon: Lightbulb, text: "Innovative" }
  ]

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Smart, Flexible Technology
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              On Your Terms
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Adapt, evolve, and thrive with technology solutions designed for your unique business needs
          </p>
        </div>

        {/* Features Icons */}
        {isClient && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.Icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent sx={{ fontSize: 48 }} />
                  </div>
                  <div className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    {feature.text}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Divider */}
        <div className="mt-16 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-md"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSectionTwo
import React, { useState, useEffect, useRef } from 'react'
import { Button } from '../../common/Button'
import { useIsClient } from '../../../lib/hooks'
import Link from 'next/link'
import Image from 'next/image'
import { Bolt, Rocket, Lightbulb, Star } from '@mui/icons-material'

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const isClient = useIsClient()
  const heroRef = useRef(null)

  // Animation on mount
  useEffect(() => {
    if (isClient) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isClient])

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const stats = [
    { label: 'Projects Completed', value: '500+', suffix: '' },
    { label: 'Happy Clients', value: '200+', suffix: '' },
    { label: 'Success Rate', value: '99', suffix: '%' },
    { label: 'Years Experience', value: '10+', suffix: '' }
  ]

  const floatingElements = [
    { Icon: Bolt, delay: '0s', position: 'top-20 left-20' },
    { Icon: Rocket, delay: '1s', position: 'top-40 right-32' },
    { Icon: Lightbulb, delay: '2s', position: 'bottom-32 left-16' },
    { Icon: Star, delay: '3s', position: 'bottom-20 right-20' }
  ]

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 lg:pt-24 xl:pt-32 pb-12 lg:pb-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Icons (only show on client) */}
      {isClient && floatingElements.map((element, index) => {
        const IconComponent = element.Icon
        return (
          <div
            key={index}
            className={`absolute opacity-20 animate-bounce ${element.position} hidden lg:block text-blue-600`}
            style={{ animationDelay: element.delay, animationDuration: '3s' }}
          >
            <IconComponent sx={{ fontSize: 32 }} />
          </div>
        )
      })}

      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left Content */}
          <div className={`space-y-8 text-center lg:text-left transition-all duration-1000 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium shadow-sm">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Welcome to the Future of Technology
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Build </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Tomorrow&apos;s
                </span>
                <br />
                <span className="text-gray-900">Solutions </span>
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Today
                </span>
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              Transform your business with cutting-edge technology solutions. 
              We create scalable, innovative digital experiences that drive 
              <span className="font-semibold text-blue-600"> exponential growth</span> and 
              <span className="font-semibold text-purple-600"> lasting success</span>.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
              <Link href="/contact">
                <Button 
                  size="xl"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="flex items-center">
                    Start Your Journey
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
              </Link>
              
              <Button 
                variant="outline"
                size="xl"
                className="group border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white"
              >
                <span className="flex items-center">
                  <svg className="mr-3 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Our Story
                  <svg className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </span>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wider">
                Trusted by Industry Leaders
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60">
                {['Microsoft', 'Google', 'Amazon', 'Apple'].map((company) => (
                  <div key={company} className="text-lg font-semibold text-gray-400">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className={`relative flex justify-center lg:justify-end items-center transition-all duration-1000 delay-500 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative w-full max-w-lg px-8 py-8">
              
              {/* Main Hero Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-md border-2 border-gradient rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 p-8 overflow-visible" style={{
                  backgroundImage: 'linear-gradient(135deg, #f3f4f6 0%, #f9fafb 100%)',
                  borderImage: 'linear-gradient(135deg, #3b82f6 0%, #9333ea 50%, #3b82f6 100%) 1',
                  borderRadius: '24px'
                }}>
                  
                  {/* Image Container */}
                  <div className="aspect-[4/3] relative border-2 border-gradient rounded-2xl overflow-hidden" style={{
                    borderImage: 'linear-gradient(135deg, #3b82f6 0%, #9333ea 50%, #3b82f6 100%) 1',
                    borderRadius: '16px'
                  }}>
                    <Image
                      src="/assets/images/heroIcon.svg"
                      alt="TechHive - Future Technology Solutions"
                      fill
                      className="object-contain drop-shadow-lg"
                      onLoad={handleImageLoad}
                      priority
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                    
                    {/* Loading State */}
                    {isLoading && (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center rounded-2xl">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Floating Status Cards (only show on client) */}
                  {isClient && !isLoading && (
                    <>
                      {/* Online Status */}
                      <div className="absolute top-2 left-2 bg-white rounded-xl shadow-xl p-3 animate-float z-10">
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                          <span className="text-sm font-semibold text-gray-700">Online</span>
                        </div>
                      </div>

                      {/* Performance Card */}
                      <div className="absolute bottom-2 right-2 bg-white rounded-xl shadow-xl p-4 animate-float-delayed z-10">
                        <div className="text-center">
                          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">99%</div>
                          <div className="text-xs text-gray-600 font-semibold">Uptime</div>
                        </div>
                      </div>

                      {/* Notification Badge */}
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full p-3 shadow-xl animate-pulse z-10">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-spin-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 lg:mt-32 transition-all duration-1000 delay-700 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group h-full">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col items-center justify-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default HeroSection
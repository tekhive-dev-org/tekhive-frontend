import React, { useState, useEffect, useRef } from 'react'
import { Button } from '../../../Components/Button/Button'
import heroIcon from '../../../assets/Images/heroIcon.svg'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSpinner, setShowSpinner] = useState(true);
  const timeoutRef = useRef(null);

  const handleImageLoad = () => {
    setIsLoading(false);
    // Set a timeout to hide the spinner after 300ms
    timeoutRef.current = setTimeout(() => {
      setShowSpinner(false);
    }, 300);
  };

  const handleError = () => {
    setIsLoading(false);
    setShowSpinner(false);
  };

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br  pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">

          <div className="  space-y-6 text-center lg:text-left">
            <Button className="cursor-pointer w-90% mt-2.5 border-r-2 rounded-2xl text-1xl  border-1 text-[#0066FF] border-[#0066FF]">Welcome to techhive Hub</Button>
            <h1 className=" text-4xl sm:text-5xl lg:text-5xl xl:text-4xl font-medium text-balance text-[#1C1C1C]  ">
              Build Future-proof Products in  <span className="text-primary">Tekhive</span> With Technology
            </h1>
            <p className="text-base sm:text-sm lg:text-base text-[#525866]  text-pretty max-w-2xl mx-auto lg:mx-0">
              Welcome to Techhive hub – where technology meets expectations! We empower aspiring tech professionals with industry-standard skills in website build, Product design & Management. Hire us and start your transformation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 font-normal justify-center lg:justify-start items-center">
              <Button size="lg" className=" bg-[#0066FF]  hover:bg- font-semibold text-white px-8 py-3 text-sm">
                <Link to="/Contact">Contact Us</Link>
              </Button>
              <Button className="px-8 py-3  border-1 text-[#525866] font-semibold border-[#5258660F] text-sm bg-transparent">
                Watch Video
              </Button>
            </div>
          </div>



          <div className="relative flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-md">

              <div className="relative border-[#1C1C1C] rounded-2xl overflow-hidden">

                <div className="absolute right-0  top-0 h-full w-1 bg-[#1C1C1C] z-10"></div>

                <div className="pr-3 relative">
                  <img
                    src={heroIcon}
                    alt="Techhive Hero"
                    className="w-90 h-auto object-cover rounded-2xl"
                    onLoad={handleImageLoad}
                    onError={handleError}
                  />
                  {showSpinner && (
                    <div className="absolute inset-0 bg-white bg-opacity-30 flex items-center justify-center rounded-2xl">
                      <LoadingSpinner text="loading..." />
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0066FF]/20 to-transparent pointer-events-none rounded-2xl" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#0066FF]/10 rounded-full blur-xl z-0"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#0066FF]/10 rounded-full blur-xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
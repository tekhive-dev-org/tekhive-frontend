import React from 'react'
import { Button } from '../Button/button'
import heroIcon from '../../assets/Images/heroIcon.svg'


const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br  pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
       
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Column - Text Content */}
          <div className=" cursor-pointer space-y-6 text-center lg:text-left">
            <Button className="w-90% mt-2.5 border-r-2 rounded-2xl text-1xl  border-1 text-[#0066FF] border-[#0066FF]">Welcome to techhive Hub</Button>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl font-bold text-balance text-[#1C1C1C] ">
              Build Future-proof Products in  <span className="text-primary">Tekhive</span> With Technology
            </h1>
            <p className="text-sm sm:text-sm lg:text-sm text-[#525866] text-muted-foreground text-pretty max-w-2xl mx-auto lg:mx-0">
              Welcome to Techhive hub – where technology meets expectations! We empower aspiring tech professionals with industry-standard skills in website build, Product design & Management. Hire us and start your transformation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button size="lg" className=" bg-[#0066FF] hover:bg-primary/90 text-white px-8 py-3 text-md">
                Get Started
              </Button>
              <Button  className="px-8 py-3  border-1 text-[#525866] border-[#5258660F] text-md bg-transparent">
                Watch Video
              </Button>
            </div>
          </div>

         
        {/* Right Column - Image */}

<div className="relative">
  {/* Border container */}
  <div className="relative border border-r-8 border-[#1C1C1C] rounded-2xl  p-4">
    {/* Image inside, above border */}
    <img
      src={heroIcon}
      alt="Hero icon"
      className="relative right-[-20px] w-[60%] h-auto object-cover z-10"
    />
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl pointer-events-none" />
  </div>

  
</div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
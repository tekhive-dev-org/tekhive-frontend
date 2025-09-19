import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "../../../Components/Button/Button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import crmImage from "../../../assets/Images/Icons/crmImage.svg"
import hrmImage from "../../../assets/Images/Icons/hrmImage.svg"

const SolutionSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024) // lg breakpoint

  const solutions = [
    {
      id: "crm",
      title: "CRM",
      description:
        "Customer relationship management solutions that help improve customer satisfaction and drive business growth.",
      image: crmImage,
      alt: "CRM meeting",
    },
    {
      id: "hrm",
      title: "HRM",
      description:
        "Human resource management solutions that help streamline HR processes and improve employee satisfaction.",
      image: hrmImage,
      alt: "HRM team",
    },
    {
      id: "erp",
      title: "ERP",
      description:
        "Enterprise resource planning solutions that integrate all your business processes into one unified system.",
      image: crmImage,
      alt: "ERP dashboard",
    },
    {
      id: "bi",
      title: "Business Intelligence",
      description:
        "Transform your data into actionable insights with our business intelligence solutions.",
      image: hrmImage,
      alt: "BI dashboard",
    },
  ]

  // Handle resize responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
      setCurrentSlide(0) // reset when switching layout
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Split solutions → 1 per slide (mobile) / 2 per slide (desktop)
  const slides = []
  const step = isMobile ? 1 : 2
  for (let i = 0; i < solutions.length; i += step) {
    slides.push(solutions.slice(i, i + step))
  }
  const totalSlides = slides.length

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0))
  }

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className=" text-4xl sm:text-3xl lg:text-4xl xl:text-4xl font-medium text-[#1C1C1C]">
            We create software solutions to
            <br />
            <span className=""> transform operations</span>
          </h2>
          <p className="text-[#525866] text-base sm:text-sm lg:text-base mt-4  max-w-2xl mx-auto">
            Helping organizations and individuals achieve their goals with smart solutions.
          </p>
        </div>

        {/* Slider */}
        <section className="relative overflow-hidden py-12">
          <motion.div
            className="flex"
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag={isMobile ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -50) nextSlide();
              else if (offset.x > 50) prevSlide();
            }}
          >
            {slides.map((group, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center"
              >
                {group.map((solution) => (
                  <div key={solution.id} className="relative">
                    {/* Image */}
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={solution.image}
                        alt={solution.alt}
                        className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Text Card */}
                    <div
                      className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/5
                    bg-white w-[90%] rounded-lg shadow-lg p-6 space-y-3 border border-gray-100 text-center z-10"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0A0D14]">
                        {solution.title}
                      </h3>
                      <p className="text-[#525866] text-base sm:text-base leading-relaxed">
                        {solution.description}
                      </p>
                      <Button className="font-medium text-[14px] leading-5 tracking-normal text-center border-1 text-sm border-[#0066FF] text-[#0066FF] hover:bg-[#cde1ff] rounded-4xl">
                        View More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </section>
        {/* Navigation */}
        <div className="flex items-center justify-center mt-18 sm:mt-20 space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Dots */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${currentSlide === index ? "bg-blue-500" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full bg-transparent"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
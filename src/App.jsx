import React from 'react'
import Navbar from './Components/Navbar/Navbar'
// import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import { Home } from 'lucide-react'

// import HeroSection from './Components/HeroSection/HeroSection'
// import HeroSectionTwo from './Components/HeroSectionTwo/HeroSectionTwo'
// import ServicesSection from './Components/ServicesSection/ServicesSection'
// import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs'
// import  SolutionSection  from './Components/SolutionSection/SolutionSection'

const App = () => {
  return (
     <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/Home" element={<LandingPage />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/Contact" element={<ContactUs />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
    // <div>
    //   <Navbar />
    //   {/* <HeroSection />
    //   <HeroSectionTwo />
    //   <ServicesSection />
    //   <WhyChooseUs />
    //   <SolutionSection /> */}
    //   {/* ...other components... */}
    // </div>
  )
}

export default App
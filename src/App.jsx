// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AboutUs from './Pages/AboutUs';
// import Blog from './Pages/Blog'; 
import ContactUs from './Pages/ContactUs';
import NotFoundPage from './Pages/NotFoundPage';


const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {

    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      
        <div className="font-lato flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/Home" element={<LandingPage />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              {/* <Route path="/Blog" element={<Blog />} /> */}
              <Route path="/Contact" element={<ContactUs />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
    
    </BrowserRouter>
  );
};

export default App;
// App.jsx
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AboutUs from './Pages/AboutUs';
import Blog from './Pages/Blog'; 
import ContactUs from './Pages/ContactUs';

const App = () => {
  return (
    <Router>
      <div className=" flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Home" element={<LandingPage />} /> 
            <Route path="/AboutUs" element={<AboutUs />} /> 
            {/* <Route path="/Contact" element={<ContactUs />} /> */}
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<ContactUs />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
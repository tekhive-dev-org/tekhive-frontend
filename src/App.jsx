// App.jsx
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/Blog';
import Blog from './Pages/Blog'; // Import your Blog component

const App = () => {
  return (
    <Router>
      <div className="font-lato flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Home" element={<LandingPage />} /> {/* Capital H */}
            <Route path="/AboutUs" element={<AboutUs />} /> {/* Capital A/U */}
            <Route path="/Contact" element={<ContactUs />} />
            <Route path="/Blog" element={<Blog />} /> {/* Add Blog route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
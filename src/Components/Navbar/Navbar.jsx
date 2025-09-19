import React, { useState } from "react";
import { Button } from "../../Components/Button/Button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-[#0066FF]">Tech-Hive</Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              
              <Link 
                to="/Home" 
                className={`${
                  isActive("/Home") 
                    ? "text-[#0066FF]" 
                    : "text-[#525866] hover:text-[#0066FF]"
                } transition-colors duration-200`}
              >
                Home
              </Link>
              
              <Link 
                to="/AboutUs" 
                className={`${
                  isActive("/AboutUs") 
                    ? "text-[#0066FF]" 
                    : "text-[#525866] hover:text-[#0066FF]"
                } transition-colors duration-200`}
              >
                About
              </Link>
              
              <Link 
                 
                className={`${
                  isActive("/Blog") 
                    ? "text-[#0066FF]" 
                    : "text-[#525866] hover:text-[#0066FF]"
                } transition-colors duration-200`}
              >
                Blog
              </Link>
            </div>
          </div>
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              className="border-1 border-[#0066FF] hover:bg-[#0066FF] hover:text-white text-[#525866]"
              onClick={() => window.location.href = '/Contact'}
              type="button"
            >
              <Link to="/Contact">Contact Us</Link>
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#0066FF] hover:text-[#525866] focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-300">
              <Link
                to="/Home"
                className={`${
                  isActive("/Home") 
                    ? "text-[#0066FF]" 
                    : "text-[#525866] hover:text-[#0066FF]"
                } block px-3 py-2 transition-colors duration-200`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/AboutUs"
                className={`${
                  isActive("/AboutUs") 
                    ? "text-[#0066FF]" 
                    : "text-[#525866] hover:text-[#0066FF]"
                } block px-3 py-2 transition-colors duration-200`}
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                className={`${
                  isActive("/Blog") 
                    ? "text-[#0066FF]" 
                    : "text-[#525866] hover:text-[#0066FF]"
                } block px-3 py-2 transition-colors duration-200`}
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full border-1 border-[#0066FF] hover:bg-[#0066FF] text-[#525866]">
                  <Link to="/Contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
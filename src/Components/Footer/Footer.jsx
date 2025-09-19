import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0066FF] text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand / Intro */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-[20px] leading-7 tracking-[-0.02em] text-2xl  mb-4 text-white">TekHive</h3>
            <p className="text-white mb-3 font-normal text-[16px] leading-6 tracking-normal">
             At Techhive, we specialise in delivering tailored technology and IT solutions designed to propel your business forward. From streamlining operations to and drving growth. 
            </p>
            <div className="flex text-white space-x-4 text-xl">
              <a
                href="https://linkedin.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className=" font-semibold text-[20px] leading-7 tracking-[-0.02em]  text-white mb-4">Useful Links</h4>
           <ul className="font-lato font-normal leading-6 tracking-normal justify-center text-white gap-6 text-[0.5sm">
                        <Link to="/AboutUs" className="hover:text-[#a4c7fc] transition">About</Link>
                        <br />
                        {/* <li><a href="/about" className="hover:text-[#a4c7fc] transition">About</a></li> */}
                        <Link  className="hover:text-[#a4c7fc] transition">Blog</Link>

                    </ul>
          </div>

         
          <div>
            <h4 className=" font-semibold text-[20px] leading-7 tracking-[-0.02em]  text-white mb-4">Company</h4>
            <ul className="space-y-3 text-white text-primary-foreground/80">
              <li className="flex  items-center space-x-2">
                <FaPhoneAlt className=" font-normal text-base leading-6 tracking-normal " />
                <span>+234 81 602 32 043</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="font-normal text-base leading-6 tracking-normal " />
                <span>contact@techhive.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaGlobe className="font-normal text-base leading-6 tracking-normal " />
                <span>https://techhive.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="font-normal text-[14px] leading-5 tracking-normal mt-8 text-white pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center">
          <p className="text-white">Copyright &copy; {new Date().getFullYear()} TekHive. All rights reserved.</p>
         <div className="flex ml-auto space-x-4 text-sm">
            <p>Terms & Condition</p>
            <span>|</span>
            <p>Privacy Policy</p>
         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
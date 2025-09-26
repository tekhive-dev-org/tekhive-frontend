import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import techhivelogo1 from "../../assets/Images/techhivelogo1.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0066FF] text-primary-foreground py-12">
      <div>hello people</div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand / Intro */}
          <div className="md:col-span-2">
            <div className="flex-shrink-0">
              <img src={techhivelogo1} alt="techhivelogo" className="mb-[15px] " />
              <p className="mt-[-2rem] ml-3 text-base text-white mb-7">Techhive LLC</p>
            </div>
            <p className="text-white mb-3 font-normal text-[16px] leading-6 tracking-normal">
              At Techhive, we specialise in delivering tailored technology and IT solutions designed to propel your business forward. From streamlining operations to and drving growth.
            </p>
            <div className="flex text-white space-x-4 text-xl">
              {/* <a
                href="https://linkedin.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <FaLinkedin />
              </a> */}
              <a
                href="https://www.instagram.com/tekhive.dev/"
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
              <Link className="hover:text-[#a4c7fc] transition">Blog</Link>

            </ul>
          </div>


          <div>
            <h4 className="font-semibold text-[20px] leading-7 tracking-[-0.02em] text-white mb-4">Company</h4>
            <ul className="space-y-3 text-white text-primary-foreground/80">
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="font-normal text-base leading-6 tracking-normal" />
                <a
                  href={`tel:+2347076910684`}
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  +234 707 691 0684
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="font-normal text-base leading-6 tracking-normal" />
                <a
                  href={`mailto:Tekhive.dev@gmail.com`}
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  Tekhive.dev@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaGlobe className="font-normal text-base leading-6 tracking-normal" />
                <div
                  href="https://techhive.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  https://techhive.com
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="font-normal text-[14px] leading-5 tracking-normal mt-8 text-white pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center">
          <p className="text-white">Copyright &copy; {new Date().getFullYear()} TechHive. All rights reserved.</p>
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
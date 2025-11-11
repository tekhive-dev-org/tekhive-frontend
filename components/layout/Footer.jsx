import React from "react";
import { Phone, Email, LocationOn, LinkedIn, Twitter, Instagram } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    company: [
      { name: "About", href: "/aboutus" },
      { name: "Services", href: "/services" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
    social: [
      { name: "LinkedIn", href: "#", icon: LinkedIn },
      { name: "Twitter", href: "#", icon: Twitter },
      { name: "Instagram", href: "#", icon: Instagram },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold text-white mb-4">
                TechHive
              </h3>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Delivering innovative technology solutions that transform businesses and drive growth. 
              Your trusted partner in digital transformation.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={item.name}
                >
                  <item.icon sx={{ fontSize: 20 }} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <Phone sx={{ fontSize: 18, marginTop: "2px" }} />
                <span>+234 81 602 32 043</span>
              </li>
              <li className="flex items-start space-x-3">
                <Email sx={{ fontSize: 18, marginTop: "2px" }} />
                <span>contact@techhive.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <LocationOn sx={{ fontSize: 18, marginTop: "2px" }} />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} TechHive. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              {navigation.legal.map((item, index) => (
                <React.Fragment key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                  {index < navigation.legal.length - 1 && (
                    <span className="text-gray-600">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
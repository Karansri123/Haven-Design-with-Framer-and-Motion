// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaPhone } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { SlideLeft } from "../../Animation/Animate";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial='initial'
      whileInView='animate'
      className="bg-gray-50"
    >
      <div className="container mx-auto px-4 py-11 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* company info section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={Logo}
                alt="Haven Design Logo"
                className="w-8 h-8 object-contain"
                loading="lazy"
              />
              <p className="text-xl font-semibold text-gray-800">
                Haven Design
              </p>
            </div>
            <p className="text-gray-600 font-medium">
              Lucknow, Uttar Pradesh, India
            </p>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold text-gray-800">About us</h1>
              <ul className="space-y-3">
                {[
                  "Our Story",
                  "Designer",
                  "Craftmanship",
                  "Sustainability",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold text-gray-800">Support</h1>
              <ul className="space-y-3">
                {["FAQ's", "Shipping & Returns", "Care Guide", "Guarantee"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold text-gray-800">Contact us</h1>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919999999999"
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  <FaPhone className="flex-shrink-0" />
                  <span>+91 xxxxxxxxxx</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact.karansrivastava189@gmail.com"
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  <LuMessageSquare className="flex-shrink-0" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* bottom section */}
        <div className="border-t border-gray-200 pt-5 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-medium text-gray-500">
              &copy; {currentYear} Haven Design. All rights reserved
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="text-sm font-medium text-gray-500">
                Designed & Developed by
              </span>
              <div className="relative group">
                <span className="font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Karan Srivastava
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
              </div>
              
              <div className="flex gap-2 ml-2">
                <a 
                  href="https://github.com/Karansri123" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/karan9455/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner1 from "../../assets/banner2.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../Animation/Animate";

const Banner2 = () => {
  return (
    <div className="bg-gray-50">
      <div className="container py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="space-y-6 flex justify-center flex-col">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl md:text-5xl font-bold font-serif leading-tight"
            >
              Simple Steps to a Stunning Living Room
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-600 text-base leading-7 max-w-lg"
            >
              Transform your space effortlessly with smart decor, cozy textures,
              and stylish accents. These simple steps will make your living room
              stunning without the hassle!
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="flex gap-3"
            >
              <div className="space-y-1">
                <p className="text-3xl font-bold font-serif text-gray-900">
                  +1
                </p>
                <p className="text-gray-500 text-sm">Year Of Experience</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold font-serif text-gray-900">
                  100+
                </p>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold font-serif text-gray-900">
                  10
                </p>
                <p className="text-gray-500 text-sm">Award Gained</p>
              </div>
            </motion.div>
            <motion.button
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c] hover:shadow-[3px_3px_0px_0px_#6c6c6c] hover:-translate-y-0.5 transition-all duration-200 w-fit px-8 py-3 text-lg"
            >
              Contact Us
            </motion.button>
          </div>

          {/* Image section */}
          <div className="flex justify-center md:justify-end">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner1}
              alt="Living room design"
              className="w-full max-w-md md:max-w-lg rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;

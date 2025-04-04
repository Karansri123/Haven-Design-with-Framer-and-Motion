// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner0 from "../../assets/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../Animation/Animate";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="container py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* image section */}
          <div className="flex justify-center transition-all duration-300 hover:scale-[1.02]">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner0}
              alt="Team collaboration"
              className="w-[95%] md:w-full mx-auto rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
          {/* Text Section */}
          <div className="space-y-6 flex justify-center flex-col">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl md:text-5xl font-bold font-serif text-gray-900 leading-tight"
            >
              We believe that a team makes every project stronger
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-600 text-base leading-relaxed"
            >
              We believe that a team makes every project stronger.
              Collaboration, creativity, and shared vision drive success,
              turning ideas into impactful results through teamwork and
              dedication.
            </motion.p>
            <motion.button
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c] hover:shadow-[3px_3px_0px_0px_#6c6c6c] hover:-translate-y-0.5 transition-all duration-200 w-fit px-8 py-3 text-lg"
            >
              Discover Now
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import HeroPng from "../../assets/Hero.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../Animation/Animate";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[450px] gap-10">
        {/* Text section - Added aria-label for accessibility */}
        <div
          className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-52 text-center md:text-left pt-20 md:pt-0 px-4 sm:px-10"
          aria-label="Hero section content"
        >
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            animate="animate"
            className="text-4xl font-bold font-serif"
          >
            Elegant Interior Design Sketch
          </motion.h1>
          <motion.p
            variants={SlideUp(0.5)}
            initial="initial"
            animate="animate"
            className="text-sm md:text-base text-gray-500 leading-7"
          >
            Transform your vision into reality with bespoke interior design
            sketches and curated selections, tailored to your style, space, and
            elegance
          </motion.p>
          <div className="space-x-4 flex flex-wrap justify-center md:justify-start gap-4">
            <motion.button
              variants={SlideUp(0.8)}
              initial="initial"
              animate="animate"
              className="primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c] hover:shadow-[3px_3px_0px_0px_#6c6c6c] hover:translate-y-0.5 transition-all duration-200"
              aria-label="Get started"
            >
              Get started
            </motion.button>
            <motion.button
              variants={SlideUp(1.1)}
              initial="initial"
              animate="animate"
              className="primary-btn uppercase hover:bg-gray-100 hover:text-black transition-colors duration-200"
              aria-label="Contact us"
            >
              Contact Us
            </motion.button>
          </div>
        </div>

        {/* Images section - Added lazy loading and priority for  */}
        <div className="flex flex-col items-center justify-center">
          <motion.img
          initial={{x:100,opacity:0}}
          animate={{x:0 , opacity:1}}
          transition={{duration:0.5,delay:0.5}}
            src={HeroPng}
            alt="Elegant interior design sketch"
            className="w-[80%] sm:w-[50%] md:w-[450px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            loading="lazy"
            width="450"
            height="300"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  // You can add prop types here if the component will receive props in the future
};

export default React.memo(Hero);

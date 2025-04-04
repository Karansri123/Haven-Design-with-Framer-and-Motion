// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../Animation/Animate";

const Subscribe = () => {
  return (
    <div className="max-w-[500px] mx-auto space-y-5 py-14 px-4">
      <motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-3xl font-bold font-serif text-center"
      >
        Subscribe for more
      </motion.h1>
      <motion.p
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className="max-w-[300px] mx-auto text-gray-500 text-sm text-center"
      >
        Subscribe now for exclusive updates, tips, and fresh content—straight to
        your inbox. Don&apos;t miss out!
      </motion.p>
      {/* form  */}
      <motion.form
        variants={SlideUp(0.6)}
        initial="initial"
        whileInView="animate"
        className="!mt-10 flex flex-col sm:flex-row gap-2 justify-center"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 border-[1px] border-black flex-grow max-w-[300px] sm:max-w-none"
          aria-label="Email address for newsletter subscription"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 uppercase hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
        >
          Subscribe
        </button>
      </motion.form>
      <motion.p
        variants={SlideUp(0.6)}
        initial="initial"
        whileInView="animate"
        className="text-xs text-gray-400 text-center mt-2"
      >
        We respect your privacy. Unsubscribe at any time.
      </motion.p>
    </div>
  );
};

export default Subscribe;

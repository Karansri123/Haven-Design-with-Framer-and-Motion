/* eslint-disable no-unused-vars */
import React from "react";
import { delay, motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../Animation/Animate";

const TestimonialData = [
  {
    id: 1,
    name: "Vikram Kapoor",
    designation: "Designer",
    image:
      "https://plus.unsplash.com/premium_photo-1661962416772-33281b5a9dce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The transformation of our living space is truly remarkable! The designers blended modern aesthetics with traditional Indian elements seamlessly. Highly recommended!",
    delay:0.2,
  },
  {
    id: 2,
    name: "Ananya Verma",
    designation: "Developer",
    image:
      "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "From concept to execution, the team was amazing. My home now has a warm and elegant vibe, exactly how I imagined it. Great attention to detail!",
    delay:0.4,
  },
  {
    id: 3,
    name: "Rohan Desai",
    designation: "Manager",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Absolutely loved the work! The design is not only stylish but also functional. It reflects our personality and makes every corner feel special. Thank you!",
    delay:0.6,
  },
];

const Testimonial = () => {
  return (
    <div className="py-14" aria-labelledby="testimonial-heading">
      {/* Header text */}
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-12 px-4">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          id="testimonial-heading"
          className="text-4xl font-bold font-serif text-gray-900"
        >
          What Our Customers Say
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-sm md:text-base max-w-[350px] md:max-w-[450px] mx-auto leading-relaxed"
        >
          Discover what our customers have to say about their
          experiences—genuine feedback, real stories, and trusted reviews that
          showcase our commitment to excellence.
        </motion.p>
      </div>

      {/* Testimonial cards */}
      <div className="bg-black p-6 md:p-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 p-4 md:p-5">
          {TestimonialData.map((card) => (
            <motion.div
            variants={SlideLeft(card.delay)}
            initial="initial"
            whileInView="animate"
              key={card.id}
              className="border border-gray-700 text-white group hover:bg-white hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-lg overflow-hidden"
            >
              <div className="p-6">
                {/* Upper Section */}
                <div className="flex items-center gap-4">
                  <img
                    src={card.image}
                    alt={`Portrait of ${card.name}`}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gray-600 group-hover:border-gray-300 transition-colors duration-300"
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                  <div>
                    <p className="text-sm font-bold group-hover:text-gray-900 transition-colors duration-300">
                      {card.name}
                    </p>
                    <p className="text-gray-400 text-xs group-hover:text-gray-600 transition-colors duration-300">
                      {card.designation}
                    </p>
                    <div className="flex mt-2 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                {/* bottom section */}
                <div className="mt-5 pt-5 border-t border-gray-700/40 group-hover:border-gray-300/40 transition-colors duration-300">
                  <p className="text-sm text-gray-300 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

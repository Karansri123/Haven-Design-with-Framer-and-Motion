// eslint-disable-next-line no-unused-vars
import React from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SlideUp } from "../../Animation/Animate";

const serviceCard = [
  {
    id: 1,
    title: "Premium Amenities",
    description:
      "Elevate your home with smart automation, luxury finishes, spa-like bathrooms, custom closets, gourmet kitchens, and premium flooring—blending elegance with modern comfort",
    icon: <FaVectorSquare />,
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "High-Grade Products",
    description:
      "Meticulously engineered with top-tier materials for exceptional performance, longevity, and refined aesthetics—where quality meets perfection.",
    icon: <FaPenToSquare />,
    link: "#",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Pocket-Friendly",
    description:
      "Smart, budget-savvy choices that deliver great value without compromising quality—perfect for those who love style, function, and savings in one",
    icon: <BiSolidDollarCircle />,
    link: "#",
    delay: 0.6,
  },
];

const Services = () => {
  return (
    <div>
      <div className="container py-20">
        <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-3xl font-bold font-serif"
          >
            What We Deliver
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-sm"
          >
            Our services are designed to meet your needs and exceed your
            expectations.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {serviceCard.map((card) => (
            <motion.div
              variants={SlideUp(card.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="group space-y-4 border-[1px] border-black/30 p-6 hover:bg-black hover:shadow-[7px_7px_0px_0px_#6c6c6c] transition-colors duration-300"
              key={card.id}
            >
              <span className="inline-block text-xl border-[1px] border-black p-3 rounded-full group-hover:border-white group-hover:text-white">
                {card.icon}
              </span>
              <p className="text-2xl font-bold group-hover:text-white font-serif">
                {card.title}
              </p>
              <p className="text-gray-400 text-xs group-hover:text-gray-300">
                {card.description}
              </p>
              <a
                className="inline-block border-b border-black group-hover:border-white group-hover:text-white"
                href={card.link}
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
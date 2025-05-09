// eslint-disable-next-line no-unused-vars
import React from "react";
import Brand1 from "../../assets/brands/1.png";
import Brand2 from "../../assets/brands/2.png";
import Brand3 from "../../assets/brands/3.png";
import Brand4 from "../../assets/brands/4.png";
import Brand5 from "../../assets/brands/5.png";
import { motion } from "framer-motion";
import { SlideLeft } from "../../Animation/Animate";

const Brands = () => {
  return (
    <>
      <div className="container py-14">
        <div className="flex flex-wrap justify-center  lg:justify-between gap-6  ">
          <motion.img
            variants={SlideLeft(0.2)}
            initial="initial"
            whileInView={"animate"}
            src={Brand1}
            alt="brand"
            className="w-[110px] md:w-[200px] "
          />
          <motion.img
            variants={SlideLeft(0.4)}
            initial="initial"
            whileInView={"animate"}
            src={Brand2}
            alt="brand"
            className="w-[110px] md:w-[200px]"
          />
          <motion.img
            variants={SlideLeft(0.6)}
            initial="initial"
            whileInView={"animate"}
            src={Brand3}
            alt="brand"
            className="w-[110px] md:w-[200px]"
          />
          <motion.img
            variants={SlideLeft(0.8)}
            initial="initial"
            whileInView={"animate"}
            src={Brand4}
            alt="brand"
            className="w-[110px] md:w-[200px]"
          />
          <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={Brand5}
            alt="brand"
            className="w-[110px] md:w-[200px]"
          />
        </div>
      </div>
    </>
  );
};

export default Brands;
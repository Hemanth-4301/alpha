import React from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <motion.img
            initial={{ scale: 1 }}
            whileInView={{ scale: 1, rotateY: 360 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            src={logo}
            alt="Alpha Tinkers Lab Logo"
            className="w-80 h-80 lg:w-[500px] lg:h-[500px] object-contain"
          />
        </div>

        <motion.div
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="lg:w-1/2 mt-2 lg:mt-0 text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-[50px]">
            About ALPHA Tinkerers' Lab
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            At ALPHA Tinkerers' Lab, we believe in learning by doing. From
            AI-powered solutions to sustainable tech innovations, we provide a
            hands-on environment where ideas come to life. Whether you're a
            student, researcher, or entrepreneur, this is your space to build,
            experiment, and innovate.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

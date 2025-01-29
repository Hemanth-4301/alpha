import React from "react";
import { motion } from "framer-motion";
import robo from "../assets/robo2.png";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      className="bg-black text-slate-300 pt-24 md:py-32 flex items-center overflow-hidden"
      id="home"
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-1">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            stiffness: 300,
          }}
          className="md:w-1/2 text-center md:text-left"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Welcome to
            <span className="text-sky-300"> ALPHA Tinkerers' </span>
            <span className="text-slate-300">Lab</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Where Curiosity Meets Creation
          </motion.p>
          <div className="flex justify-center md:justify-start space-x-4">
            <motion.button
              className="bg-white text-black px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/about#about")}
            >
              About Us
            </motion.button>
            <motion.button
              className="bg-black text-white px-6 py-3 rounded-full shadow-md border border-white hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            stiffness: 300,
          }}
          className="md:w-1/2 flex justify-center"
        >
          <motion.img
            src={robo}
            alt="Hero"
            className="rounded-lg shadow-2xl max-w-full h-auto "
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

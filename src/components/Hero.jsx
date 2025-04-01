import { useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import robo from "../assets/robo2.png";

const Hero = () => {
  const navigate = useNavigate();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <section
      className="bg-black text-slate-300 pt-24 md:py-32 flex items-center overflow-hidden relative"
      id="home"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            color: {
              value: ["#3498db"],
            },
            links: {
              color: "#000000",
              distance: 120,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              speed: 1.2,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 60,
            },
            opacity: { value: 1 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              grab: {
                distance: 140,
                links: { opacity: 1 },
              },
            },
          },
        }}
      />

      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-1 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            type: "spring",
            stiffness: 200,
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
            <span className="text-sky-300">
              {" "}
              ALPHA Innovation & Tinkerers'{" "}
            </span>
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
              className="bg-white text-black px-6 py-3 rounded-full shadow-md hover:bg-transparent border hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact#contact")}
            >
              Contact Us
            </motion.button>
            <motion.button
              className="bg-black text-white px-6 py-3 rounded-full shadow-md border border-white hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/about#about")}
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
            stiffness: 200,
            type: "spring",
          }}
          className="md:w-1/2 flex justify-center"
        >
          <motion.img
            src={robo}
            alt="Hero"
            className="rounded-lg shadow-2xl max-w-full h-auto"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

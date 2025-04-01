import React from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { FiAward, FiUsers, FiLayers, FiZap } from "react-icons/fi";

function About() {
  const features = [
    {
      icon: <FiZap className="text-2xl text-white" />,
      title: "Cutting-edge Technology",
      description: "Access to the latest tools and equipment for innovation",
    },
    {
      icon: <FiLayers className="text-2xl text-white" />,
      title: "Multidisciplinary Approach",
      description: "Combine different fields for groundbreaking solutions",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="py-28 md:py-36 bg-black text-white overflow-hidden relative"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-white blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-slate-600 blur-3xl opacity-20"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative">
        <motion.div
          className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="lg:w-1/2 lg:sticky lg:top-32 lg:h-[calc(100vh-16rem)] flex items-center justify-center mb-10 lg:mb-0"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-md">
              <motion.div
                initial={{ scale: 0.9, rotate: -2 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.2, 0.8, 0.4, 1],
                }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-2xl shadow-2xl border-2 border-slate-700"
                >
                  <motion.img
                    src={logo}
                    alt="Alpha Innovation Tinkers Lab Logo"
                    className="w-full h-auto object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 border-2 border-white rounded-2xl pointer-events-none"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 0.3, scale: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 lg:min-h-[80vh] lg:flex lg:flex-col lg:justify-center"
            variants={itemVariants}
          >
            <div className="space-y-10">
              <motion.div variants={containerVariants}>
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
                  variants={itemVariants}
                >
                  <span className="inline-block">
                    About <span className="text-slate-300">ALPHA</span>
                  </span>
                  <br />
                  <span className="inline-block mt-2">
                    Innovation & Tinkerers' Lab
                  </span>
                </motion.h1>

                <motion.div className="mt-6" variants={itemVariants}>
                  <motion.p
                    className="border-l-4 border-slate-300 pl-4 py-2 text-lg leading-relaxed text-slate-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    At{" "}
                    <span className="font-semibold text-white">
                      ALPHA Innovation Tinkerers' Lab
                    </span>
                    , we believe in learning by doing. From AI-powered solutions
                    to sustainable tech innovations, we provide a hands-on
                    environment where ideas come to life.
                  </motion.p>
                </motion.div>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                variants={containerVariants}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    variants={itemVariants}
                    whileHover="hover"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <motion.div
                      className="absolute -inset-0.5 bg-gradient-to-br from-slate-500 to-slate-800 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"
                      variants={{
                        hover: { opacity: 0.5 },
                      }}
                    />
                    <motion.div
                      className="relative bg-black p-6 rounded-xl border border-slate-800 h-full"
                      variants={cardHoverVariants}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="p-3 rounded-lg bg-slate-800 flex-shrink-0"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(30, 41, 59, 0.8)",
                          }}
                        >
                          {feature.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">
                            {feature.title}
                          </h3>
                          <p className="text-slate-400">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

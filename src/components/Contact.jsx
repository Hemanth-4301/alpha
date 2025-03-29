import { motion } from "framer-motion";
import React from "react";

function Contact() {
  const phoneNumber = "+917019870120";
  const emailAddress = "alphatinkererslab@nie.ac.in";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const handleEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <motion.section
      id="contact"
      className="py-16 bg-black text-white overflow-hidden"
      initial={{ y: -100, scale: 0.8 }}
      whileInView={{ y: 0, scale: 1 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold my-8 text-center text-white">
          Get in Touch
        </h2>

        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 items-center w-full">
          <div className="w-full sm:w-3/4 md:w-2/3 p-6 rounded-lg shadow-lg border border-slate-600 bg-black flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-between bg-black border border-slate-500 text-white p-4 rounded-md w-full">
              <span className="text-base sm:text-lg font-medium break-all">
                TLB Manager
              </span>
              <button
                onClick={handleWhatsApp}
                className="mt-3 sm:mt-0 bg-white border  hover:bg-transparent hover:text-white text-black py-2 px-4 rounded-md text-sm font-medium transition duration-200"
              >
                Message Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between bg-black border border-slate-500 text-white p-4 rounded-md w-full">
              <span className="text-base sm:text-lg font-medium break-all">
                {emailAddress}
              </span>
              <button
                onClick={handleEmail}
                className="mt-3 sm:mt-0 bg-white border  hover:bg-transparent hover:text-white text-black py-2 px-4 rounded-md text-sm font-medium transition duration-200"
              >
                Email Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;

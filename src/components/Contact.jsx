import { motion } from "framer-motion";
import React from "react";
import {
  FiMail,
  FiSend,
  FiGithub,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

function Contact() {
  const emailAddress = "alphatinkererslab@nie.ac.in";
  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/yourusername" },
    { icon: <FiTwitter />, url: "https://twitter.com/yourhandle" },
    { icon: <FiLinkedin />, url: "https://linkedin.com/in/yourprofile" },
  ];

  const handleEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <motion.section
      id="contact"
      className="py-28 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Get in touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions or want to collaborate? Reach out to us through email
            or connect with us on social media.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-xl p-8 border border-gray-800 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <FiMail className="text-3xl text-white" />
                <h3 className="text-2xl font-bold text-white">Email Us</h3>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-800 border border-gray-700 text-white p-4 rounded-lg w-full mb-6">
                <span className="text-lg font-medium break-all hover:text-purple-300 transition-colors">
                  {emailAddress}
                </span>
              </div>

              <motion.button
                onClick={handleEmail}
                className="w-full flex items-center justify-center gap-2 bg-white border-white text-black py-3 px-6 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend className="text-xl" />
                Send Message
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;

import React from "react";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 border-t border-slate-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="flex items-center text-gray-300">
              <MapPinIcon className="h-5 w-5 mr-2 text-gray-400" />
              123 Main St, City, Country
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="flex items-center mb-2 text-gray-300">
              <PhoneIcon className="h-5 w-5 mr-2 text-gray-400" />
              +1 (123) 456-7890
            </p>
            <p className="flex items-center text-gray-300">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-gray-400" />
              info@example.com
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex   gap-5 justify-start">
              <motion.a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram size={30} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={30} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter size={30} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          © 2025 Your Company. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

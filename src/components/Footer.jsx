import React from "react";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black  text-slate-300 pt-8 pb-8 border-t border-slate-600 z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="  flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2 text-gray-400" />
              <p>NIE (NORTH) , Mysore , Karnataka</p>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="flex items-center mb-2 ">
              <PhoneIcon className="h-5 w-5 mr-2 text-gray-400" />
              +91 70198 70120
            </p>
            <p className="flex items-center ">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-gray-400" />
              alphatinkererslab@nie.ac.in
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex   gap-5 justify-start">
              {/* <motion.a
                href="#"
                className=" hover:text-white transition duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram size={30} className="text-gray-400" />
              </motion.a> */}
              <motion.a
                href="https://www.linkedin.com/company/alpha-tinkerers-lab-nie/"
                className=" hover:text-white transition duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={30} className="text-gray-400" />
              </motion.a>
              {/* <motion.a
                href="#"
                className=" hover:text-white transition duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter size={30} className="text-gray-400" />
              </motion.a> */}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12  text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          © 2025 ALPHA Innovation Tinkerers'. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

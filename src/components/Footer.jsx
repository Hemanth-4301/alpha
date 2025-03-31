import React from "react";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-slate-300 pt-8 pb-8 border-t border-slate-600 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* Location Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="flex items-center mb-2">
              <MapPinIcon className="h-5 w-5 mr-2 text-gray-400" />
              <span>NIE (NORTH), Hootagalli, Mysuru, Karnataka</span>
            </p>
            {/* Google Map Embed */}
            <div className="w-full h-40 md:h-48 lg:h-56">
              <iframe
                title="NIE North Location"
                className="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.175015864634!2d76.58233547404062!3d12.371206227759115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7bdade337df9%3A0x23a85e1a4a664e0c!2sThe%20National%20Institute%20Of%20Engineering%20North%20Campus%20(NIE%20North%20)!5e0!3m2!1sen!2sin!4v1743275464245!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="flex items-center mb-2">
              <PhoneIcon className="h-5 w-5 mr-2 text-gray-400" />
              +91 70198 70120
            </p>
            <p className="flex items-center mb-2">
              <PhoneIcon className="h-5 w-5 mr-2 text-gray-400" />
              +91 96112 04080
            </p>
            <p className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-gray-400" />
              alphatinkererslab@nie.ac.in
            </p>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex gap-5 justify-start">
              <motion.a
                href="https://www.linkedin.com/company/alpha-tinkerers-lab-nie/"
                className="hover:text-white transition duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={30} className="text-gray-400" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          className="mt-12 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          © 2025 ALPHA Innovation & Tinkerers'. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaLightbulb } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/#home" },
    { name: "Team", to: "/team#team" },
    { name: "Departments", to: "/dept#dept" },
    { name: "Events", to: "/#events" },
    { name: "Contact", to: "/contact#contact" },
  ];

  return (
    <nav className="fixed w-full bg-black text-slate-50 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between  h-16">
          <div className="flex-shrink-0">
            <h1 className="flex gap-1 justify-center items-center text-2xl font-extrabold tracking-wide cursor-pointer hover:text-slate-100 transition duration-300">
              <FaLightbulb size={36} className="text-sky-400" /> Tinkerers
            </h1>
          </div>

          <div className="hidden md:flex space-x-20">
            {navItems.map((item) => (
              <HashLink
                key={item.name}
                smooth
                to={item.to}
                className="cursor-pointer text-xl lg:text-[1.3rem] font-medium hover:text-white transition duration-300"
              >
                {item.name}
              </HashLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-200 transition duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <IoCloseSharp size={30} className="text-slate-100" />
              ) : (
                <HiOutlineMenuAlt4 size={30} className="text-slate-100" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        className="md:hidden bg-black overflow-hidden transition-all duration-300"
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          {navItems.map((item) => (
            <HashLink
              key={item.name}
              smooth
              to={item.to}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="block text-lg font-semibold hover:text-slate-100 transition duration-300"
            >
              {item.name}
            </HashLink>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaSitemap,
  FaCalendarAlt,
  FaInfoCircle,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", to: "/#home", icon: <FaHome className="mr-2" /> },
    { name: "Team", to: "/team#team", icon: <FaUsers className="mr-2" /> },
    {
      name: "Departments",
      to: "/dept#dept",
      icon: <FaSitemap className="mr-2" />,
    },
    {
      name: "Events",
      to: "/#events",
      icon: <FaCalendarAlt className="mr-2" />,
    },
    {
      name: "About us",
      to: "/about#about",
      icon: <FaInfoCircle className="mr-2" />,
    },
  ];

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const containerVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.03,
        staggerDirection: 1,
      },
    },
  };

  return (
    <nav className="fixed w-full bg-black text-slate-50 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="flex gap-1 justify-center items-center text-2xl font-extrabold tracking-wide cursor-pointer hover:text-slate-100 transition duration-300">
              <HashLink
                smooth
                to="/#home"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/#home");
                }}
                className="flex items-center gap-1 justify-center"
              >
                <FaLightbulb size={36} className="text-sky-400" /> Tinkerers
              </HashLink>
            </h1>
          </div>

          <div className="hidden md:flex space-x-20 ">
            {navItems.map((item) => (
              <HashLink
                key={item.name}
                smooth
                to={item.to}
                className="cursor-pointer text-xl lg:text-[1.3rem] font-medium hover:text-slate-500 transition duration-300"
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
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoCloseSharp size={30} className="text-slate-100" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiOutlineMenuAlt4 size={30} className="text-slate-100" />
                </motion.div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={containerVariants}
        className="md:hidden bg-black overflow-hidden"
      >
        <div className="px-3  pt-4 pb-6 space-y-2">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <HashLink
                smooth
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="flex items-center text-xl font-semibold hover:text-sky-400 transition duration-300 py-2 px-3 rounded-md hover:bg-gray-800"
              >
                {item.icon}
                {item.name}
              </HashLink>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import {
  FaHome,
  FaUsers,
  FaBuilding,
  FaCalendarAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaLightbulb } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      to: "/#home",
      icon: <FaHome size={21} className="mr-1" />,
    },
    {
      name: "Team",
      to: "/team#team",
      icon: <FaUsers size={21} className="mr-1" />,
    },
    {
      name: "Departments",
      to: "/dept#dept",
      icon: <FaBuilding size={21} className="mr-1" />,
    },
    {
      name: "Events",
      to: "/#events",
      icon: <FaCalendarAlt size={21} className="mr-1" />,
    },
    {
      name: "About us",
      to: "/about#about",
      icon: <FaInfoCircle size={21} className="mr-1" />,
    },
  ];

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

          <div className="hidden md:flex space-x-20">
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
                <IoCloseSharp size={30} className="text-slate-100" />
              ) : (
                <HiOutlineMenuAlt4 size={30} className="text-slate-100" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <motion.div
        initial={{ opacity: 0, height: 0, y: -20 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
          y: isOpen ? 0 : -20,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="md:hidden bg-black overflow-hidden"
      >
        <div className="px-4 pt-4 pb-6 space-y-3">
          {navItems.map((item) => (
            <HashLink
              key={item.name}
              smooth
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-lg font-semibold hover:text-slate-100 hover:bg-sky-500 p-2 rounded-lg transition duration-300"
            >
              {item.icon} {item.name}
            </HashLink>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

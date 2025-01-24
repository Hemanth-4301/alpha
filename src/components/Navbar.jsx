import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi"; // New icon for menu
import { IoCloseSharp } from "react-icons/io5"; // New icon for close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "Team", to: "team" },
    { name: "Events", to: "events" },
    { name: "Vision", to: "vision" },
  ];

  return (
    <nav className="fixed w-full bg-black text-slate-300 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-extrabold tracking-wide cursor-pointer hover:text-slate-100 transition duration-300">
              MyBrand
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer text-xl lg:text-[1.3rem] font-medium hover:text-white transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md  text-slate-200  transition duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <IoCloseSharp size={28} className="text-slate-100" />
              ) : (
                <HiOutlineMenuAlt4 size={28} className="text-slate-100" />
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
        className={`md:hidden bg-black overflow-hidden transition-all duration-300`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-semibold hover:text-slate-100 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

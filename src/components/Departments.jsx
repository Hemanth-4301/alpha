import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import developement from "../assets/depts/development.jpeg";
import financial from "../assets/depts/financial.jpeg";
import project from "../assets/depts/project.jpeg";
import networking from "../assets/depts/networking.jpeg";
import facilities from "../assets/depts/facilities.jpeg";
import public1 from "../assets/depts/public1.jpeg";

// Import team member images from team.jsx
import i2 from "../assets/team_members/Suraj G Rao .png";
import i13 from "../assets/team_members/Inchara Hegde.jpg";
import i10 from "../assets/team_members/Anushree G.jpg";
import i14 from "../assets/team_members/Nagashree S.jpg";
import i16 from "../assets/team_members/Ganesha M.jpg";
import i9 from "../assets/team_members/Thanusha A Patel .jpg";

const departments = [
  {
    name: "Department of Project Development & Research",
    description:
      "The Department of Project Development & Research is dedicated to fostering a culture of innovation through hands-on project-based learning and research.",
    image: project,
    headImage: i2, // Suraj G Rao
    head: "Suraj G Rao",
  },
  {
    name: "Department of Financial Resources Management",
    description:
      "The Department of Financial Resources Management ensures efficient allocation and utilization of funds to support innovation and creativity.",
    image: financial,
    headImage: i13, // Inchara G Hegde
    head: "Inchara G Hegde",
  },
  {
    name: "Program Development and Coordination department",
    description:
      "Responsible for organizing events, workshops, and hands-on training sessions across technical and hardware domains.",
    image: developement,
    headImage: i10, // Anushree G
    head: "Anushree G",
  },
  {
    name: "Department of Networking and Outreach Relations",
    description:
      "Dedicated to building strong connections with industry leaders and academic institutions, fostering collaboration and innovation.",
    image: networking,
    headImage: i14, // Nagashree S
    head: "Nagashree S",
  },
  {
    name: "Department of Facilities & Resource Management",
    description:
      "Ensures efficient operation of the lab through effective resource management and infrastructure maintenance.",
    image: facilities,
    headImage: i16, // Ganesha M (Note: Team.jsx shows Darshan K S as head but image not available)
    head: "Darshan K S",
  },
  {
    name: "The Department of Public Affairs & Strategic Management",
    description:
      "Shapes the lab's public image, fosters collaborations, and ensures effective communication.",
    image: public1,
    headImage: i9, // Thanusha A Patel
    head: "Thanusha A Patel",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const hoverVariants = {
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
  },
};

const Departments = () => {
  const navigate = useNavigate();

  return (
    <section id="dept" className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-16 text-white"
        >
          Our Departments
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
        >
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              variants={hoverVariants}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-48 object-cover brightness-75 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <img
                    src={dept.headImage}
                    alt={dept.head}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div className="ml-3">
                    <p className="text-sm text-gray-300">{dept.head}</p>
                    <p className="text-xs text-gray-400">Department Head</p>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {dept.name}
                </h2>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    navigate(`/dept/${encodeURIComponent(dept.name)}`)
                  }
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>More info</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Departments;

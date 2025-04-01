import { useState, memo, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaTimes } from "react-icons/fa";

// Image imports (replace with your actual paths)
import projectImage from "../assets/depts/project.jpeg";
import financialImage from "../assets/depts/financial.jpeg";
import developmentImage from "../assets/depts/development.jpeg";
import networkingImage from "../assets/depts/networking.jpeg";
import facilitiesImage from "../assets/depts/facilities.jpeg";
import publicImage from "../assets/depts/public1.jpeg";

import surajImage from "../assets/team_members/Suraj G Rao .png";
import incharaImage from "../assets/team_members/Inchara Hegde.jpg";
import anushreeImage from "../assets/team_members/Anushree G.jpg";
import nagashreeImage from "../assets/team_members/Nagashree S.jpg";
import ganeshaImage from "../assets/team_members/Ganesha M.jpg";
import thanushaImage from "../assets/team_members/Thanusha A Patel .jpg";

const departments = [
  {
    name: "Department of Project Development & Research",
    description:
      "The Department of Project Development & Research is dedicated to fostering a culture of innovation through hands-on project-based learning and research. We provide students with opportunities to explore, design, and develop impactful solutions by working on real-world challenges. Our goal is to bridge the gap between theoretical knowledge and practical application, encouraging collaboration, creativity, and technical excellence within the lab.",
    image: projectImage,
    headImage: surajImage,
    head: "Suraj G Rao",
    linkedin: "https://www.linkedin.com/in/suraj-g-rao/",
  },
  {
    name: "Department of Public Affairs & Strategic Management",
    description:
      "The Department of Public Affairs & Strategic Management at ALPHA Innovation and Tinkerers' Lab is responsible for shaping the lab's public image, fostering collaborations, and ensuring effective communication. We manage media relations, social media outreach, and event promotions while building partnerships that enhance the lab's visibility and impact. Through strategic planning and engagement, we create opportunities for knowledge sharing, industry connections, and institutional growth. Our goal is to position ALPHA Innovation and Tinkerers' Lab as a hub for creativity, technology, and excellence, empowering students and innovators to bring their ideas to life.",
    image: publicImage,
    headImage: thanushaImage,
    head: "Thanusha A Patel",
    linkedin: "https://www.linkedin.com/in/thanusha-a-patel-b4b3a2262/",
  },
  {
    name: "Department of Financial Resources Management",
    description:
      "The Department of Financial Resources Management at Tinkerers' Lab ensures efficient allocation and utilization of funds to support innovation and creativity. We strategize budgeting, secure sponsorships, and optimize financial planning to empower students in bringing their ideas to life. Our goal is to create a sustainable ecosystem for technological exploration and groundbreaking projects.",
    image: financialImage,
    headImage: incharaImage,
    head: "Inchara G Hegde",
    linkedin: "https://www.linkedin.com/in/inchara-g-hegde/",
  },
  {
    name: "Department of Program Development and Coordination",
    description:
      "The Program Development and Coordination department at ALPHA Tinkerers' Lab is responsible for organizing events, workshops, and hands-on training sessions across both technical and hardware domains. With a focus on software, AI/ML, electromechanical systems, and innovation, we provide a platform for students to learn, experiment, and collaborate. Our goal is to create an engaging learning environment that nurtures creativity, practical problem-solving skills, and interdisciplinary innovation.",
    image: developmentImage,
    headImage: anushreeImage,
    head: "Anushree G",
    linkedin: "https://www.linkedin.com/in/anushree-g-72974a2b1/",
  },
  {
    name: "Department of Networking and Outreach Relations",
    description:
      "The Department of Networking and Outreach Relations at Tinkerers' Lab is dedicated to building strong connections with industry leaders, academic institutions, and the broader community, fostering collaboration and driving innovation. We facilitate partnerships, sponsorships, and knowledge-sharing opportunities through guest lectures, workshops, networking events, and outreach initiatives. By bridging the gap between aspiring innovators and experts, we create a thriving ecosystem where ideas transform into impactful solutions, reinforcing Tinkerers' Lab as a center for creativity and technical excellence.",
    image: networkingImage,
    headImage: nagashreeImage,
    head: "Nagashree S",
    linkedin: "https://www.linkedin.com/in/nagashrees16/",
  },
  {
    name: "Department of Facilities & Resource Management",
    description:
      "Ensures the efficient operation of the lab through effective resource management, infrastructure maintenance, and adherence to safety protocols. Focuses on maintaining equipment functionality, optimizing lab operations, and providing an organized environment to support research and project development. The department plays a crucial role in minimizing disruptions, improving operational efficiency, and creating a reliable environment that fosters research and innovation.",
    image: facilitiesImage,
    headImage: ganeshaImage,
    head: "Darshan K S",
    linkedin: "https://www.linkedin.com/in/darshan-k-s-898670265/",
  },
];

const ImageModal = ({ isOpen, onClose, image, name }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close modal"
            >
              <FaTimes className="w-8 h-8 md:w-10 md:h-10" />
            </motion.button>

            <div className="flex flex-col items-center">
              <motion.img
                src={image}
                alt={name}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              />
              {name && (
                <motion.p
                  className="mt-4 text-xl md:text-2xl font-medium text-white text-center"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {name}
                </motion.p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DepartmentCard = memo(
  ({ dept, isExpanded, onClick, onHeadImageClick }) => {
    return (
      <motion.div
        layout
        className={`bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 ${
          isExpanded ? "col-span-full" : ""
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, type: "spring" }}
        whileHover={{ y: -5 }}
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className={`${isExpanded ? "md:w-1/3" : "w-full"} relative`}>
            <Suspense
              fallback={
                <div className="animate-pulse bg-gray-800 h-48 md:h-full" />
              }
            >
              <motion.div
                className="relative h-48 md:h-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </motion.div>
            </Suspense>
          </div>

          <div
            className={`p-6 ${
              isExpanded ? "md:w-2/3" : "w-full"
            } flex flex-col`}
          >
            <div className="flex items-center mb-4">
              <Suspense
                fallback={
                  <div className="animate-pulse bg-gray-800 w-12 h-12 rounded-full" />
                }
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onHeadImageClick(dept.headImage, dept.head)}
                  className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-300 hover:border-white transition-all duration-300 cursor-pointer"
                >
                  <motion.img
                    src={dept.headImage}
                    alt={dept.head}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </Suspense>
              <div className="ml-4">
                <div className="flex items-center gap-2">
                  <motion.p
                    className="text-lg text-gray-300 font-medium"
                    whileHover={{ x: 2 }}
                  >
                    {dept.head}
                  </motion.p>
                  {dept.linkedin && (
                    <motion.a
                      href={dept.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors duration-300"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
                <motion.p
                  className="text-xs text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Department Head
                </motion.p>
              </div>
            </div>

            <motion.h2
              className="text-xl font-bold text-white mb-3 tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {dept.name}
            </motion.h2>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <motion.p
                    className="text-gray-400 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {dept.description}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-auto pt-6">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
                whileTap={{ scale: 0.98 }}
                onClick={onClick}
                className="w-full px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm font-medium"
              >
                <span>{isExpanded ? "Show Less" : "More Info"}</span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

function Departments() {
  const [expandedDept, setExpandedDept] = useState(null);
  const [modalState, setModalState] = useState({
    isOpen: false,
    image: null,
    name: null,
  });

  const handleDeptClick = (index) => {
    setExpandedDept(expandedDept === index ? null : index);
  };

  const openImageModal = (image, name) => {
    setModalState({
      isOpen: true,
      image,
      name,
    });
  };

  const closeImageModal = () => {
    setModalState({
      isOpen: false,
      image: null,
      name: null,
    });
  };

  return (
    <section id="dept" className="min-h-screen bg-black overflow-hidden">
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={closeImageModal}
        image={modalState.image}
        name={modalState.name}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-white tracking-tight"
        >
          Our Departments
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {departments.map((dept, index) => (
            <DepartmentCard
              key={index}
              dept={dept}
              isExpanded={expandedDept === index}
              onClick={() => handleDeptClick(index)}
              onHeadImageClick={openImageModal}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Departments;

import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import developement from "../assets/depts/development.jpeg";
import financial from "../assets/depts/financial.jpeg";
import project from "../assets/depts/project.jpeg";
import networking from "../assets/depts/networking.jpeg";
import facilities from "../assets/depts/facilities.jpeg";
import public1 from "../assets/depts/public1.jpeg";
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
      "The Department of Project Development & Research is dedicated to fostering a culture of innovation through hands-on project-based learning and research. We provide students with opportunities to explore, design, and develop impactful solutions by working on real-world challenges. Our goal is to bridge the gap between theoretical knowledge and practical application, encouraging collaboration, creativity, and technical excellence within the lab.",
    image: project,
    headImage: i2,
    head: "Suraj G Rao",
  },
  {
    name: "Department of Financial Resources Management",
    description:
      "The Department of Financial Resources Management at Tinkerers' Lab ensures efficient allocation and utilization of funds to support innovation and creativity. We strategize budgeting, secure sponsorships, and optimize financial planning to empower students in bringing their ideas to life. Our goal is to create a sustainable ecosystem for technological exploration and groundbreaking projects.",
    image: financial,
    headImage: i13,
    head: "Inchara G Hegde",
  },
  {
    name: "Program Development and Coordination department",
    description:
      "The Program Development and Coordination department at ALPHA Tinkerers' Lab is responsible for organizing events, workshops, and hands-on training sessions across both technical and hardware domains. With a focus on software, AI/ML, electromechanical systems, and innovation, we provide a platform for students to learn, experiment, and collaborate. Our goal is to create an engaging learning environment that nurtures creativity, practical problem-solving skills, and interdisciplinary innovation.",
    image: developement,
    headImage: i10,
    head: "Anushree G",
  },
  {
    name: "Department of Networking and Outreach Relations",
    description:
      "The Department of Networking and Outreach Relations at Tinkerers' Lab is dedicated to building strong connections with industry leaders, academic institutions, and the broader community, fostering collaboration and driving innovation. We facilitate partnerships, sponsorships, and knowledge-sharing opportunities through guest lectures, workshops, networking events, and outreach initiatives.",
    image: networking,
    headImage: i14,
    head: "Nagashree S",
  },
  {
    name: "Department of Facilities & Resource Management",
    description:
      "Ensures the efficient operation of the lab through effective resource management, infrastructure maintenance, and adherence to safety protocols. Focuses on maintaining equipment functionality, optimizing lab operations, and providing an organized environment to support research and project development. The department plays a crucial role in minimizing disruptions, improving operational efficiency, and creating a reliable environment that fosters research and innovation.",
    image: facilities,
    headImage: i16,
    head: "Darshan K S",
  },
  {
    name: "The Department of Public Affairs & Strategic Management",
    description:
      "The Department of Public Affairs & Strategic Management at ALPHA Innovation and Tinkerers' Lab is responsible for shaping the lab's public image, fostering collaborations, and ensuring effective communication. We manage media relations, social media outreach, and event promotions while building partnerships that enhance the lab's visibility and impact. Through strategic planning and engagement, we create opportunities for knowledge sharing, industry connections, and institutional growth.",
    image: public1,
    headImage: i9,
    head: "Thanusha A Patel",
  },
];

const DepartmentDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const department = departments.find(
    (dept) => dept.name === decodeURIComponent(name)
  );

  if (!department) {
    return <div>Department not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <button
          onClick={() => navigate("/dept#dept")}
          className="mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>Back to Departments</span>
        </button>

        <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative h-64 sm:h-80">
            <img
              src={department.image}
              alt={department.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <h1 className="absolute bottom-6 left-6 text-2xl sm:text-4xl font-bold text-white">
              {department.name}
            </h1>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-center mb-8 bg-gray-700 p-4 rounded-xl">
              <img
                src={department.headImage}
                alt={department.head}
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover border-4 border-blue-500"
              />
              <div className="ml-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {department.head}
                </h3>
                <p className="text-gray-300">Department Head</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                About the Department
              </h2>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                {department.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DepartmentDetails;

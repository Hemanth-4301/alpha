import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaMoneyBillWave,
  FaChalkboardTeacher,
  FaNetworkWired,
  FaTools,
  FaBullhorn,
} from "react-icons/fa";

const departments = [
  {
    name: "Department of Project Development & Research",
    description:
      " The Department of Project Development & Research is dedicated to fostering a culture of innovation through hands-on project-based learning and research. We provide students with opportunities to explore, design, and develop impactful solutions by working on real-world challenges. Our goal is to bridge the gap between theoretical knowledge and practical application, encouraging collaboration, creativity, and technical excellence within the lab.",
    icon: <FaProjectDiagram className="text-white text-4xl" />,
  },
  {
    name: "Department of Financial Resources Management",
    description:
      "The Department of Financial Resources Management at Tinkerers' Lab ensures efficient allocation and utilization of funds to support innovation and creativity. We strategize budgeting, secure sponsorships, and optimize financial planning to empower students in bringing their ideas to life. Our goal is to create a sustainable ecosystem for technological exploration and groundbreaking projects.",
    icon: <FaMoneyBillWave className="text-white text-4xl" />,
  },
  {
    name: "Program Development and Coordination department",
    description:
      "The Program Development and Coordination department at ALPHA Tinkerers' Lab is responsible for organizing events, workshops, and hands-on training sessions across both technical and hardware domains. With a focus on software, AI/ML, electromechanical systems, and innovation, we provide a platform for students to learn, experiment, and collaborate. Our goal is to create an engaging learning environment that nurtures creativity, practical problem-solving skills, and interdisciplinary innovation.",
    icon: <FaChalkboardTeacher className="text-white text-4xl" />,
  },
  {
    name: "Department of Networking and Outreach Relations",
    description:
      "The Department of Networking and Outreach Relations at Tinkerers' Lab is dedicated to building strong connections with industry leaders, academic institutions, and the broader community, fostering collaboration and driving innovation. We facilitate partnerships, sponsorships, and knowledge-sharing opportunities through guest lectures, workshops, networking events, and outreach initiatives. By bridging the gap between aspiring innovators and experts, we create a thriving ecosystem where ideas transform into impactful solutions, reinforcing Tinkerers' Lab as a center for creativity and technical excellence.",
    icon: <FaNetworkWired className="text-white text-4xl" />,
  },
  {
    name: "Department of Facilities & Resource Management",
    description:
      "Ensures the efficient operation of the lab through effective resource management, infrastructure maintenance, and adherence to safety protocols. Focuses on maintaining equipment functionality, optimizing lab operations, and providing an organized environment to support research and project development. The department plays a crucial role in minimizing disruptions, improving operational efficiency, and creating a reliable environment that fosters research and innovation.",
    icon: <FaTools className="text-white text-4xl" />,
  },
  {
    name: "The Department of Public Affairs & Strategic Management",
    description:
      "The Department of Public Affairs & Strategic Management at ALPHA Innovation and Tinkerers' Lab is responsible for shaping the lab’s public image, fostering collaborations, and ensuring effective communication. We manage media relations, social media outreach, and event promotions while building partnerships that enhance the lab’s visibility and impact. Through strategic planning and engagement, we create opportunities for knowledge sharing, industry connections, and institutional growth. Our goal is to position ALPHA Innovation and Tinkerers' Lab as a hub for creativity, technology, and excellence, empowering students and innovators to bring their ideas to life.",
    icon: <FaBullhorn className="text-white text-4xl" />,
  },
];

const Departments = () => {
  return (
    <section id="dept">
      <div className="min-h-screen bg-black text-white py-24 md:py-32 px-5 md:px-20">
        <h1 className="text-4xl font-bold text-center mb-10">
          Our Departments
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ">
          {departments.map((dept, index) => (
            <motion.div
              initial={{ y: -20 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              key={index}
              className="bg-balck border border-slate-400 hover:border-slate-100 p-6 rounded-xl shadow-lg hover:shadow-2xl flex flex-col items-center text-center"
            >
              <motion.div
                initial={{ rotate: 180 }}
                whileInView={{ rotate: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {dept.icon}
              </motion.div>
              <h2 className="text-xl font-semibold mb-3 text-white mt-3">
                {dept.name}
              </h2>
              <p className="text-slate-300 text-left mt-4">
                {dept.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;

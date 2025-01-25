import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaBullseye,
  FaChartLine,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const visionCards = [
  {
    title: "Our Vision",
    description:
      "To become the leading platform for innovation and growth in the tech industry",
    icon: FaLightbulb,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Our Mission",
    description:
      "Empowering individuals and organizations to achieve their full potential through technology",
    icon: FaBullseye,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Our Goals",
    description:
      "Setting new standards of excellence and innovation in everything we do",
    icon: FaChartLine,
    color: "from-green-400 to-green-600",
  },
  {
    title: "Our Values",
    description:
      "Fostering integrity, innovation, and inclusivity in all our endeavors",
    icon: FaUsers,
    color: "from-red-400 to-red-600",
  },
];

const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Vision & Mission
          </h2>
          <p className="text-gray-400 text-lg">
            Guiding principles that drive our success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-primary-darkGray rounded-2xl p-8 h-full shadow-xl transition-transform duration-300 group-hover:-translate-y-2">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110`}
                >
                  <card.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-400 mb-6">{card.description}</p>
                <button className="flex items-center text-primary-lightBlue group-hover:text-white transition-colors">
                  Learn More{" "}
                  <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;

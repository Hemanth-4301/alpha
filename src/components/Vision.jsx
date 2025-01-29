import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

const visionCards = [
  {
    title: "Our Vision",
    description:
      "To establish Alpha Tinkerers' Lab as a hub for innovation, creativity, and technological advancement, fostering a community of problem solvers and thinkers.",
    icon: FaEye,
  },
  {
    title: "Our Mission",
    description:
      "To empower students and professionals with cutting-edge technological skills, hands-on experience, and mentorship, driving innovation and impactful solutions.",
    icon: FaBullseye,
  },
];

const Vision = () => {
  return (
    <section id="vision" className="py-20 md:py-8 bg-primary-black">
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
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {visionCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="group"
            >
              <div className="bg-primary-darkGray border mx-3 flex flex-col justify-center items-center text-center border-slate-400 rounded-2xl p-4 h-full shadow-xl transition-transform duration-300 group-hover:-translate-y-2">
                <div
                  className={
                    "w-10 h-10 rounded-2xl bg-gradient-to-r flex items-center justify-center mb-2 transform transition-transform group-hover:scale-110"
                  }
                >
                  <card.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-400 mb-6">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;

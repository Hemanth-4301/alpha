import { motion } from "framer-motion";
import { FaLightbulb, FaRocket } from "react-icons/fa";

const sections = [
  {
    title: "Our Mission",
    description:
      "Empowering students and researchers by providing an innovation-driven workspace to build, prototype, and solve real-world challenges.",
    icon: FaLightbulb,
  },
  {
    title: "Our Vision",
    description:
      "To transform ALPHA Tinkerers' Lab into a globally recognized innovation hub, where students and professionals collaborate to create sustainable and tech-driven solutions for a better future.",
    icon: FaRocket,
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
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              className="group"
            >
              <div className="bg-black border border-slate-600 flex flex-col justify-center items-center text-center rounded-2xl p-6 h-full shadow-xl transition-transform duration-300 group-hover:-translate-y-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110">
                  <section.icon size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-300">{section.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;

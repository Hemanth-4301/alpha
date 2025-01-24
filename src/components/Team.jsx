import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    linkedin: '#',
    twitter: '#',
    github: '#',
    email: '#'
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    linkedin: '#',
    twitter: '#',
    github: '#',
    email: '#'
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    linkedin: '#',
    twitter: '#',
    github: '#',
    email: '#'
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-primary-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-gray-400 text-lg">Meet the innovators behind our success</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-primary-darkGray rounded-2xl p-8 shadow-xl transition-transform duration-300 group-hover:-translate-y-2">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto object-cover ring-4 ring-primary-lightBlue/30"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-lightBlue/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-primary-lightBlue mb-6">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.linkedin} className="text-gray-400 hover:text-primary-lightBlue transition-colors">
                    <FaLinkedin size={22} />
                  </a>
                  <a href={member.twitter} className="text-gray-400 hover:text-primary-lightBlue transition-colors">
                    <FaTwitter size={22} />
                  </a>
                  <a href={member.github} className="text-gray-400 hover:text-primary-lightBlue transition-colors">
                    <FaGithub size={22} />
                  </a>
                  <a href={member.email} className="text-gray-400 hover:text-primary-lightBlue transition-colors">
                    <FaEnvelope size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
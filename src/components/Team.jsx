import { motion } from "framer-motion";
import narender_sir from "../assets/team_members/narender_sir.jpg";
import balaji_sir from "../assets/team_members/balaji_sir.jpg";
import i1 from "../assets/team_members/Niroop NR.jpg";
import i2 from "../assets/team_members/Suraj G Rao .png";
import i3 from "../assets/team_members/Karthikeya S.jpg";
import i4 from "../assets/team_members/Hemanth Kumar.jpg";
import i5 from "../assets/team_members/Hanok John .jpg";
import i6 from "../assets/team_members/Kotha Jyothi Venkata Sai sankar.jpg";
import i7 from "../assets/team_members/Sanjeev .jpg";
import i8 from "../assets/team_members/Abhishek.jpg";
import i9 from "../assets/team_members/Thanusha A Patel .jpg";
import i10 from "../assets/team_members/Anushree G.jpg";
import i11 from "../assets/team_members/Akshay.jpg";

const teamMembers = [
  {
    name: "Niroop NR",
    role: "Manager",
    image: i1,
  },
  {
    name: "Suraj G Rao",
    role: "Head, Dept of Project Development & Research",
    image: i2,
  },
  {
    name: "Thanusha A Patel",
    role: "Head, Dept of Public Affairs & Strategic Engagement",
    image: i9,
  },
  {
    name: "Anushree G",
    role: "Head, Dept of Program Development & Co-ordination",
    image: i10,
  },
  {
    name: "Karthikeya S",
    role: "Student Council Member",
    image: i3,
  },
  {
    name: "Hemanth ",
    role: "Student Council Member",
    image: i4,
  },
  {
    name: "Hanok John",
    role: "Student Council Member",
    image: i5,
  },
  {
    name: "Kotha Jyothi Venkata Sai sankar",
    role: "Student Council Member",
    image: i6,
  },
  {
    name: "Sanjeev",
    role: "Student Council Member",
    image: i7,
  },
  {
    name: "Abhishek",
    role: "Student Council Member",
    image: i8,
  },

  {
    name: "Akshay",
    role: "Student Council Member",
    image: i11,
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[100vp]">
        <div className="my-10 mb-20">
          <h2 className="text-4xl font-bold text-white mb-4 text-center ">
            Our Mentors
          </h2>

          <div className="flex  flex-wrap justify-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -20 }}
              transition={{
                duration: 0.1,
                delay: 0.1,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="  text-center  rounded-2xl p-8 pb-0 shadow-xl">
                <div className="relative mb-6">
                  <img
                    src={narender_sir}
                    alt={"mentor-1"}
                    className="w-40 h-40 rounded-full mx-auto  object-cover ring-4 ring-primary-lightBlue/30"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-300/30 to-transparent "></div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Dr. Narender M
                </h3>
                <p className="text-primary-lightBlue mb-6">
                  Associate Professor,Dept of CSE
                </p>
              </div>
            </motion.div>{" "}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -20 }}
              transition={{
                duration: 0.1,
                delay: 0.2,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="  text-center  rounded-2xl p-8 pb-0 shadow-xl">
                <div className="relative mb-6">
                  <img
                    src={balaji_sir}
                    alt={"mentor-2"}
                    className="w-40 h-40 rounded-full mx-auto  object-cover ring-4 ring-primary-lightBlue/30"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-lightBlue/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Balaji V
                </h3>
                <p className="text-primary-lightBlue mb-6">
                  Assistant Professor, Dept of CSE
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center my-10 md:mb-16 "
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-gray-400 text-lg">
            Get to know the minds behind our vision. They think, build, and
            grow. Their passion drives us forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -20 }}
              transition={{
                duration: 0.1,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="  text-center  rounded-2xl p-8 pb-0 shadow-xl">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto  object-cover ring-4 ring-primary-lightBlue/30"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-lightBlue/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-lightBlue mb-6">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

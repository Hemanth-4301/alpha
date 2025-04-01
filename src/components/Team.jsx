"use client";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import narender_sir from "../assets/team_members/narender_sir.jpg";
import balaji_sir from "../assets/team_members/balaji_sir.jpg";
import i1 from "../assets/team_members/Niroop NR.jpg";
import i2 from "../assets/team_members/Suraj G Rao .png";
import i3 from "../assets/team_members/Karthikeya S.jpg";
import i4 from "../assets/team_members/Hemanth Kumar.jpg";
import i5 from "../assets/team_members/Hanok John .jpg";
import i7 from "../assets/team_members/Sanjeev .jpg";
import i8 from "../assets/team_members/Abhishek.jpg";
import i9 from "../assets/team_members/Thanusha A Patel .jpg";
import i10 from "../assets/team_members/Anushree G.jpg";
import i11 from "../assets/team_members/Akshay.jpg";
import i12 from "../assets/team_members/CHANDAN G.jpg";
import i13 from "../assets/team_members/Inchara Hegde.jpg";
import i14 from "../assets/team_members/Nagashree S.jpg";
import i15 from "../assets/team_members/Gagan P.jpg";
import i16 from "../assets/team_members/Ganesha M.jpg";

const teamMembers = [
  {
    name: "Niroop NR",
    role: "ALPHA Innovation Tinkerer's Lab Manager",
    image: i1,
    linkedin: "https://www.linkedin.com/in/niroop-nr-nara/",
  },
  {
    name: "Suraj G Rao",
    role: "Head, Dept of Project Development & Research",
    image: i2,
    linkedin: "https://www.linkedin.com/in/suraj-g-rao/",
  },
  {
    name: "Thanusha A Patel",
    role: "Head, Dept of Public Affairs & Strategic Engagement",
    image: i9,
    linkedin: "https://www.linkedin.com/in/thanusha-a-patel-b4b3a2262/",
  },
  {
    name: "Inchara G Hegde",
    role: "Head, Dept of Financial Management & Resources",
    image: i13,
    linkedin: "https://www.linkedin.com/in/inchara-g-hegde/",
  },
  {
    name: "Nagashree S",
    role: "Head, Dept of Naetworking & Outreach Relations",
    image: i14,
    linkedin: "https://www.linkedin.com/in/nagashrees16/",
  },
  {
    name: "Anushree G",
    role: "Head, Dept of Program Development & Co-ordination",
    image: i10,
    linkedin: "https://www.linkedin.com/in/anushree-g-72974a2b1/",
  },
  {
    name: "Karthikeya S",
    role: "Student Council Member",
    image: i3,
    linkedin: "https://www.linkedin.com/in/karthikeyas1/",
  },
  {
    name: "Hemanth",
    role: "Student Council Member",
    image: i4,
    linkedin:
      "https://www.linkedin.com/in/hemanth-kumar-74b939215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Hanok John",
    role: "Student Council Member",
    image: i5,
    linkedin: "https://www.linkedin.com/in/hanok-john-bennet-896a03269/",
  },
  {
    name: "Sanjeev",
    role: "Student Council Member",
    image: i7,
    linkedin: "https://www.linkedin.com/in/sai-sanjeev-m-a7a3a0264/",
  },
  {
    name: "Abhishek",
    role: "Student Council Member",
    image: i8,
    linkedin: "https://www.linkedin.com/in/abhishek-goud-909451259/",
  },
  {
    name: "Akshay",
    role: "Student Council Member",
    image: i11,
    linkedin: "https://www.linkedin.com/in/akshay-sawalagi-71b0741b6/",
  },
  {
    name: "Chandan G",
    role: "Student Council Member",
    image: i12,
    linkedin: "https://www.linkedin.com/in/chandang2004/",
  },
  {
    name: "Gagan P",
    role: "Student Council Member",
    image: i15,
    linkedin:
      "https://www.linkedin.com/in/gagan-puttanna-727698308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Ganesha M",
    role: "Student Council Member",
    image: i16,
    linkedin:
      "https://www.linkedin.com/in/ganesha-mohan-aa9615244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const Team = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#f5f5f5", // Light blue color matching your theme
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 5,
          opacity_min: 0.5,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 80,
        color: "#4299e1",
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5,
          },
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <section id="team" className="py-20 bg-black relative">
      {/* Particles background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
        />
      </div>

      {/* Content with higher z-index to appear above particles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[100vp] relative z-10">
        <div className="my-10 mb-20">
          <h2 className="text-4xl font-bold text-white mb-4 text-center ">
            Professor In Charge
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
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
            ></motion.div>{" "}
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
              <div className="text-center rounded-2xl p-8 pb-0 shadow-xl">
                <div className="relative mb-6">
                  <img
                    src={balaji_sir || "/placeholder.svg"}
                    alt={"mentor-2"}
                    className="w-40 h-40 rounded-full mx-auto object-cover ring-4 ring-primary-lightBlue/30"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-lightBlue/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2 flex justify-center items-center gap-2">
                  Balaji V
                  <div>
                    <a
                      href="https://www.linkedin.com/in/balaji-vijaykumar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-slate-400 transition duration-300"
                    >
                      <FaLinkedin className="w-6 h-6 mx-auto" />
                    </a>
                  </div>
                </h3>
                <p className="text-primary-lightBlue mb-6">
                  Assistant Professor , Dept of CSE-AIML & Head, ALPHA
                  Innovation & Tinkerers' Lab
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
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-center rounded-2xl p-8 pb-0 shadow-xl">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto object-cover ring-4 ring-primary-lightBlue/30"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-lightBlue/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2 flex justify-center items-center gap-2">
                  {member.name}
                  <div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-slate-400 transition duration-300"
                    >
                      <FaLinkedin className="w-6 h-6 mx-auto text-white" />
                    </a>
                  </div>
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

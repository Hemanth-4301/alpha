import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

const events = [
  {
    date: "March 2024",
    title: "Annual Tech Conference",
    description: "Join us for our biggest tech event of the year",
    location: "New York City",
    attendees: "500+",
  },
  {
    date: "April 2024",
    title: "Developer Workshop Series",
    description: "Learn from industry experts in our intensive workshop series",
    location: "San Francisco",
    attendees: "200+",
  },
  {
    date: "May 2024",
    title: "Global Networking Summit",
    description: "Connect with professionals from around the world",
    location: "London",
    attendees: "300+",
  },
];

const Events = () => {
  return (
    <section id="events" className="py-20 bg-primary-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-400 text-lg">
            Don't miss out on these exciting opportunities
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-lightBlue/30"></div>

          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex items-center justify-between mb-12 ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-5/12"></div>
              <div className="w-2/12 flex justify-center">
                <div className="w-10 h-10 bg-primary-lightBlue rounded-full flex items-center justify-center shadow-lg shadow-primary-lightBlue/30">
                  <FaCalendarAlt className="text-white" />
                </div>
              </div>
              <div className="w-5/12">
                <div className="bg-primary-darkGray p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-2 text-primary-lightBlue">
                      <FaCalendarAlt />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2 text-primary-lightBlue">
                      <FaMapMarkerAlt />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-2 text-primary-lightBlue">
                      <FaUsers />
                      {event.attendees}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;

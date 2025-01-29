import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

const events = [
  {
    date: "will be announced soon",
    title: "Annual Tech Conference",
    description: "Join us for our biggest tech event of the year",
    location: "NIE (North)",
    attendees: "100+",
  },
  {
    date: "will be announced soon",
    title: "Developer Workshop Series",
    description: "Learn from industry experts in our intensive workshop series",
    location: "NIE (North)",
    attendees: "100+",
  },
  {
    date: "will be announced soon",
    title: "Global Networking Summit",
    description: "Connect with professionals from around the world",
    location: "NIE (North)",
    attendees: "100+",
  },
];

const Events = () => {
  return (
    <section
      id="events"
      className="py-2 md:py-14 bg-primary-black overflow-hidden "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Don't miss out on these exciting opportunities
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 sm:w-1 w-0.5 bg-primary-lightBlue/30 h-full"></div>

          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 90 }}
              className={`flex flex-col sm:flex-row items-center sm:items-stretch justify-between mb-12 sm:mb-16 ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <div className="sm:w-5/12"></div>
              <div className="w-full sm:w-2/12 flex justify-center mb-6 sm:mb-0 relative">
                {index < events.length - 1 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 h-6 sm:hidden w-0.5 bg-primary-lightBlue/30"></div>
                )}
                <div className="w-10 h-10 bg-primary-lightBlue rounded-full flex items-center justify-center shadow-lg shadow-primary-lightBlue/30">
                  <FaCalendarAlt className="text-white" />
                </div>
              </div>
              <div className="w-full sm:w-5/12 z-10">
                <div className="bg-black border border-slate-700 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl  hover:border-slate-400 transition-shadow duration-300 ">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-4">
                    {event.description}
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 text-sm">
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

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white ">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 h-[100vh]">
        <h2 className="text-4xl font-bold my-10 text-center text-white">
          Get in Touch
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="lg:w-2/3 w-full bg-gray-800 p-10 rounded-2xl shadow-lg border-2 border-slate-600">
            <form className="flex flex-col gap-6">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full bg-gray-700 text-white p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-700 text-white p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type your message"
                  className="w-full bg-gray-700 text-white p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg font-medium transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

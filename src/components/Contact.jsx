import { motion } from "framer-motion";
import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatusMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatusMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-black text-white overflow-hidden"
      initial={{ y: -100, scale: 0.8 }}
      whileInView={{ y: 0, scale: 1 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-4xl font-bold my-10 text-center text-white">
          Get in Touch
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="lg:w-2/3 w-full p-8 rounded-2xl shadow-lg border-2 border-slate-600">
            <form className="flex flex-col gap-6" onSubmit={sendEmail}>
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
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md text-lg font-medium transition duration-200 flex items-center justify-center gap-2"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    ></motion.div>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
              {statusMessage && (
                <p className="text-center mt-2 text-sm text-gray-300">
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;

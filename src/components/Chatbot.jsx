import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including consulting, development, and training.",
  },
  {
    question: "How can I join your team?",
    answer:
      "Visit our lab in the college and submit your application for open positions.",
  },
  {
    question: "Where are you located?",
    answer: "The lab is located inside library building at NIE (North Campus), Mysuru, Karnataka, India.",
  },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleQuestionClick = (faq) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: faq.question },
      { type: "bot", text: faq.answer },
    ]);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: inputMessage },
      {
        type: "bot",
        text: "Thank you for your message. Our team will get back to you soon!",
      },
    ]);
    setInputMessage("");
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-4 right-3 bg-black text-white p-4 rounded-full shadow-lg hover:shadow-2xl z-50 border-2 border-slate-600"
        onClick={() => setIsOpen(true)}
      >
        <FaComments size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
            }}
            className="fixed bottom-0  right-0  w-full sm:w-96 md:w-[448px] h-[90vh] sm:h-[600px]  rounded-lg sm:rounded-lg shadow-2xl overflow-hidden  flex flex-col p-5  z-50"
          >
            <div className="bg-slate-800 text-white p-4 flex justify-between items-center  rounded-t-xl ">
              <h3 className="font-semibold text-lg">
                Frequently Asked Questions
              </h3>
              <button
                className="text-white hover:text-gray-300 transition"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-4 bg-gray-100">
              {messages.length === 0 ? (
                <p className="text-gray-600 text-center mt-10">
                  No messages yet. Ask a question below!
                </p>
              ) : (
                messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`mb-4 ${
                      message.type === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <span
                      className={`inline-block p-3 rounded-lg text-sm max-w-[80%] ${
                        message.type === "user"
                          ? "bg-black text-white"
                          : "bg-white text-black border border-gray-300"
                      }`}
                    >
                      {message.text}
                    </span>
                  </motion.div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
              <p className="text-gray-600 mb-2 font-medium">Questions:</p>
              <div className="space-y-2">
                {faqs.map((faq) => (
                  <motion.button
                    key={faq.question}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleQuestionClick(faq)}
                    className="block w-full text-left p-3 text-sm text-black bg-white hover:bg-gray-100 rounded-lg transition border border-gray-300"
                  >
                    {faq.question}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

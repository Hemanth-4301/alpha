import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes } from 'react-icons/fa';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a wide range of services including consulting, development, and training.'
  },
  {
    question: 'How can I join your team?',
    answer: 'Visit our careers page and submit your application for open positions.'
  },
  {
    question: 'Where are you located?',
    answer: 'We have offices in major cities worldwide with our headquarters in New York.'
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleQuestionClick = (faq) => {
    setMessages([...messages, 
      { type: 'user', text: faq.question },
      { type: 'bot', text: faq.answer }
    ]);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-4 right-4 bg-primary-lightBlue text-white p-4 rounded-full shadow-lg z-50"
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
            className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl z-50"
          >
            <div className="bg-primary-navy text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">Chat with us</h3>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.type === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-primary-lightBlue text-white'
                        : 'bg-gray-100 text-primary-navy'
                    }`}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <p className="text-primary-slate mb-2">Suggested Questions:</p>
              {faqs.map((faq) => (
                <button
                  key={faq.question}
                  onClick={() => handleQuestionClick(faq)}
                  className="block w-full text-left p-2 text-sm text-primary-navy hover:bg-gray-100 rounded mb-1"
                >
                  {faq.question}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
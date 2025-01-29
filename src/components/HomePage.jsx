import React from "react";
import Hero from "./Hero";
import Events from "./Events";
import Vision from "./Vision";
import Chatbot from "./Chatbot";
import Highlights from "./Highlights";

function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Vision />
      <Events />
      <Highlights />
      <Chatbot />
    </div>
  );
}

export default HomePage;

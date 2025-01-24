import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Events from './components/Events'
import Vision from './components/Vision'
import Chatbot from './components/Chatbot'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-primary-black text-white">
      <Navbar />
      <Hero />
      <Team />
      <Events />
      <Vision />
      <Chatbot />
      <Footer />
    </div>
  )
}

export default App
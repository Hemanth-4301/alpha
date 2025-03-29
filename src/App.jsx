import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Team from "./components/Team";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Vision from "./components/Vision";
import Departments from "./components/Departments";
import DepartmentDetail from "./components/DepartmentDetail";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/dept" element={<Departments />} />
        <Route path="/dept/:name" element={<DepartmentDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;

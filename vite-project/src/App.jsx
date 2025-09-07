import React from "react";
import Navbar from "./components/sections/Navbar";
import HeroSection from "./components/sections/HeroSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";
import ScrollArrow from "./components/ScrollArrow";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;

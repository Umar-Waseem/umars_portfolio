import React from "react";


import MainSection from "@/sections/MainSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";
import EducationSection from "@/sections/EducationSection";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";

const App = () => {
  return (
    <>
      <MainSection/>
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
};

export default App;

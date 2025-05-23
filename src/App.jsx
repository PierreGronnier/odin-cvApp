import React, { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import PracticalExperience from "./components/PracticalExperience";
import CVDisplay from "./components/CVDisplay";

const App = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [education, setEducation] = useState({
    school: "",
    study: "",
    date: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
  });

  const [expandedSection, setExpandedSection] = useState("general");
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="App">
      <div className="form-container">
        <GeneralInfo
          onInfoChange={setInfo}
          isExpanded={expandedSection === "general"}
          toggleExpanded={() => toggleSection("general")}
        />
        <Education
          onEducationChange={setEducation}
          isExpanded={expandedSection === "education"}
          toggleExpanded={() => toggleSection("education")}
        />
        <PracticalExperience
          onExperienceChange={setExperience}
          isExpanded={expandedSection === "experience"}
          toggleExpanded={() => toggleSection("experience")}
        />
      </div>
      <div className="preview-container">
        <CVDisplay info={info} education={education} experience={experience} />
      </div>
    </div>
  );
};

export default App;

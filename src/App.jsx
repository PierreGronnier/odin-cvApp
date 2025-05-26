import React, { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import PracticalExperience from "./components/PracticalExperience";
import CVDisplay from "./components/CVDisplay";

const App = () => {
  const [info, setInfo] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "555-1234",
    address: "4211 Spenard Rd, Anchorage, Alaska",
  });

  const [education, setEducation] = useState({
    school: "University of California",
    study: "Computer Science",
    date: "2015 - 2019",
  });

  const [experience, setExperience] = useState({
    company: "Tech Solutions Inc.",
    position: "Full Stack Developer",
    responsibilities: "Developing web applications, managing databases",
    from: "2020",
    to: "2023",
  });

  const [expandedSection, setExpandedSection] = useState("general");
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="App">
      <div className="form-container">
        <GeneralInfo
          info={info}
          onInfoChange={setInfo}
          isExpanded={expandedSection === "general"}
          toggleExpanded={() => toggleSection("general")}
        />
        <Education
          education={education}
          onEducationChange={setEducation}
          isExpanded={expandedSection === "education"}
          toggleExpanded={() => toggleSection("education")}
        />
        <PracticalExperience
          experience={experience}
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

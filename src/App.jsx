import React, { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import PracticalExperience from "./components/PracticalExperience";
import CVDisplay from "./components/CVDisplay";
import Modal from "./components/Modal";

const App = () => {
  const DEFAULT_INFO = {
    general: {
      name: "John Doe",
      email: "johndoe@gmail.com",
      phone: "555-1234",
      address: "4211 Spenard Rd, Anchorage, Alaska",
    },
    education: {
      school: "University of California",
      study: "Computer Science",
      date: "2015 - 2019",
    },
    experience: {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      responsibilities: "Developing web applications, managing databases",
      from: "2020",
      to: "2023",
    },
  };

  const [info, setInfo] = useState(DEFAULT_INFO.general);
  const [education, setEducation] = useState(DEFAULT_INFO.education);
  const [experience, setExperience] = useState(DEFAULT_INFO.experience);
  const [expandedSection, setExpandedSection] = useState("general");
  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const resetAllData = () => {
    setInfo({ name: "", email: "", phone: "", address: "" });
    setEducation({ school: "", study: "", date: "" });
    setExperience({
      company: "",
      position: "",
      responsibilities: "",
      from: "",
      to: "",
    });
    setShowModal(false);
  };

  const resetToDefaultData = () => {
    setInfo(DEFAULT_INFO.general);
    setEducation(DEFAULT_INFO.education);
    setExperience(DEFAULT_INFO.experience);
    setShowModal(false);
  };

  const handleResetCV = () => {
    setModalAction("reset");
    setShowModal(true);
  };

  const handleClearAll = () => {
    setModalAction("clear");
    setShowModal(true);
  };

  const handleConfirm = () => {
    if (modalAction === "reset") {
      resetToDefaultData();
    } else if (modalAction === "clear") {
      resetAllData();
    }
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
        <div className="button-flex">
          <button className="reset-button" onClick={handleClearAll}>
            CLEAR ALL
          </button>
          <button className="reset-button" onClick={handleResetCV}>
            RESET CV
          </button>
          <button className="print-button" onClick={() => window.print()}>
            PRINT CV
          </button>
        </div>
      </div>
      <div className="preview-container" id="cv-to-print">
        <CVDisplay info={info} education={education} experience={experience} />
      </div>
      {showModal && (
        <Modal
          title={modalAction === "reset" ? "Reset CV" : "Clear All Data"}
          message={
            modalAction === "reset"
              ? "Are you sure you want to reset the CV to default data?"
              : "Are you sure you want to clear all data?"
          }
          onCancel={() => setShowModal(false)}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default App;

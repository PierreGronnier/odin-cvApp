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
    educations: [
      {
        school: "University of California",
        study: "Computer Science",
        startDate: "2015",
        endDate: "2019",
      },
      {
        school: "Massachusetts Institute of Technology",
        study: "Business Administration",
        startDate: "2012",
        endDate: "2015",
      },
    ],
    experiences: [
      {
        company: "Tech Solutions Inc.",
        position: "Full Stack Developer",
        responsibilities: [
          "Developing web applications",
          "Managing databases",
          "Collaborating with cross-functional teams",
          "Implementing security protocols",
        ],
        from: "2020",
        to: "2023",
      },
      {
        company: "Innovatech Corp.",
        position: "Software Engineer",
        responsibilities: [
          "Designing software solutions",
          "Testing and debugging",
          "Writing technical documentation",
          "Mentoring junior developers",
        ],
        from: "2018",
        to: "2020",
      },
      {
        company: "Digital Creations Ltd.",
        position: "Frontend Developer",
        responsibilities: [
          "Creating responsive web designs",
          "Optimizing web performance",
          "Working with UX/UI designers",
          "Conducting code reviews",
        ],
        from: "2016",
        to: "2018",
      },
    ],
  };

  const [info, setInfo] = useState(DEFAULT_INFO.general);
  const [educations, setEducations] = useState(DEFAULT_INFO.educations);
  const [experiences, setExperiences] = useState(DEFAULT_INFO.experiences);
  const [expandedSection, setExpandedSection] = useState("general");
  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const resetAllData = () => {
    setInfo({ name: "", email: "", phone: "", address: "" });
    setEducations([{ school: "", study: "", startDate: "", endDate: "" }]);
    setExperiences([
      { company: "", position: "", responsibilities: [], from: "", to: "" },
    ]);
    setShowModal(false);
  };

  const resetToDefaultData = () => {
    setInfo(DEFAULT_INFO.general);
    setEducations(DEFAULT_INFO.educations);
    setExperiences(DEFAULT_INFO.experiences);
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
          setInfo={setInfo}
          isExpanded={expandedSection === "general"}
          toggleExpanded={() => toggleSection("general")}
        />
        <Education
          educations={educations}
          setEducations={setEducations}
          isExpanded={expandedSection === "education"}
          toggleExpanded={() => toggleSection("education")}
        />
        <PracticalExperience
          experiences={experiences}
          setExperiences={setExperiences}
          isExpanded={expandedSection === "experience"}
          toggleExpanded={() => toggleSection("experience")}
        />
        <div className="main-button-container">
          <button className="clear-all-button" onClick={handleClearAll}>
            CLEAR ALL
          </button>
          <button className="reset-cv-button" onClick={handleResetCV}>
            RESET CV
          </button>
          <button className="print-cv-button" onClick={() => window.print()}>
            PRINT CV
          </button>
        </div>
      </div>
      <div className="preview-container" id="cv-to-print">
        <CVDisplay
          info={info}
          educations={educations}
          experiences={experiences}
        />
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

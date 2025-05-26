import React, { useState } from "react";
import "../styles/section.css";

const Education = ({ onEducationChange, isExpanded, toggleExpanded }) => {
  const [education, setEducation] = useState({
    school: "University of California",
    study: "Computer Science",
    date: "2015 - 2019",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newEducation = {
      ...education,
      [name]: value,
    };
    setEducation(newEducation);
    onEducationChange(newEducation);
  };

  return (
    <div className={`card ${isExpanded ? "expanded" : ""}`}>
      <div className="card-header" onClick={toggleExpanded}>
        <h3>Education</h3>
        <span className="toggle-icon">{isExpanded ? "▼" : "▶"}</span>
      </div>
      {isExpanded && (
        <form>
          <input
            type="text"
            name="school"
            value={education.school}
            onChange={handleChange}
            placeholder="School"
          />
          <input
            type="text"
            name="study"
            value={education.study}
            onChange={handleChange}
            placeholder="Study"
          />
          <input
            type="text"
            name="date"
            value={education.date}
            onChange={handleChange}
            placeholder="Date"
          />
        </form>
      )}
    </div>
  );
};

export default Education;

import React, { useState } from "react";
import "../styles/section.css";

const PracticalExperience = ({
  onExperienceChange,
  isExpanded,
  toggleExpanded,
}) => {
  const [experience, setExperience] = useState({
    company: "Tech Solutions Inc.",
    position: "Full Stack Developer",
    responsibilities: "Developing web applications, managing databases",
    from: "2020",
    to: "2023",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newExperience = {
      ...experience,
      [name]: value,
    };
    setExperience(newExperience);
    onExperienceChange(newExperience);
  };

  return (
    <div className={`card ${isExpanded ? "expanded" : ""}`}>
      <div className="card-header" onClick={toggleExpanded}>
        <h3>Practical Experience</h3>
        <span className="toggle-icon">{isExpanded ? "▼" : "▶"}</span>
      </div>
      {isExpanded && (
        <form>
          <input
            type="text"
            name="company"
            value={experience.company}
            onChange={handleChange}
            placeholder="Company"
          />
          <input
            type="text"
            name="position"
            value={experience.position}
            onChange={handleChange}
            placeholder="Position"
          />
          <textarea
            name="responsibilities"
            value={experience.responsibilities}
            onChange={handleChange}
            placeholder="Responsibilities"
          />
          <input
            type="text"
            name="from"
            value={experience.from}
            onChange={handleChange}
            placeholder="Start date"
          />
          <input
            type="text"
            name="to"
            value={experience.to}
            onChange={handleChange}
            placeholder="End date"
          />
        </form>
      )}
    </div>
  );
};

export default PracticalExperience;

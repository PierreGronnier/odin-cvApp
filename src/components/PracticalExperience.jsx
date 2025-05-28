import React from "react";
import "../styles/section.css";

const PracticalExperience = ({
  experience,
  onExperienceChange,
  isExpanded,
  toggleExpanded,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newExperience = {
      ...experience,
      [name]: value,
    };
    onExperienceChange(newExperience);
  };

  const addResponsibility = () => {
    if (experience.responsibilities.length < 4) {
      const newResponsibilities = [...experience.responsibilities, ""];
      const newExperience = {
        ...experience,
        responsibilities: newResponsibilities,
      };
      onExperienceChange(newExperience);
    }
  };

  const removeLastResponsibility = () => {
    if (experience.responsibilities.length > 0) {
      const newResponsibilities = experience.responsibilities.slice(0, -1);
      const newExperience = {
        ...experience,
        responsibilities: newResponsibilities,
      };
      onExperienceChange(newExperience);
    }
  };

  const handleResponsibilityChange = (index, value) => {
    const newResponsibilities = [...experience.responsibilities];
    newResponsibilities[index] = value;
    const newExperience = {
      ...experience,
      responsibilities: newResponsibilities,
    };
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
          {experience.responsibilities.map((responsibility, index) => (
            <input
              key={index}
              type="text"
              value={responsibility}
              onChange={(e) =>
                handleResponsibilityChange(index, e.target.value)
              }
              placeholder={`Responsibility ${index + 1}`}
            />
          ))}
          <div className="button-container">
            <button
              type="button"
              className="add-button"
              onClick={addResponsibility}
            >
              Add Responsibility (max 4)
            </button>
            <button
              type="button"
              className="remove-button"
              onClick={removeLastResponsibility}
            >
              Remove Last Responsibility
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PracticalExperience;

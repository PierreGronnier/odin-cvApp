import React from "react";
import "../styles/section.css";

const PracticalExperience = ({
  experiences,
  setExperiences,
  isExpanded,
  toggleExpanded,
}) => {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = [...experiences];
    newExperiences[index] = {
      ...newExperiences[index],
      [name]: value,
    };
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    if (experiences.length < 4) {
      setExperiences([
        ...experiences,
        {
          company: "",
          position: "",
          responsibilities: [],
          from: "",
          to: "",
        },
      ]);
    }
  };

  const removeExperience = () => {
    if (experiences.length > 1) {
      const newExperiences = experiences.slice(0, -1);
      setExperiences(newExperiences);
    }
  };

  const addResponsibility = (expIndex) => {
    if (experiences[expIndex].responsibilities.length < 4) {
      const newExperiences = [...experiences];
      newExperiences[expIndex].responsibilities.push("");
      setExperiences(newExperiences);
    }
  };

  const removeResponsibility = (expIndex, respIndex) => {
    const newExperiences = [...experiences];
    newExperiences[expIndex].responsibilities = newExperiences[
      expIndex
    ].responsibilities.filter((_, i) => i !== respIndex);
    setExperiences(newExperiences);
  };

  const handleResponsibilityChange = (expIndex, respIndex, value) => {
    const newExperiences = [...experiences];
    newExperiences[expIndex].responsibilities[respIndex] = value;
    setExperiences(newExperiences);
  };

  return (
    <div className={`card ${isExpanded ? "expanded" : ""}`}>
      <div className="card-header" onClick={toggleExpanded}>
        <h3>Practical Experience</h3>
        <span className="toggle-icon">{isExpanded ? "▼" : "▶"}</span>
      </div>
      {isExpanded && (
        <form>
          {experiences.map((experience, expIndex) => (
            <div key={expIndex} className="experience-entry">
              <h4>Experience #{expIndex + 1}</h4>
              <div className="input-row">
                <input
                  type="text"
                  name="company"
                  value={experience.company}
                  onChange={(e) => handleChange(expIndex, e)}
                  placeholder="Company"
                />
                <input
                  type="text"
                  name="position"
                  value={experience.position}
                  onChange={(e) => handleChange(expIndex, e)}
                  placeholder="Position"
                />
              </div>
              <div className="input-row">
                <input
                  type="text"
                  name="from"
                  value={experience.from}
                  onChange={(e) => handleChange(expIndex, e)}
                  placeholder="Start date"
                />
                <input
                  type="text"
                  name="to"
                  value={experience.to}
                  onChange={(e) => handleChange(expIndex, e)}
                  placeholder="End date"
                />
              </div>

              <div className="responsibilities-container">
                <h5>Responsibilities:</h5>
                {experience.responsibilities.map(
                  (responsibility, respIndex) => (
                    <div key={respIndex} className="responsibility-item">
                      <input
                        type="text"
                        value={responsibility}
                        onChange={(e) =>
                          handleResponsibilityChange(
                            expIndex,
                            respIndex,
                            e.target.value
                          )
                        }
                        placeholder={`Responsibility ${respIndex + 1}`}
                      />
                      <button
                        type="button"
                        className="remove-small-button"
                        onClick={() =>
                          removeResponsibility(expIndex, respIndex)
                        }
                      >
                        ×
                      </button>
                    </div>
                  )
                )}
                {experience.responsibilities.length < 4 && (
                  <button
                    type="button"
                    className="add-small-button"
                    onClick={() => addResponsibility(expIndex)}
                  >
                    Add Responsibility
                  </button>
                )}
              </div>
            </div>
          ))}

          <div className="button-container">
            {experiences.length < 4 && (
              <button
                type="button"
                className="add-button"
                onClick={addExperience}
              >
                Add Experience (max 4)
              </button>
            )}
            {experiences.length > 1 && (
              <button
                type="button"
                className="remove-button"
                onClick={removeExperience}
              >
                Remove Last Experience
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default PracticalExperience;

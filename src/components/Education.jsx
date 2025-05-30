import React from "react";
import "../styles/section.css";

const Education = ({
  educations,
  setEducations,
  isExpanded,
  toggleExpanded,
}) => {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newEducations = [...educations];
    newEducations[index] = {
      ...newEducations[index],
      [name]: value,
    };
    setEducations(newEducations);
  };

  const addEducation = () => {
    if (educations.length < 3) {
      setEducations([
        ...educations,
        { school: "", study: "", startDate: "", endDate: "" },
      ]);
    }
  };

  const removeEducation = () => {
    if (educations.length > 1) {
      const newEducations = educations.slice(0, -1);
      setEducations(newEducations);
    }
  };

  return (
    <div className={`card ${isExpanded ? "expanded" : ""}`}>
      <div className="card-header" onClick={toggleExpanded}>
        <h3>Education</h3>
        <span className="toggle-icon">{isExpanded ? "▼" : "▶"}</span>
      </div>
      {isExpanded && (
        <form>
          {educations.map((education, index) => (
            <div key={index} className="education-entry">
              <h4>Education #{index + 1}</h4>
              <div className="input-row">
                <input
                  type="text"
                  name="school"
                  value={education.school}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="School"
                />
                <input
                  type="text"
                  name="study"
                  value={education.study}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Study"
                />
              </div>
              <div className="input-row">
                <input
                  type="text"
                  name="startDate"
                  value={education.startDate}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Start Date"
                />
                <input
                  type="text"
                  name="endDate"
                  value={education.endDate}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="End Date"
                />
              </div>
            </div>
          ))}
          <div className="button-container">
            {educations.length < 3 && (
              <button
                type="button"
                className="add-button"
                onClick={addEducation}
              >
                Add Education (max 3)
              </button>
            )}
            {educations.length > 1 && (
              <button
                type="button"
                className="remove-button"
                onClick={removeEducation}
              >
                Remove Last Education
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default Education;

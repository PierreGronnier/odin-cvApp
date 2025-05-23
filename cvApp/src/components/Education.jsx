import React, { useState } from "react";

const Education = ({ onEducationChange }) => {
  const [education, setEducation] = useState({
    school: "",
    study: "",
    date: "",
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
    <div className="card">
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
          type="date"
          name="date"
          value={education.date}
          onChange={handleChange}
          placeholder="Date"
        />
      </form>
    </div>
  );
};

export default Education;

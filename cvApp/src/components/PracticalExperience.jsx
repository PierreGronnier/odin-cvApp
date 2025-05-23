import React, { useState } from "react";

const PracticalExperience = ({ onExperienceChange }) => {
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
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
    <div className="card">
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
          type="date"
          name="from"
          value={experience.from}
          onChange={handleChange}
          placeholder="From"
        />
        <input
          type="date"
          name="to"
          value={experience.to}
          onChange={handleChange}
          placeholder="To"
        />
      </form>
    </div>
  );
};

export default PracticalExperience;

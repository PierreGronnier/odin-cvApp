import React from "react";
import "../styles/section.css";

const GeneralInfo = ({ info, onInfoChange, isExpanded, toggleExpanded }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newInfo = {
      ...info,
      [name]: value,
    };
    onInfoChange(newInfo);
  };

  return (
    <div className={`card ${isExpanded ? "expanded" : ""}`}>
      <div className="card-header" onClick={toggleExpanded}>
        <h3>Informations Générales</h3>
        <span className="toggle-icon">{isExpanded ? "▼" : "▶"}</span>
      </div>
      {isExpanded && (
        <form>
          <input
            type="text"
            name="name"
            value={info.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="tel"
            name="phone"
            value={info.phone}
            onChange={handleChange}
            placeholder="Téléphone"
          />
          <input
            type="text"
            name="address"
            value={info.address}
            onChange={handleChange}
            placeholder="Address"
          />
        </form>
      )}
    </div>
  );
};

export default GeneralInfo;

import React from "react";
import "../styles/CVDisplay.css";

const CVDisplay = ({ info, education, experience }) => {
  return (
    <div className="cv-display">
      <div className="cv-section">
        <h2>General Information</h2>
        <p className="cv-entry">
          <span className="cv-label">Name:</span>{" "}
          <span className="cv-value">{info.name}</span>
        </p>
        <p className="cv-entry">
          <span className="cv-label">Email:</span>{" "}
          <span className="cv-value">{info.email}</span>
        </p>
        <p className="cv-entry">
          <span className="cv-label">Phone:</span>{" "}
          <span className="cv-value">{info.phone}</span>
        </p>
        <p className="cv-entry">
          <span className="cv-label">Address:</span>{" "}
          <span className="cv-value">{info.address}</span>
        </p>
      </div>

      <div className="cv-section">
        <h2>Education</h2>
        <p className="cv-entry">
          <span className="cv-label">School:</span>{" "}
          <span className="cv-value">{education.school}</span>
        </p>
        <p className="cv-entry">
          <span className="cv-label">Study:</span>{" "}
          <span className="cv-value">{education.study}</span>
        </p>
        <p className="cv-entry">
          <span className="cv-label">Date:</span>{" "}
          <span className="cv-value">{education.date}</span>
        </p>
      </div>

      <div className="cv-section">
        <h2>Practical Experience</h2>
        <p className="cv-entry">
          <span className="cv-label">Company:</span>{" "}
          <span className="cv-value">{experience.company}</span>
        </p>
        <p className="cv-entry">
          <span className="cv-label">Position:</span>{" "}
          <span className="cv-value">{experience.position}</span>
        </p>
        <p className="cv-entry">
          <span className="cv-label">Responsibilities:</span>{" "}
          <span className="cv-value">{experience.responsibilities}</span>
        </p>
        <p className="cv-entry">
          <span className="cv-label">From:</span>{" "}
          <span className="cv-value">{experience.from}</span>
        </p>
        <p className="cv-entry">
          <span className="cv-label">To:</span>{" "}
          <span className="cv-value">{experience.to}</span>
        </p>
      </div>
    </div>
  );
};

export default CVDisplay;

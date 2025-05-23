import React from "react";

const CVDisplay = ({ info, education, experience }) => {
  return (
    <div className="cv-display">
      <h2>General Information</h2>
      <p>
        <strong>Name:</strong> {info.name}
      </p>
      <p>
        <strong>Email:</strong> {info.email}
      </p>
      <p>
        <strong>Phone:</strong> {info.phone}
      </p>
      <p>
        <strong>Address:</strong> {info.address}
      </p>

      <h2>Education</h2>
      <p>
        <strong>School:</strong> {education.school}
      </p>
      <p>
        <strong>Study:</strong> {education.study}
      </p>
      <p>
        <strong>Date:</strong> {education.date}
      </p>

      <h2>Practical Experience</h2>
      <p>
        <strong>Company:</strong> {experience.company}
      </p>
      <p>
        <strong>Position:</strong> {experience.position}
      </p>
      <p>
        <strong>Responsibilities:</strong> {experience.responsibilities}
      </p>
      <p>
        <strong>From:</strong> {experience.from}
      </p>
      <p>
        <strong>To:</strong> {experience.to}
      </p>
    </div>
  );
};

export default CVDisplay;

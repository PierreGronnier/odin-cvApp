import React from "react";
import "../styles/CVDisplay.css";

const CVDisplay = ({ info, education, experience }) => {
  return (
    <div className="cv-display">
      <header className="cv-header">
        <h1 className="name">{info.name}</h1>
        <div className="contact-info">
          <p>{info.email}</p>|<p>{info.phone}</p>|<p>{info.address}</p>
        </div>
      </header>

      <section className="cv-section">
        <h2>Education</h2>
        <div className="section-content">
          <div className="entry">
            <div className="entry-header">
              <h3>{education.school}</h3>
              <span className="date">{education.date}</span>
            </div>
            <p className="degree">{education.study}</p>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Professional experience</h2>
        <div className="section-content">
          <div className="entry">
            <div className="entry-header">
              <h3>{experience.company}</h3>
              <span className="date">
                {experience.from} - {experience.to}
              </span>
            </div>
            <p className="position">{experience.position}</p>
            <ul className="responsibilities">
              {experience.responsibilities?.split("\n").map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CVDisplay;

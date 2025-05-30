import React from "react";
import "../styles/CVDisplay.css";

const CVDisplay = ({ info, educations, experiences }) => {
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
          {educations.map((education, index) => (
            <div key={index} className="entry">
              <div className="entry-header">
                <h3>{education.school}</h3>
                <span className="date">
                  {education.startDate} - {education.endDate}
                </span>
              </div>
              <p className="degree">{education.study}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <h2>Professional Experience</h2>
        <div className="section-content">
          {experiences.map((experience, index) => (
            <div key={index} className="entry">
              <div className="entry-header">
                <h3>{experience.company}</h3>
                <span className="date">
                  {experience.from} - {experience.to}
                </span>
              </div>
              <p className="position">{experience.position}</p>
              <ul className="responsibilities">
                {experience.responsibilities?.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CVDisplay;

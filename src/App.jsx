import React, { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import PracticalExperience from "./components/PracticalExperience";
import CVDisplay from "./components/CVDisplay";

const App = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [education, setEducation] = useState({
    school: "",
    study: "",
    date: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
  });

  return (
    <div className="App">
      <div className="form-container">
        <GeneralInfo onInfoChange={setInfo} />
        <Education onEducationChange={setEducation} />
        <PracticalExperience onExperienceChange={setExperience} />
      </div>
      <div className="preview-container">
        <CVDisplay info={info} education={education} experience={experience} />
      </div>
    </div>
  );
};

export default App;

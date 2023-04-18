import "./App.css";
import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Resume Builder</h1>
        <PersonalInfo />
        <Education />
        <WorkExperience />
        <Projects />
        <Skills />
      </div>
    );
  }
}

export default App;


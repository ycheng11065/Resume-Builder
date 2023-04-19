import "./App.css";
import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ResumePreview from "./components/ResumePreview"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {},
      education: {},
      projects: {},
      skills: {},
      workExperience: {},
    }
  }

  updateStates = (newData, component) => {
    this.setState({
      [component]: newData,
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Resume Builder</h1>
          <PersonalInfo onUpdate={(newData) => this.updateStates(newData, "personalInfo")} />
          <Education onUpdate={(newData) => this.updateStates(newData, "education")} />
          <WorkExperience onUpdate={(newData) => this.updateStates(newData, "workExperience")} />
          <Projects onUpdate={(newData) => this.updateStates(newData, "projects")} />
          <Skills onUpdate={(newData) => this.updateStates(newData, "skills")} />
        </div>
        <div>
          <ResumePreview
            personalInfo={this.state.personalInfo}
            education={this.state.education}
            projects={this.state.projects}
            skills={this.state.skills}
            workExperience={this.state.workExperience}
          />
        </div>
      </div>
    );
  }
}

export default App;

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
      PersonalInfo: {},
      Education: {},
      Projects: {},
      Skills: {},
      WorkExperience: {},
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
          <PersonalInfo onUpdate={(newData) => this.updateStates(newData, "PersonalInfo")} />
          <Education onUpdate={(newData) => this.updateStates(newData, "Education")} />
          <WorkExperience onUpdate={(newData) => this.updateStates(newData, "WorkExperience")} />
          <Projects onUpdate={(newData) => this.updateStates(newData, "Projects")} />
          <Skills onUpdate={(newData) => this.updateStates(newData, "Skills")} />
        </div>
        <div>
          <ResumePreview
            personalInfo={this.state.PersonalInfo}
            education={this.state.Education}
            projects={this.state.Projects}
            skills={this.state.Skills}
            workExperience={this.state.WorkExperience}
          />
        </div>
      </div>
    );
  }
}

export default App;

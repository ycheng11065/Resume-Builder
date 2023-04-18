import "./App.css";
import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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
        <h1>Resume Builder</h1>
        <PersonalInfo onUpdate={(newData) => this.updateStates(newData, "PersonalInfo")} />
        <Education onUpdate={(newData) => this.updateStates(newData, "Education")} />
        <WorkExperience onUpdate={(newData) => this.updateStates(newData, "Projects")} />
        <Projects onUpdate={(newData) => this.updateStates(newData, "Skills")} />
        <Skills onUpdate={(newData) => this.updateStates(newData, "WorkExperience")} />
      </div>
    );
  }
}

export default App;

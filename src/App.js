import "./App.css";
import { v4 as uuidv4 } from "uuid";
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

  generateSample = () => {
    const educationId = uuidv4();
    const projectIds = [];

    for (let i = 0; i < 4; i++) {
      const currId = uuidv4();
      projectIds.push(currId);
    }

    const sampleData = {
      personalInfo: {
        firstName: "John",
        lastName: "Doe",
        major: "Computer Science",
        yearLevel: "2nd",
        phone: "555-123-4567",
        email: "john.doe@example.com",
        linkedin: "linkedin.com/johndoe",
        github: "github.com/johndoe",
      },
      education: {
        items: [educationId],
        inputValues: {
          [educationId]: {
            schoolName: "XYZ University",
            degree: "Bachelor of Science",
            startDate: "Sept 2020",
            endDate: "April 2026",
          }
        },
      },
      projects: {
        items: [],
        inputValues: {},
      },
      skills: {
        items: [],
        inputValues: {},
      },
      workExperience: {},
    }

    this.setState(sampleData);
  };

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

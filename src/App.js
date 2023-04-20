import "./App.css";
import { v4 as uuidv4 } from "uuid";
import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ResumePreview from "./components/ResumePreview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {},
      education: {},
      projects: {},
      skills: {},
      workExperience: {},
    };
  }

  generateSample = () => {
    const educationId = uuidv4();
    const projectIds = [];
    const workIds = [];

    for (let i = 0; i < 4; i++) {
      const currId = uuidv4();
      projectIds.push(currId);
    }

    for (let i = 0; i < 2; i++) {
      const currId = uuidv4();
      workIds.push(currId);
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
          },
        },
      },
      projects: {
        items: [projectIds[0], projectIds[1], projectIds[2], projectIds[3]],
        inputValues: {
          [projectIds[0]]: {
            name: "Online Marketplace Platform",
            technology: "React, Redux, Node.js, Express, PostgreSQL",
            completionDate: "June 2022",
            description: `• Developed an online marketplace platform for buying and selling goods
            • Implemented user authentication and authorization with JWT
            • Designed a RESTful API to handle user and product data
            • Utilized Redux for efficient state management`,
          },
          [projectIds[1]]: {
            name: "Real-time Chat Application",
            technology: "React, Socket.IO, Node.js, Express",
            completionDate: "January 2022",
            description: `• Created a real-time chat application using WebSockets
            • Implemented private and group chat functionality
            • Used Socket.IO for seamless communication between server and clients
            • Designed a responsive user interface using Material-UI`,
          },
          [projectIds[2]]: {
            name: "Weather Forecast Web App",
            technology: "Vue.js, Vuex, OpenWeatherMap API",
            completionDate: "August 2021",
            description: `• Developed a weather forecast web app that displays current weather and 7-day forecast
            • Integrated OpenWeatherMap API to fetch real-time weather data
            • Utilized Vuex for centralized state management
            • Implemented geolocation to automatically fetch weather data based on user's location`,
          },
          [projectIds[3]]: {
            name: "Task Management System",
            technology: "Angular, Firebase, Firestore",
            completionDate: "April 2021",
            description: `• Built a task management system to help users organize their tasks
            • Implemented CRUD operations for tasks and projects
            • Utilized Firebase for user authentication and Firestore for data storage
            • Applied responsive design principles for an optimal user experience on various devices`,
          },
        },
      },
      skills: {
        items: [],
        inputValues: {},
      },
      workExperience: {},
    };

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
          <PersonalInfo
            onUpdate={(newData) => this.updateStates(newData, "personalInfo")}
          />
          <Education
            onUpdate={(newData) => this.updateStates(newData, "education")}
          />
          <WorkExperience
            onUpdate={(newData) => this.updateStates(newData, "workExperience")}
          />
          <Projects
            onUpdate={(newData) => this.updateStates(newData, "projects")}
          />
          <Skills
            onUpdate={(newData) => this.updateStates(newData, "skills")}
          />
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

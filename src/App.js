import "./App.css";
import { v4 as uuidv4 } from "uuid";
import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ResumePreview from "./components/ResumePreview";
import ResumePDF from "./components/ResumePDF";
import ButtonManager from "./components/ButtonManager";
import myLogo from "./asset/logo/logo-yc.png";
import { AiFillGithub } from "react-icons/ai";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {},
      education: {},
      projects: {},
      skills: {},
      workExperience: {},
      personalInfoView: true,
      educationView: false,
      projectsView: false,
      skillsView: false,
      workExperienceView: false,
      resetPressed: false,
    };
  }

  reset = () => {
    this.setState({
      personalInfo: {},
      education: {},
      projects: {},
      skills: {},
      workExperience: {},
      personalInfoView: true,
      educationView: false,
      projectsView: false,
      skillsView: false,
      workExperienceView: false,
      resetPressed: true,
    });
  };

  registeredReset = () => {
    this.setState({ resetPressed: false });
  };

  generateSample = () => {
    const educationId = uuidv4();
    const projectIds = [];
    const skillIds = [];
    const workIds = [];

    for (let i = 0; i < 4; i++) {
      const currId = uuidv4();
      projectIds.push(currId);
    }

    for (let i = 0; i < 10; i++) {
      const currId = uuidv4();
      skillIds.push(currId);
    }

    for (let i = 0; i < 2; i++) {
      const currId = uuidv4();
      workIds.push(currId);
    }

    const sampleData = {
      personalInfo: {
        firstName: "John",
        lastName: "Doe",
        major: "Computer Science Major",
        yearLevel: "2nd year",
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
            description:
              "• Developed an online marketplace platform for buying and selling goods\n" +
              "• Implemented user authentication and authorization with JWT\n" +
              "• Designed a RESTful API to handle user and product data\n",
          },
          [projectIds[1]]: {
            name: "Real-time Chat Application",
            technology: "React, Socket.IO, Node.js, Express",
            completionDate: "January 2022",
            description:
              "• Created a real-time chat application using \n" +
              "• Implemented private and group chat functionality\n" +
              "• Used Socket.IO for seamless communication between server and clients\n",
          },
          [projectIds[2]]: {
            name: "Weather Forecast Web App",
            technology: "Vue.js, Vuex, OpenWeatherMap API",
            completionDate: "August 2021",
            description:
              "• Developed a weather forecast web app that displays current weather and 7-day forecast\n" +
              "• Integrated OpenWeatherMap API to fetch real-time weather data\n" +
              "• Utilized Vuex for centralized state management",
          },
          [projectIds[3]]: {
            name: "Task Management System",
            technology: "Angular, Firebase, Firestore",
            completionDate: "April 2021",
            description:
              "• Built a task management system to help users organize their tasks\n" +
              "• Implemented CRUD operations for tasks and projects\n" +
              "• Utilized Firebase for user authentication and Firestore for data storage",
          },
        },
      },
      skills: {
        category: "",
        skills: {
          Languages: {
            [skillIds[0]]: "Python",
            [skillIds[1]]: "Java",
            [skillIds[2]]: "JavaScript",
            [skillIds[3]]: "C++",
            [skillIds[4]]: "Go",
          },
          Frameworks: {
            [skillIds[5]]: "React.js",
            [skillIds[6]]: "Node.js",
          },
          Tools: {
            [skillIds[7]]: "Git/Github",
            [skillIds[8]]: "Visual Studio Code",
            [skillIds[9]]: "JetBrains Suite",
          },
        },
        inputValues: {
          Languages: "",
          Frameworks: "",
          Tools: "",
        },
      },
      workExperience: {
        items: [workIds[0], workIds[1]],
        inputValues: {
          [workIds[0]]: {
            position: "Software Engineer Intern",
            company: "ABC Tech",
            startDate: "May 2022",
            endDate: "August 2022",
            location: "New York, NY",
            description:
              "• Collaborated with a team of engineers to develop a web application using React and Node.js\n" +
              "• Optimized database queries to improve application performance\n" +
              "• Created unit tests and end-to-end tests using Jest and React Testing Library",
          },
          [workIds[1]]: {
            position: "Junior Software Developer",
            company: "XYZ Corp",
            startDate: "September 2022",
            endDate: "Present",
            location: "San Francisco, CA",
            description:
              "• Contributed to the development of a microservices architecture using Java and Spring Boot\n" +
              "• Integrated third-party APIs to enhance the functionality of the application\n" +
              "• Assisted in migrating the application from a monolithic architecture to microservices",
          },
        },
      },
    };

    this.setState(sampleData);
  };

  updateStates = (newData, component) => {
    this.setState({
      [component]: newData,
    });
  };

  handleButtonClick = (buttonType) => {
    this.setState({
      personalInfoView: buttonType === "profile",
      educationView: buttonType === "education",
      workExperienceView: buttonType === "work",
      projectsView: buttonType === "project",
      skillsView: buttonType === "skill",
    });
  };

  render() {
    return (
      <div className="App-Root">
        <div className="App-Header">
          <img className="App-Name" src={myLogo} alt="Resume Builder"/>
          <div className="App-Utility">
            <button onClick={() => this.reset()}>Reset</button>
            <button onClick={() => this.generateSample()}>
              Generate Sample
            </button>
            <div>
              <ResumePDF
                personalInfo={this.state.personalInfo}
                education={this.state.education}
                projects={this.state.projects}
                skills={this.state.skills}
                workExperience={this.state.workExperience}
              />
            </div>
          </div>
        </div>
        <div className="App-Content">
          <div className="App-Preview">
            <ResumePreview
              personalInfo={this.state.personalInfo}
              education={this.state.education}
              projects={this.state.projects}
              skills={this.state.skills}
              workExperience={this.state.workExperience}
            />
          </div>
          <div className="App-Input">
            <ButtonManager
              resetStatus={this.state.resetPressed}
              resetCallback={this.registeredReset}
              onButtonClick={this.handleButtonClick}
            />
            {this.state.personalInfoView && (
              <PersonalInfo
                onUpdate={(newData) =>
                  this.updateStates(newData, "personalInfo")
                }
                data={this.state.personalInfo}
              />
            )}
            {this.state.educationView && (
              <Education
                onUpdate={(newData) => this.updateStates(newData, "education")}
                data={this.state.education}
                status={this.state.educationView}
              />
            )}
            {this.state.workExperienceView && (
              <WorkExperience
                onUpdate={(newData) =>
                  this.updateStates(newData, "workExperience")
                }
                data={this.state.workExperience}
                status={this.state.workExperienceView}
              />
            )}
            {this.state.projectsView && (
              <Projects
                onUpdate={(newData) => this.updateStates(newData, "projects")}
                data={this.state.projects}
                status={this.state.projectsView}
              />
            )}
            {this.state.skillsView && (
              <Skills
                onUpdate={(newData) => this.updateStates(newData, "skills")}
                data={this.state.skills}
                status={this.state.skillsView}
              />
            )}
          </div>
        </div>
        <div className="App-Footer">
          <p className="Github-Text">Build and designed by YCheng</p>
          {/* eslint-disable-next-line */}
          <a href="https://github.com/ycheng11065" target="_blank" rel="noopener"> 
              <AiFillGithub className="Github-Icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default App;

import "./App.css";
import { v4 as uuidv4 } from "uuid";
import html2pdf from "html2pdf.js";
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

    this.resumePreviewRef = React.createRef();
  }

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
            description:
              "• Developed an online marketplace platform for buying and selling goods\n" +
              "• Implemented user authentication and authorization with JWT\n" +
              "• Designed a RESTful API to handle user and product data\n" +
              "• Utilized Redux for efficient state management`\n",
          },
          [projectIds[1]]: {
            name: "Real-time Chat Application",
            technology: "React, Socket.IO, Node.js, Express",
            completionDate: "January 2022",
            description: 
              "• Created a real-time chat application using \n" +
              "• Implemented private and group chat functionality\n" +
              "• Used Socket.IO for seamless communication between server and clients\n" +
              "• Designed a responsive user interface using Material-UI`",
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
            [skillIds[8]]: "Visual Studio  Code",
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
              "• Implemented user authentication and authorization using JWT\n" +
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
              "• Participated in code reviews and provided constructive feedback to peers\n" +
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

  saveAsPDF = () => {
    const options = {
      margin: 0,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1},
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation:"portrait"},
    };

    html2pdf().set(options).from(this.resumePreviewRef.current).save();
  };

  render() {
    return (
      <div>
        <div>
          <h1>Resume Builder</h1>
          <button onClick={() => this.generateSample()}>Generate Sample</button>
          <button onClick={() => this.saveAsPDF()}>Save as PDF</button>
          <PersonalInfo
            onUpdate={(newData) => this.updateStates(newData, "personalInfo")}
            data={this.state.personalInfo}
          />
          <Education
            onUpdate={(newData) => this.updateStates(newData, "education")}
            data={this.state.education}
          />
          <WorkExperience
            onUpdate={(newData) => this.updateStates(newData, "workExperience")}
            data={this.state.workExperience}
          />
          <Projects
            onUpdate={(newData) => this.updateStates(newData, "projects")}
            data={this.state.projects}
          />
          <Skills
            onUpdate={(newData) => this.updateStates(newData, "skills")}
            data={this.state.skills}
          />
        </div>
        <div>
          <ResumePreview
          ref={this.resumePreviewRef}
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

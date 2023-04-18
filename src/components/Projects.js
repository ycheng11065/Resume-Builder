import React, { Component } from "react";

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      projects: [],
      inputValues: {},
    };
  }

  handleChange = (projectId) => (e) => {
    const { name, value } = e.target;
    this.setState({
      inputValues: {
        ...this.inputValues,
        [projectId]: {
          ...this.inputValues[projectId],
         [name]: value,
        },
      },
    });
  };

  addProject = () => {
    const { projects, inputValues } = this.state;
    const projectCount = projects.length;
    const projectId = `Project-${projectCount + 1}`;

    this.setState({
      projects: [ ...projects, projectId ],
      inputValues: {
        ...inputValues,
        [projectId]: {
          name: "",
          technology: "",
          date: "",
          description: "",
        },
      },
    });
  };

  render() {
    const { projects, inputValues } = this.state;

    return (
      <div>
        <h2>Projects</h2>
        <button onClick={this.addProject}>Add Project</button>
        {projects.map(projectId => (
          <div key={projectId}>
            <input
              type="text"
              name="name"
              placeholder="Project Name"
              value={inputValues[projectId]["name"]}
              onChange={this.handleChange(projectId)}
            />
            <input
              type="text"
              name="technology"
              placeholder="Technology used"
              value={inputValues[projectId]["technology"]}
              onChange={this.handleChange(projectId)}
            />
            <input
              type="text"
              name="date"
              placeholder="Date"
              value={inputValues[projectId]["date"]}
              onChange={this.handleChange(projectId)}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={inputValues[projectId]["description"]}
              onChange={this.handleChange(projectId)}
              rows="4"
              cols="50"
            /> 
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;

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
    const { name, technology, description } = this.state;

    return (
      <div>
        <h2>Projects</h2>
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="technology"
          placeholder="Technology used"
          value={technology}
          onChange={this.handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
          row="4"
          cols="50"
        />
      </div>
    );
  }
}

export default Projects;

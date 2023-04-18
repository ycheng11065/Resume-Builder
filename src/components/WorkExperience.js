import React, { Component } from "react";

class WorkExperience extends Component {
  constructor() {
    super();

    this.state = {
      workExperience: [],
      inputValues: {},
    };
  }

  handleChange = (workId) => (e) => {
    const { name, value } = e.target;
    this.setState({ 
      inputValues: {
        ...this.state.inputValues,
        [workId]: {
          ...this.state.inputValues[workId],
          [name]: value,
        },
      },  
    });
  };

  addWorkExperience = () => {
    const { inputValues, workExperience } = this.state;
    const workExperienceAmount = workExperience.length;
    const workId = `Work-${workExperienceAmount + 1}`;

    this.setState({
      workExperience: [ ...workExperience, workId ],
      inputValues: {
        ...inputValues,
        [workId]: {
          position: "",
          company: "",
          startDate: "",
          endDate: "",
          location: "",
          description: "",
        },
      },
    });
  };

  render() {
    const { position, company, startDate, endDate, location, description } =
      this.state;

    return (
      <div>
        <h2>Work Experiences</h2>
        <button>Add Work Experience</button>
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={position}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={company}
          onChange={this.handleChange}
        />
        <input
          type="date"
          name="startDate"
          placeholder="Start date"
          value={startDate}
          onChange={this.handleChange}
        />
        <input
          type="date"
          name="endDate"
          placeholder="End date"
          value={endDate}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={location}
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

export default WorkExperience;

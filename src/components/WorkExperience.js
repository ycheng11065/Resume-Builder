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
    const { workExperience, inputValues } = this.state;

    return (
      <div>
        <h2>Work Experiences</h2>
        <button onClick={this.addWorkExperience}>Add Work Experience</button>
        {workExperience.map(workId => (
          <div key={workId}>
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={inputValues[workId]["position"]}
              onChange={this.handleChange(workId)}
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={inputValues[workId]["company"]}
              onChange={this.handleChange(workId)}
            />
            <input
              type="date"
              name="startDate"
              placeholder="Start date"
              value={inputValues[workId]["startDate"]}
              onChange={this.handleChange(workId)}
            />
            <input
              type="date"
              name="endDate"
              placeholder="End date"
              value={inputValues[workId]["endDate"]}
              onChange={this.handleChange(workId)}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={inputValues[workId]["location"]}
              onChange={this.handleChange(workId)}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={inputValues[workId]["description"]}
              onChange={this.handleChange(workId)}
              rows="4"
              cols="50"
            />
          </div>
        ))  
        }
      </div>
    );
  }
}

export default WorkExperience;

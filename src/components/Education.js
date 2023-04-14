import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      education: [],  
      inputValues: {},
      university: "",
      degree: "",
      startDate: "",
      endDate: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addEducation = () => {
    const { education, university } = this.state;

    this.setState({
        education: [ ...education, university],
        university: "",
        degree: "",
        startDate: "",
        endDate: "",
    });
  }

  render() {
    const { education, university, degree, startDate, endDate } = this.state;

    return (
      <div>
        <h2>Education</h2>
        {Object.entries(education).map()}
        <input
          type="text"
          name="university"
          placeholder="University"
          value={university}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={degree}
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
          placeholder="End Date"
          value={endDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Education;

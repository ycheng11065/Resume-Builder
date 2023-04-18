import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      education: [],  
      inputValues: {},
    };
  }

  handleChange = (school) => (e) => {
    const { name, value } = e.target;

    this.setState({
      inputValues: { 
        ...this.state.inputValues,
        [school]: {
          ...this.state.inputValues[school],
          [name]: value,
        },
      },
    });
  };

  addEducation = () => {
    const { education, inputValues } = this.state;
    const educationElementCount = education.length;
    const schoolId = `School-${educationElementCount + 1}`;

    this.setState({
        education: [ ...education, schoolId],
        inputValues: { 
          ...inputValues, 
          [schoolId]: {
            schoolName: "",
            degree: "",
            startDate: "",
            endDate: "",
          },
        },
    });
  };

  render() {
    const { education, inputValues } = this.state;

    return (
      <div>
        <h2>Education</h2>
        <button onClick={this.addEducation}>Add Education</button>
        {education.map((schoolId) => (
          <div key={schoolId}>
             <input
              type="text"
              name="schoolName"
              placeholder="School Name"
              value={inputValues[schoolId]["schoolName"]}
              onChange={this.handleChange(schoolId)}
            />
            <input
              type="text"
              name="degree"
              placeholder="Degree"
              value={inputValues[schoolId]["degree"]}
              onChange={this.handleChange(schoolId)}
            />
            <input
              type="date"
              name="startDate"
              placeholder="Start date"
              value={inputValues[schoolId]["startDate"]}
              onChange={this.handleChange(schoolId)}
            />
            <input
              type="date"
              name="endDate"
              placeholder="End Date"
              value={inputValues[schoolId]["endDate"]}
              onChange={this.handleChange(schoolId)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Education;

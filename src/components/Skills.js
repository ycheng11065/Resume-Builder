import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      skills: {},
      inputValues: {},
    };
  }

  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  };

  handleSkillChange = (category) => (e) => {
    this.setState({
      inputValues: { ...this.state.inputValues, [category]: e.target.value },
    });
  };

  addCategory = () => {
    const { category, skills } = this.state;

    if (category && !skills[category]) {
      this.setState({
        skills: { ...skills, [category]: [] },
        category: "",
        intputValues: { ...this.state.inputValues, [category]: "" },
      });
    }
  };

  addSkill = (e, category) => {
    const { skills, inputValues } = this.state;

    if (category && inputValues[category] && skills[category]) {
      this.setState({
        skills: {
          ...skills,
          [category]: [...skills[category], inputValues[category]],
        },
        inputValues: { ...inputValues, [category]: "" },
      });
    }
  };

  handleDeleteCategory = (category) => {
    const { skills } = this.state;

    this.setState({
      skills: Object.entries(skills)
        .filter(([key]) => key !== category)
        .reduce((obj, [key, value]) => {
          obj[key] = value;
          return obj;
        }, {}),
    });
  };

  renderInput(category, skills, inputValues) {
    return (
      Object.entries(skills).map(([category, skills]) => (
        <div key={category}>
          <h3>{category}</h3>
          <button onClick={() => this.handleDeleteCategory(category)}>Delete Category</button>
          <ul>
            {skills.map((skill, index) => (
              <div key={uuidv4()}> 
                <li>{skill}</li>
                <button>Delete Skill</button>
              </div>
            ))}
          </ul>
          <input
            type="text"
            name="skill"
            placeholder="Skill"
            value={inputValues[category] || ""}
            onChange={this.handleSkillChange(category)}
          />
          <button onClick={(e) => this.addSkill(e, category)}>
            Add Skill
          </button>
        </div>
      )) 
    );
  }

  render() {
    const { category, skills, inputValues } = this.state;

    return (
      <div>
        <h2>Skills</h2>
        <input
          type="text"
          name="category"
          placeholder="Skill category"
          value={category}
          onChange={this.handleCategoryChange}
        />
        <button onClick={this.addCategory}>Add Category</button>
        {this.renderInput(category, skills, inputValues)}
      </div>
    );
  }
}

export default Skills;

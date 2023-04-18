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
        skills: { ...skills, [category]: {} },
        category: "",
        intputValues: { ...this.state.inputValues, [category]: "" },
      });
    }
  };

  addSkill = (category) => {
    const { skills, inputValues } = this.state;
    const skillId = uuidv4();

    if (category && inputValues[category] && skills[category]) {
      this.setState({
        skills: {
          ...skills,
          [category]: { ...skills[category], [skillId]: inputValues[category] },
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

  handleDeleteSkill = (category, skillId) => {
    const { skills } = this.state;

    this.setState({
      skills: {
        ...skills,
        [category]: Object.entries(skills[category])
          .filter(([key]) => key !== skillId)
          .reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
          }, {}),
      },
    });
  };

  renderInput(skills, inputValues) {
    return Object.entries(skills).map(([category, skills]) => (
      <div key={category}>
        <h3>{category}</h3>
        <button onClick={() => this.handleDeleteCategory(category)}>
          Delete Category
        </button>
        <ul>
          {Object.entries(skills).map(([skillId, skill]) => (
            <div key={skillId}>
              <li>{skill}</li>
              <button onClick={() => this.handleDeleteSkill(category, skillId)}>
                Delete Skill
              </button>
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
        <button onClick={() => this.addSkill(category)}>Add Skill</button>
      </div>
    ));
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
        {this.renderInput(skills, inputValues)}
      </div>
    );
  }
}

export default Skills;

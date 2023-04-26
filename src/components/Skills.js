import "./Skills.css";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: props.data.category || "",
      skills: props.data.skills || {},
      inputValues: props.data.inputValues || {},
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        category: this.props.data.category || "",
        skills: this.props.data.skills || {},
        inputValues: this.props.data.inputValues || {},
      });
    }
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
      this.setState(
        {
          skills: { ...skills, [category]: {} },
          category: "",
          intputValues: { ...this.state.inputValues, [category]: "" },
        },
        () => this.props.onUpdate(this.state)
      );
    }
  };

  addSkill = (category) => {
    const { skills, inputValues } = this.state;
    const skillId = uuidv4();

    if (category && inputValues[category] && skills[category]) {
      this.setState(
        {
          skills: {
            ...skills,
            [category]: {
              ...skills[category],
              [skillId]: inputValues[category],
            },
          },
          inputValues: { ...inputValues, [category]: "" },
        },
        () => this.props.onUpdate(this.state)
      );
    }
  };

  handleDeleteCategory = (category) => {
    const { skills } = this.state;

    this.setState(
      {
        skills: Object.entries(skills)
          .filter(([key]) => key !== category)
          .reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
          }, {}),
      },
      () => this.props.onUpdate(this.state)
    );
  };

  handleDeleteSkill = (category, skillId) => {
    const { skills } = this.state;

    this.setState(
      {
        skills: {
          ...skills,
          [category]: Object.entries(skills[category])
            .filter(([key]) => key !== skillId)
            .reduce((obj, [key, value]) => {
              obj[key] = value;
              return obj;
            }, {}),
        },
      },
      () => this.props.onUpdate(this.state)
    );
  };

  renderInput(skills, inputValues) {
    return Object.entries(skills).map(([category, skills]) => (
      <div className="Skills-Root-2" key={category}>
        <div className="Category-Title">
          <h3>{category}</h3>
        </div>
        <button
          className="Skills-Delete-Category"
          onClick={() => this.handleDeleteCategory(category)}
        >
          <AiOutlineClose size />
        </button>

        <div className="Skills-Add">
          <input
            className="Skills-Skill-Input"
            type="text"
            name="skill"
            placeholder="Skill"
            value={inputValues[category] || ""}
            onChange={this.handleSkillChange(category)}
          />
          <button
            className="Skills-Skill-Add"
            onClick={() => this.addSkill(category)}
          >
            <AiOutlinePlus size />
          </button>
        </div>

        <div className="Skills-List">
          {Object.entries(skills).map(([skillId, skill]) => (
            <div className="Skills-Section" key={skillId}>
              <h3 className="Skills-Skill">{skill}</h3>
              <button
                className="Skills-Delete-Skill"
                onClick={() => this.handleDeleteSkill(category, skillId)}
              >
                <AiOutlineClose size />
              </button>
            </div>
          ))}
        </div>
      </div>
    ));
  }

  render() {
    const { category, skills, inputValues } = this.state;

    return (
      <div className="Skills-Root-1">
        <h2 className="Skills-Title">Skills</h2>
        <div className="Skills-Category">
          <input
            className="Skills-Category-Add"
            type="text"
            name="category"
            placeholder="Skill category"
            value={category}
            onChange={this.handleCategoryChange}
          />
          <button
            className="Skills-Category-Add-Btn"
            onClick={this.addCategory}
          >
            <AiOutlinePlus size />
          </button>
        </div>
        {this.renderInput(skills, inputValues)}
      </div>
    );
  }
}

export default Skills;

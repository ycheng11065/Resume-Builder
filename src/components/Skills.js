import React, {Component} from "react";

class Skills extends Component {
    constructor() {
        super()

        this.state = {
            category: "",
            skill: "",
            skills: {},
            inputValues: {},
        };
    }

    handleCategoryChange = (e) => {
        this.setState({ category: e.target.value });
    };

    handleSkillChange = (category) => (e) => {
        this.setState({ 
            inputValues: { ...this.inputValues, [category]: e.target.value },
        });
    };

    addCategory = () => {
        const { category, skills } = this.state;

        if (category && !skills[category]) {
            this.setState({
                skills: { ...skills, [category]: [] },
                category: "",
                intpuValues: { ...this.state.inputValues, [category]: "" },
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
                skill: "",
                inputValues: { ...inputValues, [category]: ""},
            });
        }
    };

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
                {Object.entries(skills).map(([category, skills]) => (
                    <div key={category}>
                        <h3>{category}</h3>
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={`${skill}-${index}`}>{skill}</li>
                            ))}
                        </ul>
                        <input
                            type="text"
                            name="skill"
                            placeholder="Skill"
                            value={inputValues[category] || ""}
                            onChange={this.handleSkillChange(category)}
                        />
                        <button onClick={(e) => this.addSkill(e, category)}>Add Skill</button>
                    </div>
                ))}
            </div>
        );
    }
}

export default Skills;
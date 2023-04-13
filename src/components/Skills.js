import React, {Component} from "react";

class Skills extends Component {
    constructor() {
        super()

        this.state = {
            category: "",
            skill: "",
            skills: {},
        };
    }

    handleCategoryChange = (e) => {
        this.setState({ category: e.target.value });
    };

    handleSkillChange = (e) => {
        this.setState({ skill: e.target.value });
    };

    addCategory = () => {
        const { category, skills } = this.state;

        if (category && !skills[category]) {
            this.setState({
                skills: { ...skills, [category]: [] },
                category: "",
            });
        }
    };

    addSkill = () => {
        const { category, skill, skills } = this.state;

        if (category && skill && skills[category]) {
            this.setState({
                skills: { ...skills, [category]: [...skills[category], skill] },
                skill: "",
            });
        }
    };

    render() {
        const { category, skill, skills } = this.state;

        return (
            <div>
                <input
                    type="text"
                    name="category"
                    placeholder="Skill category"
                    value={category}
                    onChange={this.handleCategoryChange}
                />
                <button onClick={this.addCategory}>Add Category</button>
                <input
                    type="text"
                    name="skill"
                    placeholder="Skill"
                    value={skill}
                    OnChange={this.handleSkillChange}
                />
                <button onClick={this.addSkill}>Add Skill</button>
                {Object.entries(skills).map(([category, skills]) => (
                    <div key={category}>
                        <h3>{category}</h3>
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={`${skill}-${index}`}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    }
}

export default Skills;
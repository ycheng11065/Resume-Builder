import React, {Component} from "react";

class Projects extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            technology: "",
            date: "",
            description: "",
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value})  
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
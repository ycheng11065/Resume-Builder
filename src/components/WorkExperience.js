import React, { Component } from "react"

class WorkExperience extends Component {
    constructor() {
        super()

        this.state = {
            position: "",
            company: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value});
    };

    render() {
        const { position, company, startDate, endDate, location, description } = this.state;

        return (
            <div>
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

export default WorkExperience
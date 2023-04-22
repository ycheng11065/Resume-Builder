import "./PersonalInfo.css";
import React, { Component } from "react";


class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.data.firstName || "",
      lastName: props.data.lastName || "",
      major: props.data.major || "",
      yearLevel: props.data.yearLevel || "",
      phone: props.data.phone || "",
      email: props.data.email || "",
      linkedin: props.data.linkedin || "",
      github: props.data.github || "",
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        firstName: this.props.data.firstName || "",
        lastName: this.props.data.lastName || "",
        major: this.props.data.major || "",
        yearLevel: this.props.data.yearLevel || "",
        phone: this.props.data.phone || "",
        email: this.props.data.email || "",
        linkedin: this.props.data.linkedin || "",
        github: this.props.data.github || "",
      });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => this.props.onUpdate(this.state));
  };

  render() {
    const {
      firstName,
      lastName,
      major,
      yearLevel,
      phone,
      email,
      linkedin,
      github,
    } = this.state;

    return (
      <div className="Profile-Root">
        <h2 className="Title">Personal Info</h2>
        <div className="Profile-Inputs">
          <input
            className="First-Name"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={this.handleChange}
          />
          <input
            className="Last-Name"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={this.handleChange}
          />
          <input
            className="Major"
            type="text"
            name="major"
            placeholder="Major"
            value={major}
            onChange={this.handleChange}
          />
          <input
            className="Year-Level"
            type="text"
            name="yearLevel"
            placeholder="Year level"
            value={yearLevel}
            onChange={this.handleChange}
          />
          <input
            className="Phone"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={this.handleChange}
          />
          <input
            className="Email"
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            className="Linkedin"
            type="text"
            name="linkedin"
            placeholder="Linkedin"
            value={linkedin}
            onChange={this.handleChange}
          />
          <input
            className="Github"
            type="text"
            name="github"
            placeholder="Github"
            value={github}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default PersonalInfo;

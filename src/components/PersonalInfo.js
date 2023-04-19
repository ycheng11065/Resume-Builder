import React, { Component } from "react";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      major: "",
      yearLevel: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
    };
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
      <div>
        <h2>Personal Info</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="major"
          placeholder="Major"
          value={major}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="yearLevel"
          placeholder="Year level"
          value={yearLevel}
          onChange={this.handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="linkedin"
          placeholder="Linkedin"
          value={linkedin}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="github"
          placeholder="Github"
          value={github}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default PersonalInfo;

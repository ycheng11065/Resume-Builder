import React, { Component } from "react";

class ResumePreview extends Component {
  render() {
    const { personalInfo, Education, WorkExperience, Projects, Skills } =
      this.props;

    return (
      <div className="Resume Preview">
        <div className="Personal-Profile">
          <h1>
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <h3>
            {personalInfo.major} Major, {personalInfo.yearLevel} Year
          </h3>
          <h3>
            {personalInfo.phone} ⋄ {personalInfo.email} ⋄{" "}
            {personalInfo.linkedin} ⋄ {personalInfo.github}
          </h3>
        </div>

        <div className="Education">

        </div>

        <div className="Work-Experience">

        </div>

        <div className="Technical-Projects">

        </div>

        <div className="Technical-Skills">

        </div>
      </div>
    );
  }
}

export default ResumePreview;

import React, { Component } from "react";

class ResumePreview extends Component {
  render() {
    const { personalInfo, education, workExperience, projects, skills } =
      this.props;

    return (
      <div className="Resume-Preview">
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
            <h2>EDUCATION</h2>
            {Object.keys(education).length > 0 && (
                Object.entries(education.inputValues).map(([school, schoolInfo]) => (
                    <h3 key={school}>{schoolInfo.schoolName}</h3>
                ))
            )}
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

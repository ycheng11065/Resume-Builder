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
          {Object.keys(education).length > 0 &&
            Object.entries(education.inputValues).map(
              ([school, schoolInfo]) => (
                <div key={school}>
                  <h3>
                    {schoolInfo.schoolName}, {schoolInfo.degree},{" "}
                    {personalInfo.major} Major
                  </h3>
                  <h4>
                    {schoolInfo.startDate} - {schoolInfo.endDate}
                  </h4>
                </div>
              )
            )}
        </div>

        <div className="Work-Experience">
          <h2>Work Experience</h2>
          {Object.keys(workExperience).length > 0 &&
            Object.entries(workExperience.inputValues).map(
              ([workId, workInfo]) => (
                <div key={workId}>
                  <h3>{workInfo.position}</h3>
                  <h4>
                    {workInfo.startDate} - {workInfo.endDate}
                  </h4>
                  <h4>{workInfo.company}</h4>
                  <h4>{workInfo.location}</h4>
                  <p>{workInfo.description}</p>
                </div>
              )
            )}
        </div>

        <div className="Technical-Projects"></div>

        <div className="Technical-Skills"></div>
      </div>
    );
  }
}

export default ResumePreview;

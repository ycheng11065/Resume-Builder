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
                  <pre>{workInfo.description}</pre>
                </div>
              )
            )}
        </div>

        <div className="Technical-Projects">
          <h2>Technical Projects</h2>
          {Object.keys(projects).length > 0 &&
            Object.entries(projects.inputValues).map(
              ([projectId, projectInfo]) => (
                <div key={projectId}>
                  <h3>{projectInfo.name} |</h3>
                  <h4>{projectInfo.technology}</h4>
                  <h4>{projectInfo.completionDate}</h4>
                  <pre>{projectInfo.description}</pre>
                </div>
              )
            )}
        </div>

        <div className="Technical-Skills">
          <h2>Technical Skills</h2>
          {Object.keys(skills).length > 0 &&
            Object.entries(skills.skills).map(([category, skillList]) => (
              <div key={category}>
                <h3>{category}</h3>
                <ul>
                  {Object.entriesskillList.map(([skillId, skill]) => (
                    <li key={skillId}>{skill},</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default ResumePreview;

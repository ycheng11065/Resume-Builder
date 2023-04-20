import React, { Component } from "react";
import "./ResumePreview.css";

class ResumePreview extends Component {
  render() {
    const { personalInfo, education, workExperience, projects, skills } =
      this.props;

    return (
      <div className="Resume-Preview">
        <div className="Resume-Preview-Container">
          <div className="Personal-Profile">
            <h1 id="Name">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            <h4>
              {personalInfo.major ? personalInfo.major + " Major" : ""}
              {personalInfo.yearLevel ? ", " + personalInfo.yearLevel + " year" : ""}
            </h4>
            <h4>
              {personalInfo.phone}
              {personalInfo.email ? " ⋄ " + personalInfo.email : ""}
              {personalInfo.linkedin ? " ⋄ " + personalInfo.linkedin : ""}
              {personalInfo.github ? " ⋄ " + personalInfo.github : ""}
            </h4>
          </div>

          {Object.keys(education).length > 0 &&
            Object.keys(education.inputValues).length > 0 &&
            education.items.length > 0 && (
              <div className="Education">
                <h3 className="Section-Title">EDUCATION</h3>
                {Object.entries(education.inputValues).map(
                  ([school, schoolInfo]) => (
                    <div id="Education-Info" key={school}>
                      <h4>
                        {schoolInfo.schoolName}, {schoolInfo.degree},{" "}
                        {personalInfo.major} Major
                      </h4>
                      <h4>
                        {schoolInfo.startDate} - {schoolInfo.endDate}
                      </h4>
                    </div>
                  )
                )}
              </div>
            )}

          {Object.keys(workExperience).length > 0 &&
            Object.keys(workExperience.inputValues).length > 0 &&
            workExperience.items.length > 0 && (
              <div className="Work-Experience">
                <h3 className="Section-Title">WORK EXPERIENCE</h3>
                {Object.entries(workExperience.inputValues).map(
                  ([workId, workInfo]) => (
                    <div className="Work-Section" key={workId}>
                      <h4 className="Work-Position">{workInfo.position}</h4>
                      <h4 className="Work-Date">
                        {workInfo.startDate} - {workInfo.endDate}
                      </h4>
                      <h4 className="Work-Company">{workInfo.company}</h4>
                      <h4 className="Work-Location">{workInfo.location}</h4>
                      <pre className="Work-Description">{workInfo.description}</pre>
                    </div>
                  )
                )}
              </div>
            )}

          {Object.keys(projects).length > 0 &&
            Object.keys(projects.inputValues).length > 0 &&
            projects.items.length > 0 && (
              <div className="Technical-Projects">
                <h3 className="Section-Title">TECHNICAL PROJECTS</h3>
                {Object.entries(projects.inputValues).map(
                  ([projectId, projectInfo]) => (
                    <div className="Project-Section" key={projectId}>
                      <div className="Project-Header">
                        <div className="Project-Title">
                          <h4 className="Project-Name">{projectInfo.name} | </h4>
                          <h4 className="Project-Tech"><i>{projectInfo.technology}</i></h4>
                        </div>
                        <h4 className="Project-Date">{projectInfo.completionDate}</h4>
                      </div>
                      <pre className="Project-Description">{projectInfo.description}</pre>
                    </div>
                  )
                )}
              </div>
            )}

          {Object.keys(skills).length > 0 &&
            Object.keys(skills.skills).length > 0 && (
              <div className="Technical-Skills">
                <h3 className="Section-Title">TECHNICAL SKILLS</h3>
                {Object.entries(skills.skills).map(([category, skillList]) => (
                  <div className="Skill-Section" key={category}>
                    <h4>{category}</h4>
                    <p>
                      {Object.entries(skillList)
                        .map(([skillId, skill]) => skill)
                        .join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default ResumePreview;

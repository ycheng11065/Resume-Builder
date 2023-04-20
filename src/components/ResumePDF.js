import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import ResumePreview from "./ResumePreview";

class ResumePDF extends Component {
 
  render() {
    const { personalInfo, education, workExperience, projects, skills } =
      this.props;

    return (
      <document>
        <page>
          <ResumePreview />
        </page>
      </document>
    );
  }
}

export default ResumePDF;

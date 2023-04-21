import React, { Component } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePreviewPDF from "./ResumePreviewPDF";

class ResumePDF extends Component {
 
  render() {
    return (
      <div>
        <PDFDownloadLink
            document={<ResumePreviewPDF {...this.props}/>}
            fileName="resume.pdf"
        >
            {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download PDF"
            }
        </PDFDownloadLink>
      </div>
    );
  }
}

export default ResumePDF;

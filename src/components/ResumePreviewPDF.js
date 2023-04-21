import React, { Component } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({});

class ResumePreviewPDF extends Component {
  render() {
    const { personalInfo, education, workExperience, projects, skills } =
      this.props;

    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.PersonalProfile}>
            <Text style={styles.h1}>
              {personalInfo.firstName} {personalInfo.lastName}
            </Text>
            <Text style={styles.h4}>
              {personalInfo.major ? personalInfo.major + " Major" : ""}
              {personalInfo.yearLevel
                ? ", " + personalInfo.yearLevel + " year"
                : ""}
            </Text>
            <Text style={styles.h4}>
              {personalInfo.phone}
              {personalInfo.email ? " ⋄ " + personalInfo.email : ""}
              {personalInfo.linkedin ? " ⋄ " + personalInfo.linkedin : ""}
              {personalInfo.github ? " ⋄ " + personalInfo.github : ""}
            </Text>
          </View>

          {Object.keys(education).length > 0 &&
            Object.keys(education.inputValues).length > 0 &&
            education.items.length > 0 && (
              <View style={styles.Education}>
                <Text style={{ ...styles.SectionTitle, ...styles.h3 }}>EDUCATION</Text>
                {Object.entries(education.inputValues).map(
                  ([school, schoolInfo]) => (
                    <View style={styles.EducationSection} key={school}>
                      <Text style={{ ...styles.EducationInfo, ...styles.h4 }}>
                        {schoolInfo.schoolName}, {schoolInfo.degree},{" "}
                        {personalInfo.major} Major
                      </Text>
                      <Text style={{ ...styles.EducationDate, ...styles.h4 }}>
                        {schoolInfo.startDate} - {schoolInfo.endDate}
                      </Text>
                    </View>
                  )
                )}
              </View>
            )}

          {Object.keys(workExperience).length > 0 &&
            Object.keys(workExperience.inputValues).length > 0 &&
            workExperience.items.length > 0 && (
              <View style={styles.WorkExperience}>
                <Text style={{ ...styles.SectionTitle, ...styles.h3 }}>WORK EXPERIENCE</Text>
                {Object.entries(workExperience.inputValues).map(
                  ([workId, workInfo]) => (
                    <View style={styles.WorkSection} key={workId}>
                      <View style={styles.WorkHeader}>
                        <Text style={{ ...styles.WorkPosition, ...styles.h4 }}>
                            {workInfo.position}
                        </Text>
                        <Text style={{ ...styles.WorkDate, ...styles.h4 }}>
                            {workInfo.startDate} - {workInfo.endDate}
                        </Text>
                      </View>
                      <View style={styles.WorkHeader}>
                        <Text style={{ ...styles.WorkCompany, ...styles.h4 }}>{workInfo.company}</Text>
                        <Text style={{ ...styles.WorkLocation, ...styles.h4 }}>
                            {workInfo.location}
                        </Text>
                      </View>
                      <Text style={{ ...styles.WorkDescription, ...styles.p }}>
                        {workInfo.description}
                      </Text>
                    </View>
                  )
                )}
              </View>
            )}

          {Object.keys(projects).length > 0 &&
            Object.keys(projects.inputValues).length > 0 &&
            projects.items.length > 0 && (
              <View style={styles.TechnicalProjects}>
                <Text style={{ ...styles.SectionTitle, ...styles.h3 }}>TECHNICAL PROJECTS</Text>
                {Object.entries(projects.inputValues).map(
                  ([projectId, projectInfo]) => (
                    <View style={styles.ProjectSection} key={projectId}>
                      <View style={styles.ProjectHeader}>
                        <View style={styles.ProjectTitle}>
                          <Text style={{ ...styles.ProjectName, ...styles.h4 }}>
                            {projectInfo.name} |{" "}
                          </Text>
                          <Text style={{ ...styles.ProjectTech, ...styles.p }}>
                            {projectInfo.technology}
                          </Text>
                        </View>
                        <Text style={{ ...styles.ProjectDate, ...styles.h4 }}>
                          {projectInfo.completionDate}
                        </Text>
                      </View>
                      <Text style={{ ...styles.ProjectDescription, ...styles.p }}>
                        {projectInfo.description}
                      </Text>
                    </View>
                  )
                )}
              </View>
            )}

          {Object.keys(skills).length > 0 &&
            Object.keys(skills.skills).length > 0 && (
              <View style={styles.TechnicalSkills}>
                <Text style={{ ...styles.SectionTitle, ...styles.h3 }}>TECHNICAL SKILLS</Text>
                {Object.entries(skills.skills).map(([category, skillList]) => (
                  <View style={styles.SkillSection} key={category}>
                    <Text style={{ ...styles.SkillCategory, ...styles.h4 }}>{category}:</Text>
                    <Text style={{ ...styles.SkillList, ...styles.p }}>
                        {Object.entries(skillList)
                          .map(([skillId, skill]) => skill)
                          .join(", ")}
                    </Text>
                  </View>
                ))}
              </View>
            )}

        </Page>
      </Document>
    );
  }
}

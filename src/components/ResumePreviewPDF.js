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
            <Text>
              {personalInfo.firstName} {personalInfo.lastName}
            </Text>
            <Text>
              {personalInfo.major ? personalInfo.major + " Major" : ""}
              {personalInfo.yearLevel
                ? ", " + personalInfo.yearLevel + " year"
                : ""}
            </Text>
            <Text>
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
                <Text style={styles.SectionTitle}>EDUCATION</Text>
                {Object.entries(education.inputValues).map(
                  ([school, schoolInfo]) => (
                    <View style={styles.EducationSection} key={school}>
                      <Text style={styles.EducationInfo}>
                        {schoolInfo.schoolName}, {schoolInfo.degree},{" "}
                        {personalInfo.major} Major
                      </Text>
                      <Text style={styles.EducationDate}>
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
                <Text style={styles.SectionTitle}>WORK EXPERIENCE</Text>
                {Object.entries(workExperience.inputValues).map(
                  ([workId, workInfo]) => (
                    <View style={styles.WorkSection} key={workId}>
                      <Text style={styles.WorkPosition}>
                        {workInfo.position}
                      </Text>
                      <Text style={styles.WorkDate}>
                        {workInfo.startDate} - {workInfo.endDate}
                      </Text>
                      <Text style={styles.WorkCompany}>{workInfo.company}</Text>
                      <Text style={styles.WorkLocation}>
                        {workInfo.location}
                      </Text>
                      <Text style={styles.WorkDescription}>
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
                <Text style={styles.SectionTitle}>TECHNICAL PROJECTS</Text>
                {Object.entries(projects.inputValues).map(
                  ([projectId, projectInfo]) => (
                    <View style={styles.ProjectSection} key={projectId}>
                      <Text style={styles.ProjectHeader}>
                        <View style={styles.ProjectTitle}>
                          <Text style={styles.ProjectName}>
                            {projectInfo.name} |{" "}
                          </Text>
                          <Text style={styles.ProjectTech}>
                            {projectInfo.technology}
                          </Text>
                        </View>
                        <Text style={styles.ProjectDate}>
                          {projectInfo.completionDate}
                        </Text>
                      </Text>
                      <Text style={styles.ProjectDescription}>
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
                <Text style={styles.SectionTitle}>TECHNICAL SKILLS</Text>
                {Object.entries(skills.skills).map(([category, skillList]) => (
                  <View style={styles.SkillSection} key={category}>
                    <Text style={styles.SkillCategory}>{category}:</Text>
                    <Text style={styles.SkillList}>
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

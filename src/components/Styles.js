import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    page: {
        size: "letter",
    },
    h1: {
        fontSize: "32px",
        fontWeight: "bold",
    },
    h2: {
        fontSize: "24px",
        fontWeight: "bold",
    },
    h3: {
        fontSize: "18px",
        fontWeight: "bold",
    },
    h4: {
        fontSize: "16px",
        fontWeight: "bold",
    },
    p: {
        fontSize: "16px",
    },
    resumePreview: {
        backgroundColor: "#F2EECB",  
        width: "50rem",
        paddingBottom: "64.7",
        position: "relative",
    },
    resumePreviewContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        marginRight: "2rem",
        marginLeft: "2rem",
    },
    personalProfile: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    sectionTitle: {
        textAlign: "left",
        borderBottom: "2px solid black",
    },
    education: {
        marginTop: "0.5rem",
    },
    educationSection: {
        marginTop: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
    },
    workExperience: {
        position: "relative",
        marginTop: "0.5rem",
    },
    workSection: {
        marginBottom: "0.5rem",
        marginTop: "0.5rem",
    },
    workHeader: {
        display: "flex",
        justifyContent: "space-between",
    },
    workPosition: {
        width: "auto",
        height: "auto",
    },
    workDate: {
        textAlign: "right",
    },
    workLocation: {
        textAlign: "right",
    },
    workDescription: {
        marginTop: "0.5rem",
    },
    projectSection: {
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
    },
    projectHeader: {
        display: "flex",
        justifyContent: "space-between",
    },
    projectTitle: {
        display: "flex",
    },
    projectTech: {
        paddingLeft: "0.2rem",
    },
    projectDescription: {
        marginBottom: "0.5rem",
    },
    skillSection: {
        display: "flex",
        marginTop: "0.5rem",
    },
    skillList: {
        paddingLeft: "0.4rem",
    },
});
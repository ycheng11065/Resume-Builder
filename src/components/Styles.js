import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#F2EECB",
        paddingRight: "32px",
        paddingLeft: "32px",
        paddingTop: "25px",
        size: "letter",
    },
    h1: {
        fontSize: "24pt",
        fontWeight: "bold",
    },
    h2: {
        fontSize: "18pt",
        fontWeight: "bold",
    },
    h3: {
        fontSize: "13.5pt",
        fontWeight: "bold",
    },
    h4: {
        fontSize: "12pt",
        fontWeight: "bold",
    },
    p: {
        fontSize: "12pt",
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
        marginTop: "6pt",
        textAlign: "left",
        borderBottom: "2px solid black",
        // paddingBottom: "6pt",
    },
    education: {
        marginTop: "6pt",
    },
    educationSection: {
        marginTop: "6pt",
        marginBottom: "6pt",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    workExperience: {
        position: "relative",
        // marginTop: "0.5rem",
    },
    workSection: {
        // marginBottom: "6pt",
        marginTop: "6pt",
    },
    workHeader: {
        display: "flex",
        flexDirection: "row",
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
        marginTop: "6pt",
    },
    projectSection: {
        marginTop: "6pt",
        // marginBottom: "6pt",
    },
    projectHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    projectTitle: {
        display: "flex",
        flexDirection: "row",
    },
    projectTech: {
        paddingLeft: "0.2rem",
    },
    projectDescription: {
        marginBottom: "0.5rem",
    },
    skillSection: {
        display: "flex",
        flexDirection: "row",
        marginTop: "0.5rem",
    },
    skillList: {
        paddingLeft: "0.4rem",
    },
});
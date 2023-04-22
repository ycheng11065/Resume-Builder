import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    page: {
        fontFamily: "CMU",
        flexDirection: "column",
        // backgroundColor: "#F2EECB",
        paddingRight: "24pt",
        paddingLeft: "24pt",
        paddingTop: "15pt",
        size: "letter",
    },
    h1: {
        fontSize: "17pt",
        fontWeight: "bold",
    },
    h2: {
        fontSize: "14pt",
        fontWeight: "bold",
    },
    h3: {
        fontSize: "12pt",
        fontWeight: "bold",
    },
    h4: {
        fontSize: "11pt",
        fontWeight: "bold",
    },
    p: {
        fontSize: "11pt",
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
        marginTop: "5pt",
        textAlign: "left",
        borderBottom: "2px solid black",
    },
    education: {
        marginTop: "6pt",
    },
    educationSection: {
        marginTop: "6pt",
        marginBottom: "4pt",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    workExperience: {
        position: "relative",
    },
    workSection: {
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
        marginTop: "2pt",
        marginLeft: "12pt",
    },
    projectSection: {
        marginTop: "4pt",
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
        fontStyle: "italic",
        paddingLeft: "3pt",
    },
    projectDescription: {
        marginBottom: "6pt",
        marginLeft: "10pt",
    },
    skillSection: {
        display: "flex",
        flexDirection: "row",
        marginTop: "4pt",
    },
    skillList: {
        fontStyle: "italic",
        paddingLeft: "5pt",
    },
});
import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
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
        display: "grid",
        gridTemplateRows: "auto auto auto",
        gridTemplateColumns: "auto auto",
        gridTemplateAreas: '
            "position date"
            "company location"
            "description description"
        ',
        marginBottom: "0.5rem",
        marginTop: "0.5rem",
    }
    
    .Work-Position {
        width: auto;
        height:auto;
        grid-area: position;
    }
    
    .Work-Date {
        grid-area: date;
        text-align: right;
    }
    
    .Work-Company {
        grid-area: company;
    }
    
    .Work-Location {
        grid-area: location;
        text-align: right;
    }
    
    .Work-Description {
        grid-area: description;
        margin-top: 0.5rem;
    }
    
    .Project-Section {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
    
    .Project-Header {
        display: flex;
        justify-content: space-between;
    }
    
    .Project-Title {
        display: flex;
    }
    
    .Project-Tech {
        padding-left: 0.2rem;
    }
    
    .Project-Description {
        margin-bottom: 0.5rem;
    }
    
    .Skill-Section {
        display: flex;
        margin-top: 0.5rem;
    }
    
    .Skill-List {
        padding-left: 0.4rem;
    }

});
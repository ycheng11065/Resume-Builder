import "./Education.css";
import React from "react";
import DynamicComponents from "./DynamicComponents";

class Education extends DynamicComponents {
  constructor(props) {
    super(props, {
      itemName: "School",
      title: "Education",
      defaultInputValues: {
        schoolName: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    });
  }

  renderInputs(schoolId, inputValues, handleChange) {
    return (
      <div className="Education-Root">
        <input
          className= "Education-Name"
          type="text"
          name="schoolName"
          placeholder="School Name"
          value={inputValues[schoolId]["schoolName"]}
          onChange={handleChange}
        />
        <input
          className= "Education-Degree"
          type="text"
          name="degree"
          placeholder="Degree"
          value={inputValues[schoolId]["degree"]}
          onChange={handleChange}
        />
        <input
          className= "Education-Date-Start"
          type="text"
          name="startDate"
          placeholder="Start date"
          value={inputValues[schoolId]["startDate"]}
          onChange={handleChange}
        />
        <input
          className= "Education-Date-End"
          type="text"
          name="endDate"
          placeholder="End Date"
          value={inputValues[schoolId]["endDate"]}
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default Education;

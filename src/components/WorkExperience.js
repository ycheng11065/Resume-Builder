import React from "react";
import DynamicComponents from "./DynamicComponents";

class WorkExperience extends DynamicComponents {
  constructor(props) {
    super(props, {
      itemName: "WorkExperience",
      title: "Work Experience",
      defaultInputValues: {
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    });
  }

  renderInputs(workId, inputValues, handleChange) {
    return (
      <div className="Work-Root">
        <div className="Work-Input">
          <input
            className="Work-Position"
            type="text"
            name="position"
            placeholder="Position"
            value={inputValues[workId]["position"]}
            onChange={handleChange}
          />
          <input
            className="Work-Company"
            type="text"
            name="company"
            placeholder="Company"
            value={inputValues[workId]["company"]}
            onChange={handleChange}
          />
          <input
            className="Work-Start-Date"
            type="text"
            name="startDate"
            placeholder="Start date"
            value={inputValues[workId]["startDate"]}
            onChange={handleChange}
          />
          <input
            className="Work-End-Date"
            type="text"
            name="endDate"
            placeholder="End date"
            value={inputValues[workId]["endDate"]}
            onChange={handleChange}
          />
          <input
            className="Work-Location"
            type="text"
            name="location"
            placeholder="Location"
            value={inputValues[workId]["location"]}
            onChange={handleChange}
          />
          <textarea
            className="Work-Description"
            name="description"
            placeholder="Description"
            value={inputValues[workId]["description"]}
            onChange={handleChange}
            rows="4"
            cols="50"
          />
        </div>        
      </div>
    );
  }
}

export default WorkExperience;

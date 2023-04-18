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
      <div>
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={inputValues[workId]["position"]}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={inputValues[workId]["company"]}
          onChange={handleChange}
        />
        <input
          type="date"
          name="startDate"
          placeholder="Start date"
          value={inputValues[workId]["startDate"]}
          onChange={handleChange}
        />
        <input
          type="date"
          name="endDate"
          placeholder="End date"
          value={inputValues[workId]["endDate"]}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={inputValues[workId]["location"]}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={inputValues[workId]["description"]}
          onChange={handleChange}
          rows="4"
          cols="50"
        />
      </div>
    );
  }
}

export default WorkExperience;

import React from "react";
import DynamicComponents from "./DynamicComponents";

class Projects extends DynamicComponents {
  constructor(props) {
    super(props, {
      itemName: "Projects",
      title: "Technical Projects",
      defaultInputValues: {
        name: "",
        technology: "",
        completionDate: "",
        description: "",
      },
    });
  }

  renderInputs(projectId, inputValues, handleChange) {
    return (
      <div>
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={inputValues[projectId]["name"]}
          onChange={handleChange}
        />
        <input
          type="text"
          name="technology"
          placeholder="Technology used"
          value={inputValues[projectId]["technology"]}
          onChange={handleChange}
        />
        <input
          type="text"
          name="completionDate"
          placeholder="Completion Date"
          value={inputValues[projectId]["completionDate"]}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={inputValues[projectId]["description"]}
          onChange={handleChange}
          rows="4"
          cols="50"
        />
      </div>
    );
  }
}

export default Projects;

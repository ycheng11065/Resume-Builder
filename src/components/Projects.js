import "./Project.css"
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
      <div className="Project-Root">
        <div className="Row1">
          <input
            className="Project-Name"
            type="text"
            name="name"
            placeholder="Project Name"
            value={inputValues[projectId]["name"]}
            onChange={handleChange}
          />
          <input
            className="Project-Tech"
            type="text"
            name="technology"
            placeholder="Technology used"
            value={inputValues[projectId]["technology"]}
            onChange={handleChange}
          />
          <input
            className="Project-Date"
            type="text"
            name="completionDate"
            placeholder="Completion Date"
            value={inputValues[projectId]["completionDate"]}
            onChange={handleChange}
          />
        </div>
        <div className="Row2">
          <textarea
            className="Project-Description"
            name="description"
            placeholder="Description"
            value={inputValues[projectId]["description"]}
            onChange={handleChange}
            rows="4"
            cols="50"
          />
        </div>
      </div>
    );
  }
}

export default Projects;

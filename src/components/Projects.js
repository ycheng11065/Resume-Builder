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
        date: "",
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
          name="date"
          placeholder="Date"
          value={inputValues[projectId]["date"]}
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

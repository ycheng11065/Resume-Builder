import "./ButtonManager.css";
import React, { Component } from "react";
import { TbTools } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { CgWorkAlt } from "react-icons/cg";
import { RiLightbulbLine } from "react-icons/ri";
import { SlGraduation } from "react-icons/sl";

class ButtonManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeButton: "profile",
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.resetStatus !== prevProps.resetStatus) {
      this.setState({ activeButton: "profile" }, () => {
        this.props.resetCallback();
      });
    }
  }

  handleButtonClick = (buttonType) => {
    this.setState({ activeButton: buttonType });
    if (this.props.onButtonClick) {
      this.props.onButtonClick(buttonType);
    }
  };

  getButtonClass = (buttonType) => {
    return this.state.activeButton === buttonType ? "Active-Button" : "";
  };

  render() {
    return (
      <div className="Button-Manager-Root">
        <button
          className={`Button-Profile ${this.getButtonClass("profile")}`}
          onClick={() => this.handleButtonClick("profile")}
        >
          <CgProfile className="Button-Icon" />
        </button>
        <button
          className={`Button-Education ${this.getButtonClass("education")}`}
          onClick={() => this.handleButtonClick("education")}
        >
          <SlGraduation className="Button-Icon" />
        </button>
        <button
          className={`Button-Work ${this.getButtonClass("work")}`}
          onClick={() => this.handleButtonClick("work")}
        >
          <CgWorkAlt className="Button-Icon" />
        </button>
        <button
          className={`Button-Project ${this.getButtonClass("project")}`}
          onClick={() => this.handleButtonClick("project")}
        >
          <RiLightbulbLine className="Button-Icon" />
        </button>
        <button
          className={`Button-Skills ${this.getButtonClass("skill")}`}
          onClick={() => this.handleButtonClick("skill")}
        >
          <TbTools className="Button-Icon" />
        </button>
      </div>
    );
  }
}

export default ButtonManager;

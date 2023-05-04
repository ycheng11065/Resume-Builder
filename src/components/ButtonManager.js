import "./ButtonManager.css";
import React, { Component } from "react";
import { TbTools } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { CgWorkAlt } from "react-icons/cg";
import { RiLightbulbLine } from "react-icons/ri";
import { SlGraduation } from "react-icons/sl";




class ButtonManager extends Component {
    handleButtonClick = (buttonType) => {
        if (this.props.onButtonClick) {
            this.props.onButtonClick(buttonType);
        }
    }


    render() {

        return (
            <div className="Button-Manager-Root">
                <button className="Button-Profile" onClick={() => this.handleButtonClick("profile")}> 
                    <CgProfile className="Button-Icon"/>
                </button>   
                <button className="Button-Education" onClick={() => this.handleButtonClick("education")}> 
                    <SlGraduation className="Button-Icon"/>
                </button>   
                <button className="Button-Work" onClick={() => this.handleButtonClick("work")}> 
                    <CgWorkAlt className="Button-Icon"/>
                </button>   
                <button className="Button-Project" onClick={() => this.handleButtonClick("project")}> 
                    <RiLightbulbLine className="Button-Icon"/>
                </button>   
                <button className="Button-Skills" onClick={() => this.handleButtonClick("skill")}> 
                    <TbTools className="Button-Icon"/>
                </button>   
            </div>
        );
    }
}

export default ButtonManager;
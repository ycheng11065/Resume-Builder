import "./ButtonManager.css";
import React, { Component } from "react";
import { TbTools } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { CgWorkAlt } from "react-icons/cg";
import { RiLightbulbLine } from "react-icons/ri";
import { SlGraduation } from "react-icons/sl";




class ButtonManager extends Component {
    render() {

        return (
            <div className="Button-Manager-Root">
                <button className="Button-Profile"> 
                    <CgProfile size/>
                </button>   
                <button className="Button-Education"> 
                    <SlGraduation size/>
                </button>   
                <button className="Button-Work"> 
                    <CgWorkAlt size/>
                </button>   
                <button className="Button-Project"> 
                    <RiLightbulbLine size/>
                </button>   
                <button className="Button-Skills"> 
                    <TbTools size/>
                </button>   
            </div>
        );
    }
}

export default ButtonManager;
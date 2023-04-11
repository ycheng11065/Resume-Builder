import './App.css';
import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo"


class App extends Component{


  render() {

    return (
      <div>
        <h1>Resume Builder</h1>
        <PersonalInfo />
      </div>
    );
  }
}

export default App;

// Field to fill in the required category info
// A preview box to see the progress of the resume

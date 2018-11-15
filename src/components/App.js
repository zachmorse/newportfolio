import React, { Component } from "react";
import "../styles/App.css";

// import TonePlayer from "./TonePlayer";
import Mainframe from "./Mainframe";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ border: "1px solid white", margin: "auto" }}
      >
        {/* <section className="startContainer">
          <div className="startCopy">
            <h1 className="startTextBox">ZACH MORSE</h1>
            <h3 className="startTextBox">*DEVLOPER*</h3>
            <h3 className="startTextBox">enthusiast</h3>
          </div>
        </section> */}
        {/* <TonePlayer /> */}
        <Mainframe />
      </div>
    );
  }
}

export default App;

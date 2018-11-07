import React, { Component } from "react";
import "./styles/App.css";

import portrait from "./images/ZachProfile.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="container">
          <figure className="image">
            <img className="is-square" alt="" src={portrait} />
          </figure>
          <h1>TOUCH TO START</h1>
        </div> */}
        <div className="startContainer">
          <div className="startCopy">
            <h1 className="startTextBox">/// ZACH MORSE ///</h1>
            <h3 className="startTextBox">// *DEVLOPER* //</h3>
            <h3 className="startTextBox">// enthusiast //</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

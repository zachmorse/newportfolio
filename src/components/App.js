import React, { Component } from "react";
import "../styles/App.css";

// import TonePlayer from "./TonePlayer";
import Mainframe from "./Mainframe";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mainframe />
      </div>
    );
  }
}

export default App;

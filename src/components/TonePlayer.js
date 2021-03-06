import React, { Component } from "react";
import styled from "styled-components";
// import Tone from "tone";
import "../styles/App.css";
import {
  GridContainer,
  GridItem,
  MasterAlign
} from "../styledComponents/index";

// import bass from "../audio/bass.mp3";
// import drums from "../audio/Drums.mp3";
// import keys1 from "../audio/keys1.mp3";
// import keys2 from "../audio/keys2.mp3";
// import arp from "../audio/arp.mp3";

// const synthA = new Tone.Synth({
//   oscillator: {
//     type: "fmsquare",
//     modulationType: "sawtooth",
//     modulationIndex: 3,
//     harmonicity: 6.7
//   },
//   envelope: {
//     attack: 0.001,
//     decay: 0.1,
//     sustain: 0.1,
//     release: 0.1
//   }
// }).toMaster();

// const samples = {
//   C2: bass,
//   C3: drums,
//   keys1: keys1,
//   keys2: keys2,
//   arp: arp
// };

// const samplerA = new Tone.Sampler(samples).toMaster();

// const player = new Tone.Player({
//   url: "../audio/Drums.mp3",
//   loop: true
// }).toMaster();

export default class TonePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false
    };
  }

  synthConfig = () => {
    console.log("preparing synth...");
  };

  toggleActive = e => {
    console.log(e);
    this.setState({
      active: !this.state.active
    });
    // samplerA.triggerAttack("C3");
  };

  playSample = () => {
    // player.start();
    console.log("Sample should play on click");
  };

  componentDidMount() {
    // // this.synthConfig();
    // var buffer = new Tone.Buffer("path/to/sound.mp3", function() {
    //   //the buffer is now available.
    //   buffer.get();
    // });
    // window.addEventListener("mousedown", this.playSample);
  }

  render() {
    return (
      <div>
        <MasterAlign>
          <GridContainer>
            <GridItem
              onClick={this.toggleActive}
              active={this.state.active}
              val="1"
            >
              <span>drms</span>
            </GridItem>
            <GridItem
              onClick={this.toggleActive}
              active={this.state.active}
              val="2"
            >
              <span>bss</span>
            </GridItem>
            <GridItem
              onClick={this.toggleActive}
              active={this.state.active}
              val="3"
            >
              <span>pd1</span>
            </GridItem>
            <GridItem
              onClick={this.toggleActive}
              active={this.state.active}
              val="4"
            >
              <span>pd2</span>
            </GridItem>
            <GridItem
              onClick={this.toggleActive}
              active={this.state.active}
              val="5"
            >
              <span>syn</span>
            </GridItem>
            <GridItem
              onClick={this.toggleActive}
              active={this.state.active}
              val="6"
            >
              6
            </GridItem>
            <GridItem
              onClick={this.toggleActive}
              active={this.state.active}
              val="7"
            >
              7
            </GridItem>
            <GridItem
              onClick={this.toggleActive}
              active={this.state.active}
              val="8"
            >
              8
            </GridItem>
          </GridContainer>
        </MasterAlign>
      </div>
    );
  }
}

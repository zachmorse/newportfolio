import React, { Component } from "react";
import styled, { css } from "styled-components";
import Tone from "tone";
import "../styles/App.css";

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
    // var sampler = new Tone()
    //   .Sampler({
    //     bass: "../audio/bass.wav",
    //     drums: "../audio/drums.wav",
    //     keys1: "../audio/keys1.wav",
    //     keys2: "../audio/keys2.wav",
    //     arp: "../audio/arp.wav"
    //   })
    //   .toMaster();
  };

  toggleActive = e => {
    console.log(e);
    this.setState({
      active: !this.state.active
    });
  };

  playSamples = e => {
    e.preventDefault();
    console.log("synths are playing");
  };

  componentDidMount() {
    this.synthConfig();
  }

  render() {
    const GridContainer = styled.div`
      display: grid;
      grid-template-columns: 50px 50px 50px 50px 50px 50px;
      grid-template-rows: 50px 50px 50px 50px 50px 50px;
      grid-gap: 10px;
      width: 55%;
      margin: auto;
      padding-top: 2rem;
      border: 2px dotted purple;
    `;

    const GridItem = styled.div`
      background-color: ${props => (props.active ? "#febc5b" : "transparent")};
      color: ${props => (props.active ? "black" : "inherit")};
      grid-column-start: ${props => props.column};
      grid-row-start: ${props => props.row};

      border: 1px solid #febc5b;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    const MasterAlign = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: row;
    `;

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

import React, { Component } from "react";
import styled from "styled-components";
// import randomWords from "random-words";
import { string1, string2, string3, string4 } from "../dummyData/dummyData";

// import TonePlayer from "./TonePlayer";

const CollapseContainer = styled.div`
  display: flex;
`;

const CollapseBlock = styled.div`
  background-color: ${props => props.bgColor};
  width: ${props => (props.expanded ? "calc(100% - 90px)" : "30px")};

  height: 100vh;
  transition: width 250ms ease-in-out;
  overflow: scroll;
  // padding: 0rem 1rem;
  display: grid;
  grid-template-columns: 40px calc(100% - 40px);
  grid-template-rows: 100%;
  grid-gap: 10px;
`;

export default class MainFrame extends Component {
  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeypress);
  };

  constructor(props) {
    super(props);
    this.state = {
      collapse1Expanded: true,
      collapse2Expanded: false,
      collapse3Expanded: false,
      collapse4Expanded: false
    };
  }

  handleKeypress = e => {
    // this.toggleExpand(e.key);
  };

  toggleExpand = e => {
    switch (e.target.id) {
      case "collapse1Expanded":
        this.setState({
          collapse1Expanded: true,
          collapse2Expanded: false,
          collapse3Expanded: false,
          collapse4Expanded: false
        });
        break;
      case "collapse2Expanded":
        this.setState({
          collapse1Expanded: false,
          collapse2Expanded: true,
          collapse3Expanded: false,
          collapse4Expanded: false
        });
        break;
      case "collapse3Expanded":
        this.setState({
          collapse1Expanded: false,
          collapse2Expanded: false,
          collapse3Expanded: true,
          collapse4Expanded: false
        });
        break;
      case "collapse4Expanded":
        this.setState({
          collapse1Expanded: false,
          collapse2Expanded: false,
          collapse3Expanded: false,
          collapse4Expanded: true
        });
        break;

      default:
        console.log("case not found");
    }
  };

  // toggleExpand = e => {
  //   let stateObject = this.state;
  //   let updatedState = {};
  //   let key = e.target.id;

  //   let existingState = Object.keys(this.state);
  //   let existingObjects = Object.values(this.state);
  //   console.log(existingState, existingObjects);

  //   for (let i = 0; i < existingState.length; i++) {
  //     // console.log(
  //     //   `Evaluating Key: ${key} against state property: ${existingState[i]}`
  //     // );

  //     // key === existingState[i]
  //     //   ? (stateObject = { ...stateObject, [key]: true })
  //     //   : (stateObject = { ...stateObject, [key]: false });

  //     switch (key === existingState[i]) {
  //       case true:
  //         console.log(
  //           `${key} DOES match the state property ${existingState[i]}!`
  //         );
  //         updatedState[key] = true;

  //         break;
  //       case false:
  //         console.log(
  //           `${key} does not match the state property ${existingState[i]}`
  //         );
  //         updatedState[key] = false;

  //         break;

  //       default:
  //         console.log("No Matches Found");
  //     }

  //     // key === existingState[i]
  //     //   ?  (stateObject = { ...stateObject, ...existingState })
  //     //   : this.setState({ key: false });
  //   }

  //   console.log("STATE OBJECT RETURNING FROM SWITCH STATEMENT:", updatedState);
  //   this.setState(stateObject);
  // };

  render() {
    return (
      <div>
        <CollapseContainer>
          <CollapseBlock
            expanded={this.state.collapse1Expanded}
            bgColor={"#4bdbfe"}
          >
            <div
              id="collapse1Expanded"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                writingMode: "vertical-rl",
                textOrientation: "upright",
                height: "100%"
              }}
              onClick={this.toggleExpand}
            >
              WHO
            </div>
            <div style={{ padding: 10 }}>
              <p>{string1}</p>
            </div>
          </CollapseBlock>
          <CollapseBlock
            expanded={this.state.collapse2Expanded}
            bgColor={"#5f84dd"}
          >
            <div
              id="collapse2Expanded"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                writingMode: "vertical-rl",
                textOrientation: "upright",
                height: "100%"
              }}
              onClick={this.toggleExpand}
            >
              WHAT
            </div>
            <div style={{ padding: 10 }}>
              <p>{string2}</p>
            </div>
          </CollapseBlock>
          <CollapseBlock
            expanded={this.state.collapse3Expanded}
            bgColor={"#ff9b9e"}
          >
            <div
              id="collapse3Expanded"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                writingMode: "vertical-rl",
                textOrientation: "upright",
                height: "100%"
              }}
              onClick={this.toggleExpand}
            >
              WHY
            </div>
            <div style={{ padding: 10 }}>
              <p>{string3}</p>
            </div>
          </CollapseBlock>
          <CollapseBlock
            expanded={this.state.collapse4Expanded}
            bgColor={"#46546e"}
          >
            <div
              id="collapse4Expanded"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                writingMode: "vertical-rl",
                textOrientation: "upright",
                height: "100%"
              }}
              onClick={this.toggleExpand}
            >
              HUH?
            </div>
            <div style={{ padding: 10 }}>
              <p>{string4}</p>
            </div>
          </CollapseBlock>
        </CollapseContainer>
      </div>
    );
  }
}

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
  width: ${props => (props.expanded ? "calc(100% - 120px)" : "40px")};

  height: 100vh;
  transition: width 400ms ease-in-out;
  overflow: scroll;
  // padding: 0rem 1rem;
  display: grid;
  grid-template-columns: 40px calc(100% - 40px);
  grid-template-rows: 100%;
  grid-gap: 10px;
`;

const CollapseBlockHeader = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  writing-mode: vertical-rl;
  text-orientation: upright;
  height: 100%;
  position: sticky;
  top: 0;
`;

const CollapseBlockContent = styled.div`
  padding: 0px 10px 0px 10px;
  filter: opacity(0.5);
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
    let stateObject = {
      collapse1Expanded: false,
      collapse2Expanded: false,
      collapse3Expanded: false,
      collapse4Expanded: false
    };
    stateObject[e.target.id] = true;
    this.setState(stateObject);
  };

  render() {
    return (
      <div>
        <CollapseContainer>
          <CollapseBlock
            expanded={this.state.collapse1Expanded}
            bgColor={"#4bdbfe"}
          >
            <CollapseBlockHeader
              id="collapse1Expanded"
              onClick={this.toggleExpand}
            >
              WHO
            </CollapseBlockHeader>
            <CollapseBlockContent>
              <p>{string1}</p>
              <p>{string1}</p>
            </CollapseBlockContent>
          </CollapseBlock>

          <CollapseBlock
            expanded={this.state.collapse2Expanded}
            bgColor={"#5f84dd"}
          >
            <CollapseBlockHeader
              id="collapse2Expanded"
              onClick={this.toggleExpand}
            >
              WHAT
            </CollapseBlockHeader>
            <CollapseBlockContent>
              <p>{string2}</p>
              <p>{string2}</p>
            </CollapseBlockContent>
          </CollapseBlock>

          <CollapseBlock
            expanded={this.state.collapse3Expanded}
            bgColor={"#ff9b9e"}
          >
            <CollapseBlockHeader
              id="collapse3Expanded"
              onClick={this.toggleExpand}
            >
              WHERE
            </CollapseBlockHeader>
            <CollapseBlockContent>
              <p>{string3}</p>
              <p>{string3}</p>
            </CollapseBlockContent>
          </CollapseBlock>

          <CollapseBlock
            expanded={this.state.collapse4Expanded}
            bgColor={"#46546e"}
          >
            <CollapseBlockHeader
              id="collapse4Expanded"
              onClick={this.toggleExpand}
            >
              ????
            </CollapseBlockHeader>
            <CollapseBlockContent>
              <p>{string4}</p>
              <p>{string4}</p>
            </CollapseBlockContent>
          </CollapseBlock>
        </CollapseContainer>
      </div>
    );
  }
}

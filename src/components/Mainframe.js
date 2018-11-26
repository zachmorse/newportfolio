import React, { Component } from "react";
// import randomWords from "random-words";
import { string1, string2, string3 } from "../dummyData/dummyData";
import {
  CollapseContainer,
  CollapseBlock,
  CollapseBlockContent,
  CollapseBlockHeader
} from "../styledComponents/index";

import TonePlayer from "./TonePlayer";

// const CollapseContainer = styled.div`
//   display: flex;
// `;

// const CollapseBlock = styled.div`
//   background-color: ${props => props.bgColor};
//   width: ${props => (props.expanded ? "calc(100% - 75px)" : "25px")};

//   height: 100vh;
//   transition: width 300ms ease-in-out;
//   display: grid;
//   grid-template-columns: 25px calc(100% - 25px);
//   grid-template-rows: 100%;
// `;

// const CollapseBlockHeader = styled.div`
//   color: black;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   text-align: center;
//   writing-mode: vertical-rl;
//   text-orientation: upright;
//   height: 100vh;
//   position: sticky;
//   top: 0;
// `;

// const CollapseBlockContent = styled.div`
//   display: ${props => (props.contentVisible ? "inherit" : "none")};

//   padding: 0px 10px 0px 0px;
//   overflow: scroll;
//   height: 100vh;
// `;

export default class MainFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse1Expanded: true,
      collapse2Expanded: false,
      collapse3Expanded: false,
      collapse4Expanded: false
    };
  }

  // componentDidMount = () => {
  //   window.addEventListener("keydown", this.handleKeypress);
  // };

  // handleKeypress = e => {
  //   console.log(e.key);
  // };

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
            <CollapseBlockContent contentVisible={this.state.collapse1Expanded}>
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
            <CollapseBlockContent contentVisible={this.state.collapse2Expanded}>
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
            <CollapseBlockContent contentVisible={this.state.collapse3Expanded}>
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
            <CollapseBlockContent contentVisible={this.state.collapse4Expanded}>
              <TonePlayer />
            </CollapseBlockContent>
          </CollapseBlock>
        </CollapseContainer>
      </div>
    );
  }
}

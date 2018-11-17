import React, { Component } from "react";
import styled from "styled-components";
import randomWords from "random-words";

import TonePlayer from "./TonePlayer";

const CollapseContainer = styled.div`
  display: flex;
`;

const CollapseBlock = styled.div`
  background-color: ${props => props.bgColor};
  width: ${props => (props.expanded ? "calc(100% - 120px)" : "40px")};

  height: 100vh;
  transition: width 250ms ease-in-out;
  overflow: scroll;
  padding: 0rem 1rem;
`;

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

  toggleActive1 = e => {
    this.setState({
      collapse1Expanded: true,
      collapse2Expanded: false,
      collapse3Expanded: false,
      collapse4Expanded: false
    });
  };

  toggleActive2 = () => {
    this.setState({
      collapse1Expanded: false,
      collapse2Expanded: true,
      collapse3Expanded: false,
      collapse4Expanded: false
    });
  };

  toggleActive3 = () => {
    this.setState({
      collapse1Expanded: false,
      collapse2Expanded: false,
      collapse3Expanded: true,
      collapse4Expanded: false
    });
  };

  toggleActive4 = () => {
    this.setState({
      collapse1Expanded: false,
      collapse2Expanded: false,
      collapse3Expanded: false,
      collapse4Expanded: true
    });
  };

  render() {
    return (
      <div>
        <CollapseContainer>
          <CollapseBlock
            expanded={this.state.collapse1Expanded}
            bgColor={"#4bdbfe"}
            onClick={this.toggleActive1}
          >
            {/* <h1>zach morse, a developer in nashville tn</h1> */}
            {/* <p>{randomWords({ exactly: 1000, join: " " })}</p> */}
          </CollapseBlock>
          <CollapseBlock
            expanded={this.state.collapse2Expanded}
            bgColor={"#5f84dd"}
            onClick={this.toggleActive2}
          >
            <h1>i enjoy clean code and creative interface</h1>
            <p style={{ filter: "opacity(0.25)" }}>
              {randomWords({ exactly: 1000, join: " " })}
            </p>
          </CollapseBlock>
          <CollapseBlock
            expanded={this.state.collapse3Expanded}
            bgColor={"#ff9b9e"}
            onClick={this.toggleActive3}
          >
            {/* <TonePlayer /> */}
            {/* <h1>{randomWords({ exactly: 5, join: " " })}</h1>
            <p>{randomWords({ exactly: 1000, join: " " })}</p> */}
          </CollapseBlock>
          <CollapseBlock
            expanded={this.state.collapse4Expanded}
            bgColor={"#46546e"}
            onClick={this.toggleActive4}
          >
            <h1>?????</h1>
            {/* <p>{randomWords({ exactly: 1000, join: " " })}</p> */}
          </CollapseBlock>
        </CollapseContainer>
      </div>
    );
  }
}

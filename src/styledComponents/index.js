import styled from "styled-components";

export const CollapseContainer = styled.div`
  display: flex;
`;

export const CollapseBlock = styled.div`
  background-color: ${props => props.bgColor};
  width: ${props => (props.expanded ? "calc(100% - 75px)" : "25px")};

  height: 100vh;
  transition: width 300ms ease-in-out;
  display: grid;
  grid-template-columns: 25px calc(100% - 25px);
  grid-template-rows: 100%;
`;

export const CollapseBlockHeader = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  writing-mode: vertical-rl;
  text-orientation: upright;
  height: 100vh;
  position: sticky;
  top: 0;
`;

export const CollapseBlockContent = styled.div`
  display: ${props => (props.contentVisible ? "inherit" : "none")};

  padding: 0px 10px 0px 0px;
  overflow: scroll;
  height: 100vh;
`;

// ------ TONEPLAYER ------

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 50px 50px 50px 50px 50px;
  grid-template-rows: 50px 50px 50px 50px 50px 50px;
  grid-gap: 5px;
  width: 55%;
  margin: auto;
  padding-top: 2rem;
`;

export const GridItem = styled.div`
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

export const MasterAlign = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

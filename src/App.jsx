import React from "react";
import StyledComplexButton from "./StyledComplexButton";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const App = () => (
  <Wrapper>
    <StyledComplexButton onClick={() => alert("Clicked!")}>
      Normal StyledComplexButton
    </StyledComplexButton>
    <StyledComplexButton primary onClick={() => alert("Primary Clicked!")}>
      Primary StyledComplexButton
    </StyledComplexButton>
    <Title>Hello</Title>
  </Wrapper>
);

export default App;

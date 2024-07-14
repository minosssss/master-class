// StyledComplexButton.js
import styled from "styled-components";
import ComplexButton from "./ComplexButton.jsx";

const StyledComplexButton = styled(ComplexButton)`
  background: ${(props) => (props.primary ? "blue" : "white")};
  color: ${(props) => (props.primary ? "white" : "blue")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    background: ${(props) => (props.primary ? "darkblue" : "lightgrey")};
  }
`;

export default StyledComplexButton;

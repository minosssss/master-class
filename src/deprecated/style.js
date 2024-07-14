import styled from "styled-components";

export default function styleComponents() {}

export const Father = styled.div`
  display: flex;
`;

export const Box = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;

export const Circle = styled(Box)`
  border-radius: 50%;
`;

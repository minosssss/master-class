import { useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;
export default function Coin() {
  const { coinId } = useParams();
  return <Title>{coinId ?? "none"}</Title>;
}

import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
export default function Coin() {
  const location = useLocation();
  const { coinId } = useParams();
  const { coin } = location.state || {};
  return (
    <Container>
      <Header>
        <Title>{coin?.name ?? "Loading..."}</Title>
      </Header>
    </Container>
  );
}

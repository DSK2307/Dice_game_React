import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="Dices" />
      </div>
      <div className="content">
        <h1>Welcome to the Dice Game</h1>
        <Button onClick={toggle}>Start Playing</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 72px;
      white-space: nowrap;
      font-weight: bold;
      margin-bottom: 24px;
    }
  }
`;

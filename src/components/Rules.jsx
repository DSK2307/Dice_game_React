import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play the Dice Game</h2>
      <div className="text">
        <p>1. Select any number.</p>
        <p>2. Click on the dice image.</p>
        <p>
          3. If the selected number matches the dice number, you will receive
          the same number of points as the dice.
        </p>
        <p>4. If your guess is incorrect, 2 points will be deducted.</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  .text {
    margin-top: 24px;
  }
  p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 12px;
  }
`;

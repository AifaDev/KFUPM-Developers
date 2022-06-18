import styled from "styled-components";
import Card from "../Components/Card";

export default function Competitions() {
  return (
    <Cards>
      <Card
        name="Web Dev Competition #1"
        startingDate="20 June"
        theme="To Be Announced"
        deadline="27 June"
        status="Ongoing"
        link="https://google.com"
      />
    </Cards>
  );
}

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

import styled from "styled-components";
import Card from "../Components/Card";

export default function Competitions() {
  return (
    <Cards>
      <Card
        name="Web Dev Competition #1"
        startingDate="20 June"
        theme="Utility Apps for students"
        deadline="8 July"
        status="Finished"
        link="#"
      />
    </Cards>
  );
}

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

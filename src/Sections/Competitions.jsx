import styled from "styled-components";
import Card from "../Components/Card";

export default function Competitions() {
  return (
    <Cards>
      <Card
        name="Web Dev Competition #1"
        startingDate="20 June"
        theme="To Be Announced"
        deadline="30 June"
        status="Ongoing"
        link="https://forms.office.com/Pages/ResponsePage.aspx?id=iLC0KX3SKUG5-YY3tZ6ks4fMbK-APYtFgz3nPmSWLWlUQ01TVE82NDVEM0dTMVlRVE5BTTFCU0Y1TC4u"
      />
    </Cards>
  );
}

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

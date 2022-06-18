import styled from "styled-components";

export default function Welcome() {
  return (
    <Container>
      <h2>Welcome to KFUPM Developers, click on any tab to continue.</h2>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 30vh;
`;

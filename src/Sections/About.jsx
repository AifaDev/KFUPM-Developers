import styled from "styled-components";

export default function About() {
  return (
    <Container>
      <Header>
        <p>
          {" "}
          This page has been created to host competitions and showcase students'
          projects.
        </p>
        <p>
          To contribute to this page you can PR this repo:{" "}
          <a
            href="https://github.com/AifaDev/KFUPM-Developers"
            target="_blank"
            rel="noopener noreferrer"
          >
            AifaDev/KFUPM-Developers
          </a>
        </p>
      </Header>
      <Footer>
        <p>
          Created by
          <a
            href="https://github.com/AifaDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aifa
          </a>
        </p>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    margin-left: 4px;
  }
`;

const Header = styled.div``;
const Footer = styled.div`
  margin: auto;
  margin-top: 40vh;
`;

import styled from "styled-components";

export default function Card({ name, theme, startingDate, Deadline, status }) {
  return (
    <Template>
      <h4>{name}</h4>
      <div class="content">
        <h5>Theme:</h5>
        <p>{theme}</p>
        <h5>Starting Date:</h5>
        <p>{startingDate}</p>
        <h5>Deadline:</h5>
        <p>{Deadline}</p>
        <h5>Status:</h5>
        <p>{status}</p>
      </div>
    </Template>
  );
}

const Template = styled.div`
  width: 100%;
  border: 1px solid #e1e4e8;
  background-color: #f5f7fa;
  border-radius: 0.3rem;
  padding: 1.5rem;
  display: grid;
  gap: 5px;

  .content {
    display: grid;
    grid-template-columns: 100px 1fr;
  }

  @media (max-width: 450px) { 
    .content {
      display: initial;
    }
  }
`;

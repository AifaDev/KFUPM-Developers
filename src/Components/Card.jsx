import styled from "styled-components";

export default function Card({ name, theme, startingDate, Deadline, status }) {
  return (
    <Template>
      <h4>{name}</h4>
      <div class="content">
        <div>
          <h5>Theme:</h5>
          <p>{theme}</p>
        </div>
        <div>
          <h5>Starting Date:</h5>
          <p>{startingDate}</p>
        </div>
        <div>
          <h5>Deadline:</h5>
          <p>{Deadline}</p>
        </div>
        <div>
          <h5>Status:</h5>
          <p>{status}</p>
        </div>
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
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 800px) { 
    .content {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 450px) { 
    .content {
      display: initial;
    }
  }
`;

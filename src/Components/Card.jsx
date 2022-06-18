import styled from "styled-components";
import redirect from "../assets/arrow-up-right-from-square-solid.svg";

export default function Card({
  name,
  theme,
  startingDate,
  deadline,
  status,
  link,
}) {
  return (
    <Template>
      <div id="flex-line">
        <h4>{name}</h4>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={redirect} alt="redirect" />
        </a>
      </div>
      <div id="info">
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
          <p>{deadline}</p>
        </div>
        <div>
          <h5>Status:</h5>
          <p className={status === "Ongoing" ? "green" : ""}>{status}</p>
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

  h4 {
    margin-bottom: 1rem;
  }
  #flex-line {
    display: flex;
    justify-content: space-between;
    a {
      margin-right: 0.5rem;
      text-decoration: none;
      img {
        height: 1rem;
        width: 1rem;
      }
    }
  }

  #info {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  @media (max-width: 800px) {
    #info {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 450px) {
    #info {
      display: initial;
    }
  }
  .green {
    color: green;
  }
`;

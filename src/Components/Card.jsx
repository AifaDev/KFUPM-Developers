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
    <Template onClick={() => window.open(link, "_blank").focus()}>
      <div id="flex-line">
        <h4>{name}</h4>
        <img src={redirect} alt="redirect" />
      </div>
      <div id="info">
        <div className="margin-bottom">
          <h5>Theme:</h5>
          <p>{theme}</p>
        </div>
        <div className="margin-bottom">
          <h5>Starting Date:</h5>
          <p>{startingDate}</p>
        </div>
        <div className="margin-bottom">
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
  cursor: pointer;
  width: 100%;
  box-shadow: inset 0 0 0 1px #e1e4e8;
  background-color: #f5f7fa;
  border-radius: 0.3rem;
  padding: 1.5rem;

  h4 {
    margin-bottom: 1rem;
  }
  #flex-line {
    display: flex;
    justify-content: space-between;
    img {
      opacity: 50%;
      margin-right: 0.5rem;
      height: 1rem;
      width: 1rem;
    }
  }
  h5 {
    font-size: 0.87em;
  }
  p {
    font-size: 0.9em;
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
  &:hover {
    box-shadow: inset 0 0 0 2px #e1e4e8;
    #flex-line {
      img {
        opacity: 80%;
      }
    }
  }
  .margin-bottom {
    margin-bottom: 0.5rem;
  }
`;

import { useState } from "react";
import "./App.css";
import Sections from "./Components/Sections";
import logo from "./logo.svg";
import styled from "styled-components";

function App() {
  const [selectedTab, setSelectedTab] = useState("competitions");
  const tabs = [
    "Competitions 🎮",
    "Participations 📄",
    "Projects ⚒️",
    "About ❤️",
  ];

  return (
    <div className="App">
      <Container>
        <div id="title">
          <img src={logo} alt="logo" />
          <h3>KFUPM Developers</h3>
        </div>
        <div id="tabs">
          {tabs.map((e, index) => {
            return (
              <button
                key={index}
                className={`tab ${selectedTab === e ? "selected" : ""}`}
                onClick={() => setSelectedTab(e)}
              >
                <span>{e}</span>
              </button>
            );
          })}
        </div>
        <div id="content">
          <Sections selectedTab={selectedTab} />
        </div>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  border-radius: 0.3rem;
  width: 97%;
  height: 97%;
  box-shadow: inset 0 0 0 1px #e1e4e8;

  #title {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    width: 100%;
    height: 4rem;
    padding: 1rem 1.5rem;

    img {
      border-radius: 50%;
      height: 1.5rem;
      width: 1.5rem;
    }
  }
  #tabs {
    display: flex;
    flex-direction: row;
    padding: 0 1.5rem;
    height: 2.2rem;

    .tab {
      background-color: white;
      display: block;
      border: none;
      border-bottom: 1px solid white;
      outline: none;
      cursor: pointer;
      width: 25%;
      height: 100%;
      text-align: center;
      font-size: 0.7rem;
      span {
        opacity: 40%;
      }
    }
    .selected {
      border: 1px solid #e1e4e8;
      border-bottom: 1px solid white;
      z-index: 1;
    }

    .selected span {
      opacity: 100%;
    }
  }
  #content {
    border: 1px solid #e1e4e8;
    transform: translateY(-1px);
    color: #444;
    height: 100%;
    width: 100%;
    padding: 2rem;
  }

  @media (max-width: 430px) {
    .tab {
      word-spacing: 100vw;
    }
  }
`;

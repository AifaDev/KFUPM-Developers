import About from "../Sections/About";
import Competitions from "../Sections/Competitions";
import Participations from "../Sections/Participations";
import Projects from "../Sections/Projects";

export default function Sections({ selectedTab }) {
  if (selectedTab === "Competitions 🎮") {
    return <Competitions />;
  } else if (selectedTab === "Participations 📄") {
    return <Participations />;
  } else if (selectedTab === "Projects ⚒️") {
    return <Projects />;
  } else if (selectedTab === "About ❤️") {
    return <About />;
  } else {
    return <h1>Welcome</h1>;
  }
}

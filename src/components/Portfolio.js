import "../style/Portfolio.css";

import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

export default function Portfolio() {
  return (
    <div id="portfolio-container">
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
}

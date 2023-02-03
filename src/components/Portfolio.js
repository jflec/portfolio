import Landing from "./Landing";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";

import "../style/Portfolio.css";

export default function Portfolio() {
  return (
    <div id="portfolio-container">
      <Landing />
      <div id="portfolio-section-container">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

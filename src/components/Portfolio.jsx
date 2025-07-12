import { useState, useEffect } from "react";

import Landing from "./Landing";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";

import Contact from "./Contact";

export default function Portfolio() {
  return (
    <div id="portfolio-container">
      <Landing />
      {checkMobile() ? (
        <div id="portfolio-section-container">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </div>
      ) : (
        <div id="portfolio-section-container">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  );
}

function checkMobile() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= 940;
}

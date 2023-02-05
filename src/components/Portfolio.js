import { useState, useEffect } from "react";

import Landing from "./Landing";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import VideoHover from "./VideoHover";

import Contact from "./Contact";

export default function Portfolio() {
  const [video, setVideo] = useState(null);
  const [visible, setVisible] = useState(false);
  return (
    <div id="portfolio-container">
      <Landing />
      {checkMobile() ? (
        <div id="portfolio-section-container">
          <About />
          <Experience setVideo={setVideo} setVisible={setVisible} />
          <Education />
          <Skills />
          <Projects setVideo={setVideo} setVisible={setVisible} />
          <Contact />
        </div>
      ) : (
        <VideoHover url={video} visible={visible}>
          <div id="portfolio-section-container">
            <About />
            <Experience setVideo={setVideo} setVisible={setVisible} />
            <Education />
            <Skills />
            <Projects setVideo={setVideo} setVisible={setVisible} />
            <Contact />
          </div>
        </VideoHover>
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

import { useState, useEffect } from "react";

import Landing from "./Landing";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import ImageHover from "./ImageHover";

import "../style/Portfolio.css";

export default function Portfolio() {
  const [image, setImage] = useState(null);
  const [visible, setVisible] = useState(false);
  return (
    <div id="portfolio-container">
      <Landing />
      {checkMobile() ? (
        <div id="portfolio-section-container">
          <About />
          <Experience setImage={setImage} setVisible={setVisible} />
          <Education />
          <Skills />
          <Projects setImage={setImage} setVisible={setVisible} />
        </div>
      ) : (
        <ImageHover url={image} visible={visible}>
          <div id="portfolio-section-container">
            <About />
            <Experience setImage={setImage} setVisible={setVisible} />
            <Education />
            <Skills />
            <Projects setImage={setImage} setVisible={setVisible} />
          </div>
        </ImageHover>
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

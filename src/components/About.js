import "../style/About.css";

export default function About() {
  return (
    <div id="about-container">
      <div className="about-container-less">
        <h1>ABOUT</h1>
      </div>

      <div className="about-container-more">
        <h1 className="about-title">Hi, I'm Joseph</h1>
        <p>
          <span className="hover">
            I'm a full-stack software engineer with an eye for design and a
            passion for continuous learning.
          </span>{" "}
          <span className="hover">
            My interest in game development ignited my love for coding and led
            me to pursue a certificate in Computer Programming and graduate from
            App Academy.
          </span>{" "}
          <span className="hover">
            In my leisure time, you can find me gaming with friends, listening
            to music, and updating my portfolio site.
          </span>
        </p>
        <div className="about-links-container">
          <a href="https://github.com/JFlec" target="_blank">
            github
          </a>
          <a
            href="https://www.linkedin.com/in/joe-felicidario/"
            target="_blank"
          >
            linkedin
          </a>
          <a href="Joseph Felicidario Resume.pdf" target="_blank">
            resume
          </a>
        </div>
      </div>
    </div>
  );
}

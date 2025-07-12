export default function About() {
  return (
    <div className="component-container">
      <div className="secondary-content-container">
        <h1>ABOUT</h1>
      </div>
      <div className="main-content-container">
        <h1 className="bold-header">Hi, I'm Joseph</h1>
        <p>
          <span className="hover">
            I'm a fullstack software engineer with an eye for design and a
            passion for continuous learning.
          </span>{" "}
          <span className="hover">
            My interest in game development ignited my love for coding and led
            me to pursue a certificate in Computer Programming and graduate from
            App Academy.
          </span>{" "}
          <span className="hover">
            In my free time, you can find me gaming with friends, listening to
            music, and updating my portfolio site.
          </span>
        </p>
        <div className="links-container">
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

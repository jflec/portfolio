export default function About() {
  return (
    <div className="component-container">
      <div className="secondary-content-container">
        <h1>ABOUT</h1>
      </div>
      <div className="main-content-container">
        <h1 className="bold-header">Hi, I'm Joe</h1>
        <p>
          <span className="hover">
            I'm a full-stack software engineer obsessed with creating digital
            experiences that are as beautiful as they are functional.
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

import "../style/Projects.css";

export default function Projects() {
  const projects = [
    {
      name: "RedPlayButton",
      live_url: "https://red-play-button.herokuapp.com/#/",
      github_url: "https://github.com/JFlec/RedPlayButton",
      desc: "A pixel-perfect YouTube clone where users can upload, watch, share, and comment on videos.",
      skills: [
        "React",
        "Redux",
        "Javascript",
        "HTMl",
        "Sass",
        "Ruby",
        "Rails",
        "PostgreSQL",
        "AWS",
      ],
    },

    {
      name: "anyWajers",
      live_url: "https://anywajers.herokuapp.com/#/",
      github_url: "https://github.com/james625/anyWajers",
      desc: "A platform dedicated to helping it's users find people to play games with.",
      skills: [
        "React",
        "Redux",
        "Javascript",
        "HTMl",
        "Sass",
        "MongoDB",
        "Express",
        "Node",
        "WebSocket",
      ],
    },

    {
      name: "Slime Guy",
      live_url: "https://jflec.github.io/Slime-Guy/",
      github_url: "https://github.com/JFlec/Slime-Guy",
      desc: "A game where the player must ascend the depths of hell all while shooting enemies.",
      skills: ["Javascript", "HTMl", "CSS"],
    },
  ];
  return (
    <div id="projects-container">
      <div className="projects-container-less">
        <h1>PROJECTS</h1>
      </div>
      <div className="projects-container-more">
        {projects.map((project, idx) => {
          return (
            <div className="project-container" key={idx}>
              <h1 className="project-name">{project.name}</h1>
              <h2 className="project-desc">{project.desc}</h2>

              <div className="links-container">
                <a href={project.live_url} target="_blank">
                  live
                </a>
                <a href={project.github_url} target="_blank">
                  github
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

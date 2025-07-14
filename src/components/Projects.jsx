export default function Projects() {
  const projects = [
    {
      name: "RedPlayButton",
      github_url: "https://github.com/JFlec/RedPlayButton",
      desc: "A video-sharing platform that mimics the functionality and aesthetic of YouTube.",
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
      github_url: "https://github.com/james625/anyWajers",
      desc: "A social platform aimed at connecting gamers.",
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
      github_url: "https://github.com/JFlec/Slime-Guy",
      desc: "A fun and addictive platformer game inspired by Doodle Jump.",
      skills: ["Javascript", "HTMl", "CSS"],
    },
  ];
  return (
    <div className="component-container">
      <div className="secondary-content-container">
        <h1>PROJECTS</h1>
      </div>
      <div className="main-content-container  gap">
        {projects.map((project, idx) => {
          return (
            <div className="project-container" key={idx}>
              <h1 className="bold-header">{project.name}</h1>
              <h2 className="hover">{project.desc}</h2>

              <div className="links-container project">
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

import "../style/Projects.css";

import RPB from "../rpb.mp4";
import AW from "../aw.mp4";
import SG from "../sg.mp4";

export default function Projects({ setImage, setVisible }) {
  const projects = [
    {
      name: "RedPlayButton",
      live_url: "https://red-play-button.herokuapp.com/#/",
      github_url: "https://github.com/JFlec/RedPlayButton",
      desc: "A video-sharing platform that mimics the functionality and aesthetic of YouTube, allowing users to upload, view, share, and comment on videoes.",
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
      videoUrl: RPB,
    },

    {
      name: "anyWajers",
      live_url: "https://anywajers.herokuapp.com/#/",
      github_url: "https://github.com/james625/anyWajers",
      desc: "A social platform aimed at connecting gamers and facilitating the search for individuals to play games with for users.",
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
      videoUrl: AW,
    },

    {
      name: "Slime Guy",
      live_url: "https://jflec.github.io/Slime-Guy/",
      github_url: "https://github.com/JFlec/Slime-Guy",
      desc: "A fun and addictive platformer game inspired by Doodle Jump, where the player must navigate through the dangerous realms of hell while shooting and defeating a variety of enemies on their ascent.",
      skills: ["Javascript", "HTMl", "CSS"],
      videoUrl: SG,
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
            <div
              className="project-container"
              key={idx}
              onMouseEnter={() => {
                setVisible(true);
                setImage(project.videoUrl);
              }}
              onMouseLeave={() => {
                setVisible(false);
              }}
            >
              <h1 className="project-name">{project.name}</h1>
              <h2 className="project-desc hover">{project.desc}</h2>

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

import RPB from "../videos/rpb.mp4";
import AW from "../videos/aw.mp4";
import SG from "../videos/sg.mp4";

export default function Projects({ setVideo, setVisible }) {
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
    <div className="component-container">
      <div className="secondary-content-container">
        <h1>PROJECTS</h1>
      </div>
      <div className="main-content-container  gap">
        {projects.map((project, idx) => {
          return (
            <div
              className="project-container"
              key={idx}
              onMouseEnter={() => {
                setVisible(true);
                setVideo(project.videoUrl);
              }}
              onMouseLeave={() => {
                setVisible(false);
              }}
            >
              <h1 className="bold-header">{project.name}</h1>
              <h2 className="hover">{project.desc}</h2>

              <div className="links-container project">
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

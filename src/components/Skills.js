import "../style/Skills.css";
export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Sass",
    "Ruby",
    "Rails",
    "Redux",
    "ActiveRecord",
    "Mongoose",
    "MongoDB",
    "SQL",
    "PostgreSQL",
    "React Three Fiber",
    "Drei",
    "Valtio",
    "Three.js",
    "Next.js",
    "Vercel",
    "Node.js",
    "Express.js",
    "WebSocket",
  ];
  return (
    <div id="skills-container">
      <div className="skills-container-less">
        <h1>SKILLS</h1>
      </div>

      <div className="skills-container-more">
        <h1 className="skill-title">Tools I've worked with</h1>
        <div className="skills-container">
          {skills.map((skill, idx) => {
            return (
              <h1 className="skill" key={idx}>
                {skill}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
}

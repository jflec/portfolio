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
    <div className="component-container">
      <div className="secondary-content-container">
        <h1>SKILLS</h1>
      </div>
      <div className="main-content-container">
        <div id="skill-container">
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

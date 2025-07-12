export default function Skills() {
  const skills = [
    "Java",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Three.js",
    "Ruby",
    "Rails",
    "SQL",
    "MongoDB",
    "AWS",
    "Vercel",
    "Tailwind",
    "Redux",
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

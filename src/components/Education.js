import "../style/Education.css";

export default function Education() {
  const education = [
    {
      name: "App Academy",
      date: "Fall 2021",
      desc: " Immersive full-stack software development course entailed 1000+ hours of coding. ",
    },

    {
      name: "Lone Star College",
      date: "Summer 2020",
      desc: "Certificate of Computer Programming - Magnum Cum Laude",
    },
  ];
  return (
    <div id="education-container">
      <div className="education-container-less">
        <h1>EDUCATION</h1>
      </div>
      <div className="education-container-more">
        {education.map((education, idx) => {
          return (
            <div className="education-container" key={idx}>
              <h1 className="education-name">{education.name}</h1>
              <h2 className="education-date">{education.date}</h2>
              <h2 className="education-desc hover">{education.desc}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

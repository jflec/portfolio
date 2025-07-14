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
    {
      name: "College Park High School",
      date: "Fall 2019",
      desc: "High School Diploma",
    },
  ];
  return (
    <div className="component-container">
      <div className="secondary-content-container">
        <h1>EDUCATION</h1>
      </div>
      <div className="main-content-container gap">
        {education.map((education, idx) => {
          return (
            <div className="education-container" key={idx}>
              <h1 className="bold-header">{education.name}</h1>
              <h2 className="semibold-subheader ">{education.date}</h2>
              <h2 className="education-desc hover">{education.desc}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import "../style/Experience.css";

export default function Experience() {
  const experience = [
    {
      name: "Sock Club",
      title: "Fullstack Software Engineer",
      bulletpoints: [
        "Led the development of a DIY design tool resulting in a 300% increase in revenue.",
        "Boosted production of custom sock designs by 500% per week.",
        "Developed a server-side service that generates 3D-rendered screenshots of an image on a sock using the provided image as input.",
        "Worked with designers to develop internal tools and improve user experience.",
      ],
    },
  ];

  return (
    <div id="experience-container">
      <div className="experience-container-less">
        <h1>EXPERIENCE</h1>
      </div>
      <div className="experience-container-more">
        {experience.map((experience, idx) => {
          return (
            <div className="experience-container" key={idx}>
              <h1 className="experience-name">{experience.name}</h1>
              <h2 className="experience-title">{experience.title}</h2>
              <div className="bulletpoint-container">
                {experience.bulletpoints.map((bulletpoint, idx) => {
                  return (
                    <h1 className="bulletpoint" key={idx}>
                      {bulletpoint}
                    </h1>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

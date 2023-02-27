import SC from "../videos/sc.mp4";

export default function Experience({ setVideo, setVisible }) {
  const experience = [
    {
      name: "Sock Club",
      title: "Fullstack Software Engineer",
      bulletpoints: [
        "Led the development of a DIY design tool resulting in a 300% increase in revenue.",
        "Boosted production of custom sock designs by 500% per week.",
        "Developed an internal API that generates 3D-rendered screenshots of a user’s design.",
        "Worked with designers to develop internal tools and improve user experience.",
      ],
      videoUrl: SC,
    },
  ];

  return (
    <div className="component-container">
      <div className="secondary-content-container">
        <h1>EXPERIENCE</h1>
      </div>
      <div className="main-content-container">
        {experience.map((experience, idx) => {
          return (
            <div
              key={idx}
              onMouseEnter={() => {
                setVisible(true);
                setVideo(experience.videoUrl);
              }}
              onMouseLeave={() => {
                setVisible(false);
              }}
            >
              <h1 className="bold-header">{experience.name}</h1>
              <h2 className="semibold-subheader">{experience.title}</h2>
              <div className="bulletpoint-container">
                {experience.bulletpoints.map((bulletpoint, idx) => {
                  return (
                    <h1 className="bulletpoint hover" key={idx}>
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

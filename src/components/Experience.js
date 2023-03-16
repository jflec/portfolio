import SC from "../videos/sc.mp4";

export default function Experience({ setVideo, setVisible }) {
  const experience = [
    {
      name: "Sock Club",
      title: "Fullstack Software Engineer",
      bulletpoints: [
        "Spearheaded the development of an innovative DIY design tool, resulting in a 300% increase in revenue and a 500% surge in user engagement.",
        "Pioneered an internal API for generating 3D-rendered screenshots of user designs, streamlining workflows.",
        "Partnered with design teams to create internal tools and optimize user experience.",
        "Revamped website for seamless mobile compatibility.",
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

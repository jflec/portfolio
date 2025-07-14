export default function Experience() {
  const experience = [
    {
      name: "BigChadGuys",
      title: "Software Engineer",
      bulletpoints: [
        "Scaled the BigChadGuys venture to ~$100K in monthly revenue by leveraging community engagement.",
        "Created compelling promotional and educational content, garnering 40M+ views and 25M+ downloads across platforms.",
        "Developed and maintained BigChadGuys projects in Java, releasing regular updates and new features.",
        "Coordinated with artists, developers, and writers to ensure high product quality and drive creative innovation",
      ],
    },
    {
      name: "Sock Club",
      title: "Fullstack Software Engineer",
      bulletpoints: [
        "Spearheaded development of an innovative DIY design tool, leading to a 3x increase in revenue and a 5x surge in user retention.",
        "Pioneered an internal API to generate 3D-rendered images of user designs, streamlining design workflows and automation.",
        "Revamped the company website for seamless mobile compatibility, improving cross-device user experience and accessibility.",
        "Worked with design teams to develop internal tools and enhance the overall intake pipeline.",
      ],
    },
  ];

  return (
    <div className="component-container">
      <div className="secondary-content-container">
        <h1>EXPERIENCE</h1>
      </div>
      <div className="main-content-container">
        <div className="experience-container">
          {experience.map((experience, idx) => {
            return (
              <div key={idx}>
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
    </div>
  );
}

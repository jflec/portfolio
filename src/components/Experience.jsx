export default function Experience() {
  const experience = [
    {
      name: "BigChadGuys",
      title: "Software Engineer",
      bulletpoints: [
        "Independently created compelling promotional and educational content, garnering 40+ million views and 20 million total downloads.",
        "Leveraged Java expertise to design, develop, and consistently update the BigChadGuys modpacks.",
        "Fostered productive collaborations with artists, developers, and writers to enhance project quality and innovation.",
      ],
    },
    {
      name: "Sock Club",
      title: "Fullstack Software Engineer",
      bulletpoints: [
        "Spearheaded the development of an innovative DIY design tool, resulting in a 300% increase in revenue and a 500% surge in user engagement.",
        "Pioneered an internal API for generating 3D-rendered screenshots of user designs, streamlining workflows.",
        "Partnered with design teams to create internal tools and optimize user experience.",
        "Revamped website for seamless mobile compatibility.",
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

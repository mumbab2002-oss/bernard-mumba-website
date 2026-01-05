export default function Projects() {
  const imgStyle = {
    width: "300px",
    height: "200px",
    objectFit: "cover",
    margin: "10px",
    borderRadius: "8px",
  };

export default function Projects() {
  return (
    <div>
      <h1>Our Projects</h1>

      <div style={grid}>
        <img src="/projects/house1.jpg" alt="Residential House Ndola" />
        <img src="/projects/site1.jpg" alt="Construction Site Zambia" />
        <img src="/projects/road1.jpg" alt="Road Works Zambia" />
      </div>
    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "15px",
};

  return (
    <div>
      <h1>Our Projects</h1>
      <p>
        Below are examples of residential buildings, site supervision works, and
        infrastructure-related projects handled or supervised by Mumba
        Consulntants.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <img src="/images/project1.jpg" style={imgStyle} />
        <img src="/images/project2.jpg" style={imgStyle} />
        <img src="/images/project3.jpg" style={imgStyle} />
      </div>

      <p>
        upload images into the <strong>public/images</strong>
  
      </p>
    </div>
  );
}

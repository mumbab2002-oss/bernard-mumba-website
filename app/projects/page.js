export default function Projects() {
  const imgStyle = {
    width: "300px",
    height: "200px",
    objectFit: "cover",
    margin: "10px",
    borderRadius: "8px",
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
        📌 To add photos: upload images into the <strong>public/images</strong>
        folder in GitHub.
      </p>
    </div>
  );
}

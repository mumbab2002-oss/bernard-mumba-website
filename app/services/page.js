export default function Services() {
  const cardStyle = {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "8px",
    width: "280px",
    margin: "10px",
  };

  return (
    <div>
      <h1>Our Engineering Services</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <h3>Structural Design</h3>
          <p>
            Design of residential, commercial, and institutional structures in
            compliance with engineering standards.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Construction Supervision</h3>
          <p>
            On-site supervision to ensure quality, safety, and compliance with
            approved designs.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Building Consultancy</h3>
          <p>
            Technical advice on foundations, materials, structural safety, and
            cost-effective construction solutions.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Infrastructure Support</h3>
          <p>
            Engineering support for roads, drainage, and small infrastructure
            projects.
          </p>
        </div>
      </div>
    </div>
  );
}

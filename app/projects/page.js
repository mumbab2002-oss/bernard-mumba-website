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

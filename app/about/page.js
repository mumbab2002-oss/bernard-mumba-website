export default function About() {
  return (
    <div>
      <h1>About Mumba Consultants</h1>

      <p>
        Mumba Civil Consultants is a Zambian civil and structural engineering
        consultancy committed to delivering safe, efficient, and economical
        engineering solutions.
      </p>

      <h2>Founder Biography</h2>

      <p>
        Bernard Mumba is a civil engineering professional with experience in
        structural design, construction supervision, and public infrastructure
        projects. He has interned with the Road Development Agency (RDA) and the
        Ministry of Infrastructure, Housing and Urban Development, and is a
        member of the Engineering Institution of Zambia (EIZ).
      </p>

      {/* DOWNLOAD COMPANY PROFILE */}
      <a
        href="/Mumba-Consulntants-Profile.pdf"
        download
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 18px",
          backgroundColor: "#0a3d62",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "6px",
          fontWeight: "bold",
        }}
      >
        📄 Download Company Profile
      </a>
    </div>
  );
}

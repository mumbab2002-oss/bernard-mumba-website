export const metadata = {
  title: "About Us | Mumba Consultants – Civil Engineers in Zambia",
  description:
    "Learn about Mumba Consultants, a Zambian civil and structural engineering firm led by Bernard Mumba, offering professional design, supervision, and consultancy services.",
};

export default function About() {
  return (
    <div>
      {/* ================= PROFILE SECTION ================= */}
      <section style={{ marginBottom: "40px", textAlign: "center" }}>
        <img
          src="/bernard-mumba.jpg"
          alt="Bernard Mumba – Civil Engineer Zambia"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "15px",
          }}
        />
          <section>
  <h2>What Clients Say</h2>

  <div style={card}>
    <p>
      “Mumba Consultants provided excellent structural guidance for our house
      project in Ndola.”
    </p>
    <strong>— Homeowner, Ndola</strong>
  </div>

  <div style={card}>
    <p>
      “Professional, reliable, and technically sound engineering services.”
    </p>
    <strong>— Contractor, Copperbelt</strong>
  </div>
</section>


        <h1>About Mumba Consultants</h1>
        <p>
          Mumba Consultants is a Zambian civil and structural engineering
          consultancy committed to delivering safe, efficient, and economical
          engineering solutions for buildings and infrastructure projects.
        </p>
      </section>

      {/* ================= FOUNDER BIO ================= */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Founder Biography</h2>
        <p>
          Bernard Mumba is a civil engineering professional with experience in
          structural design, construction supervision, and public infrastructure
          development. He has worked with the Road Development Agency (RDA) and
          the Ministry of Infrastructure, Housing and Urban Development, and is a
          registered member of the Engineering Institution of Zambia (EIZ).
        </p>
      </section>

      {/* ================= EXPERIENCE TIMELINE ================= */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Professional Experience</h2>

        <div style={cardStyle}>
          <h3>Intern – Road Development Agency (RDA)</h3>
          <p>
            Assisted in road construction supervision, materials testing, and
            infrastructure inspections on public road projects.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Intern – Ministry of Infrastructure & Housing</h3>
          <p>
            Participated in building project supervision, structural assessments,
            and government infrastructure planning.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Civil & Structural Consultant</h3>
          <p>
            Provides structural design, drawings, site supervision, and technical
            consultancy for residential and commercial projects.
          </p>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Certifications & Professional Memberships</h2>

        <ul>
          <li>✔ Member – Engineering Institution of Zambia (EIZ)</li>
          <li>✔ Certified Leader – Berelevant Afrika</li>
          <li>✔ Microsoft Excel & Project – TVTC</li>
          <li>✔ AutoCAD & Structural Design Tools</li>
        </ul>

        {/* EIZ BADGE */}
        <img
          src="/eiz-logo.png"
          alt="Engineering Institution of Zambia"
          style={{ width: "120px", marginTop: "15px" }}
        />
      </section>

      {/* ================= DOWNLOAD PROFILE ================= */}
      <section>
        <a
          href="/Mumba-Consulntants-Profile.pdf"
          download
          style={{
            display: "inline-block",
            padding: "14px 22px",
            backgroundColor: "#0a3d62",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold",
          }}
        >
          📄 Download Company Profile
        </a>
      </section>
    </div>
  );
}

/* ================= STYLES ================= */
const cardStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "8px",
  marginBottom: "15px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

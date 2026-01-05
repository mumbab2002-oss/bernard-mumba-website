export default function Home() {
  return (
    <div>
      <h1 style={{ color: "#0f2a44" }}>
        Civil & Structural Engineering Consultants in Zambia
      </h1>

      <p style={{ fontSize: "18px", maxWidth: "800px" }}>
        Mumba Consultants provides professional civil and structural
        engineering services including structural design, construction
        supervision, and infrastructure consultancy across Zambia.
      </p>

      {/* ================= TESTIMONIALS ================= */}
      <section>
        <h2>What Clients Say</h2>

        <div style={card}>
          <p>
            “Mumba Consultants provided excellent structural guidance for our
            house project in Ndola.”
          </p>
          <strong>— Homeowner, Ndola</strong>
        </div>

        <div style={card}>
          <p>
            “Professional, reliable, and technically sound engineering
            services.”
          </p>
          <strong>— Contractor, Copperbelt</strong>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section style={{ marginTop: "40px" }}>
        <h2>Why Choose Us</h2>
        <div
  style={{
    display: "inline-block",
    marginBottom: "20px",
    padding: "12px 18px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
  }}
  onMouseOver={(e) =>
    (e.currentTarget.style.transform = "scale(1.05)")
  }
  onMouseOut={(e) =>
    (e.currentTarget.style.transform = "scale(1)")
  }
>
  🏗️ Structural Design
</div>

        <ul>
          <li>✔ Safe & code-compliant designs</li>
          <li>✔ Experience in housing & infrastructure</li>
          <li>
            ✔ Professional supervision, house plans and design & reporting
          </li>
          <li>✔ Zambia-based, site-focused solutions</li>
        </ul>
      </section>
<a
  href="/contact"
  style={{
    display: "inline-block",
    marginTop: "20px",
    padding: "14px 22px",
    backgroundColor: "#0a3d62",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  📞 Request Engineering Consultation
</a>


      {/* ================= CONTACT ================= */}
      <section style={{ marginTop: "40px" }}>
        <h2>Contact</h2>
        <p>📍 Ndola, Zambia</p>
        <p>📧 Email: mumbab2002@gmail.com</p>
        <p>
          💬 WhatsApp:{" "}
          <a
            href="https://wa.me/message/L4UVQ3PS2LMWN1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat with us
          </a>
        </p>
      </section>
    </div>
  );
}

/* ================= CARD STYLE ================= */
const card = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "8px",
  marginBottom: "15px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

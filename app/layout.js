"use client";

export const metadata = {
  title: "Mumba Consulntants | Civil Engineer in Zambia",
  description:
    "Mumba Consulntants offers professional civil and structural engineering services in Zambia including design, supervision, and consultancy.",
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f9f9f9",
          color: "#222",
        }}
      >
        {/* ================= HEADER / NAVIGATION ================= */}
        <header
          style={{
            backgroundColor: "#0a3d62",
            padding: "15px 20px",
            color: "#fff",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 style={{ margin: 0 }}>Mumba Consulntants</h2>

            <nav>
              <a
                href="/"
                style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}
              >
                Home
              </a>

              <a
                href="/about"
                style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}
              >
                About
              </a>

              <a
                href="/services"
                style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}
              >
                Services
              </a>

              <a
                href="/projects"
                style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}
              >
                Projects
              </a>

              <a
                href="/contact"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* ================= MAIN CONTENT ================= */}
        <main
          style={{
            maxWidth: "1100px",
            margin: "40px auto",
            padding: "0 20px",
          }}
        >
          {children}
        </main>

        {/* ================= FOOTER ================= */}
        <footer
          style={{
            marginTop: "60px",
            padding: "25px 15px",
            backgroundColor: "#0a3d62",
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          <h3 style={{ marginBottom: "5px" }}>Mumba Consulntants</h3>
          <p style={{ margin: "5px 0" }}>
            Civil & Structural Engineering Consultants – Zambia
          </p>

          {/* Social Media Links */}
          <div style={{ marginTop: "15px" }}>
            <a
              href="https://www.linkedin.com/in/bernard-mumba-02372b333"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
            >
              LinkedIn
            </a>

            <a
              href="https://www.facebook.com/share/1C32NACPan/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/bernardbwalyamumba"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
            >
              Instagram
            </a>

            <a
              href="https://www.threads.com/@bernardbwalyamumba"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
            >
              Threads
            </a>

            <a
              href="https://www.youtube.com/@structuralbbmumba"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
            >
              YouTube
            </a>
          </div>

          <p style={{ marginTop: "15px", fontSize: "13px" }}>
            © {new Date().getFullYear()} Mumba Consulntants. All rights reserved.
          </p>
        </footer>

        {/* ================= FLOATING WHATSAPP BUTTON ================= */}
        <a
          href="https://wa.me/message/L4UVQ3PS2LMWN1"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#25D366",
            color: "#ffffff",
            padding: "15px",
            borderRadius: "50%",
            textDecoration: "none",
            fontSize: "20px",
            zIndex: 1000,
          }}
        >
          💬
        </a>
      </body>
    </html>
  );
}

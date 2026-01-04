export const metadata = {
  title: "Mumba Consulntants | Civil Engineer in Zambia",
  description:
    "Mumba Consulntants offers professional civil and structural engineering services in Zambia including design, supervision, and consultancy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        
        {/* Main Page Content */}
        {children}

        {/* Footer */}
        <footer
          style={{
            marginTop: "50px",
            padding: "20px",
            backgroundColor: "#0a3d62",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h3>Mumba Consulntants</h3>
          <p>Civil & Structural Engineering Consultants – Zambia</p>

          {/* Social Media Links */}
          <div style={{ marginTop: "10px" }}>
            <a
              href="https://www.linkedin.com/in/bernard-mumba-02372b333"
              target="_blank"
              style={{ color: "#fff", margin: "0 10px" }}
            >
              LinkedIn
            </a>

            <a
              href="https://www.facebook.com/share/1C32NACPan/"
              target="_blank"
              style={{ color: "#fff", margin: "0 10px" }}
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/bernardbwalyamumba"
              target="_blank"
              style={{ color: "#fff", margin: "0 10px" }}
            >
              Instagram
            </a>

            <a
              href="https://www.threads.com/@bernardbwalyamumba"
              target="_blank"
              style={{ color: "#fff", margin: "0 10px" }}
            >
              Threads
            </a>

            <a
              href="https://www.youtube.com/@structuralbbmumba"
              target="_blank"
              style={{ color: "#fff", margin: "0 10px" }}
            >
              YouTube
            </a>
          </div>

          <p style={{ marginTop: "15px", fontSize: "14px" }}>
            © {new Date().getFullYear()} Mumba Consulntants. All rights reserved.
          </p>
        </footer>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/message/L4UVQ3PS2LMWN1"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#25D366",
            color: "white",
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

        
 

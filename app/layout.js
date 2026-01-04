export const metadata = {
  title: "Mumba Consulntants | Civil Engineer in Zambia",
  description:
    "Mumba Consulntants offers professional civil and structural engineering services in Zambia including design, supervision, and consultancy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {/* NAVBAR */}
        <nav
          style={{
            background: "#0f2a44",
            padding: "15px 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <strong style={{ color: "white", fontSize: "18px" }}>
            Mumba Consultants
          </strong>
          <div>
            <a href="/" style={linkStyle}>Home</a>
            <a href="/about" style={linkStyle}>About</a>
            <a href="/services" style={linkStyle}>Services</a>
            <a href="/projects" style={linkStyle}>Projects</a>
            <a href="/contact" style={linkStyle}>Contact</a>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main style={{ padding: "40px" }}>{children}</main>
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

        {/* FOOTER */}
        <footer
          style={{
            background: "#0f2a44",
            color: "white",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <p>© {new Date().getFullYear()} Mumba Consultants</p>
          <p>Ndola, Zambia | Email: mumbab2002@gmail.com</p>
        </footer>
      </body>
    </html>
  );
}

const linkStyle = {
  color: "white",
  marginLeft: "15px",
  textDecoration: "none",
  fontSize: "14px",
};

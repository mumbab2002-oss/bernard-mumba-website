export const metadata = {
  title: "Bernard Mumba Civil & Structural Consultants",
  description: "Civil Engineer in Zambia – structural design and consultancy services."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0 }}>
        <header style={{ padding: '20px', background: '#0f2a44', color: 'white' }}>
          <h1>Bernard Mumba Civil & Structural Consultants</h1>
        </header>
        <main style={{ padding: '20px' }}>{children}</main>
        <footer style={{ padding: '20px', background: '#0f2a44', color: 'white' }}>
          <p>© {new Date().getFullYear()} Bernard Mumba Civil & Structural Consultants</p>
        </footer>
      </body>
    </html>
  );
}

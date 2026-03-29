export default function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "#fff",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 30,
        }}
      >
        {/* Logo + About */}
        <div>
          <h2 style={{ marginBottom: 10 }}>NestFinder</h2>
          <p style={{ color: "#ccc", fontSize: 14 }}>
            India’s trusted platform to buy, sell and rent properties.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4>Company</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["About", "Careers", "Blog"].map((item) => (
              <li key={item} style={{ margin: "8px 0" }}>
                <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Properties */}
        <div>
          <h4>Properties</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["Buy", "Rent", "Sell"].map((item) => (
              <li key={item} style={{ margin: "8px 0" }}>
                <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4>Support</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["Contact", "Help", "Privacy"].map((item) => (
              <li key={item} style={{ margin: "8px 0" }}>
                <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          textAlign: "center",
          marginTop: 30,
          borderTop: "1px solid #333",
          paddingTop: 20,
          fontSize: 13,
          color: "#aaa",
        }}
      >
        © 2025 NestFinder. All rights reserved.
      </div>
    </footer>
  );
}
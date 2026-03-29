export default function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        padding: "60px 40px 32px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  fontWeight: 900,
                  color: "#fff",
                  fontFamily: "serif",
                }}
              >
                N
              </div>
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                NestFinder
              </span>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: 14,
                lineHeight: 1.8,
                fontFamily: "'DM Sans', sans-serif",
                maxWidth: 280,
              }}
            >
              India's most trusted real estate platform. Find, buy, rent and sell properties with confidence.
            </p>
          </div>

          {[
            { title: "Company", links: ["About Us", "Careers", "Press", "Blog"] },
            { title: "Properties", links: ["Buy", "Rent", "Commercial", "New Projects"] },
            { title: "Support", links: ["Help Center", "Contact Us", "Privacy Policy", "Terms"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>
                {col.title}
              </h4>
              {col.links.map((link) => (
                <div key={link} style={{ marginBottom: 12 }}>
                  <a
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: 14,
                      textDecoration: "none",
                      fontFamily: "'DM Sans', sans-serif",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>
            © 2025 NestFinder. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>
            🇮🇳 Made for India
          </p>
        </div>
      </div>
    </footer>
  );
}
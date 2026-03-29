import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "12px 40px" : "20px 40px",
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled
          ? "0 1px 40px rgba(0,0,0,0.1)"
          : "none",
        transition: "all 0.4s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background:
              "linear-gradient(135deg, #1a3c5e 0%, #2563eb 100%)",
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
            letterSpacing: "-0.3px",
            color: scrolled ? "#1a3c5e" : "#fff",
            transition: "color 0.4s",
          }}
        >
          NestFinder
        </span>
      </div>

      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {["Buy", "Rent", "Projects", "Developers"].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item.toLowerCase())}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              fontWeight: 500,
              color: scrolled ? "#374151" : "rgba(255,255,255,0.9)",
              transition: "color 0.3s",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = scrolled ? "#2563eb" : "#fff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color =
                scrolled ? "#374151" : "rgba(255,255,255,0.9)")
            }
          >
            {item}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <button
          style={{
            padding: "9px 22px",
            borderRadius: 8,
            border: `1.5px solid ${
              scrolled ? "#2563eb" : "rgba(255,255,255,0.6)"
            }`,
            background: "transparent",
            color: scrolled ? "#2563eb" : "#fff",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.3s",
          }}
        >
          Sign In
        </button>
        <button
          style={{
            padding: "9px 22px",
            borderRadius: 8,
            border: "none",
            background:
              "linear-gradient(135deg, #2563eb, #1d4ed8)",
            color: "#fff",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
            transition: "all 0.3s",
          }}
        >
          Post Property
        </button>
      </div>
    </nav>
  );
}
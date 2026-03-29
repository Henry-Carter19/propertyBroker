import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: scrolled ? "12px 40px" : "20px 40px",
        background: scrolled ? "#ffffff" : "transparent",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <h2 style={{ margin: 0, color: scrolled ? "#000" : "#fff" }}>
        NestFinder
      </h2>

      {/* Menu */}
      <div style={{ display: "flex", gap: 20 }}>
        {["buy", "projects", "rent"].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: scrolled ? "#000" : "#fff",
              fontWeight: 500,
            }}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: 10 }}>
        <button
          style={{
            padding: "8px 16px",
            border: "1px solid #2563eb",
            background: "transparent",
            color: "#2563eb",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>

        <button
          style={{
            padding: "8px 16px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Post Property
        </button>
      </div>
    </nav>
  );
}
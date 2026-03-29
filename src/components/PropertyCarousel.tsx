import { useState } from "react";
import { PROPERTIES } from "../data/data";

export default function PropertyCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () =>
    setActiveIdx((i) => Math.min(i + 1, PROPERTIES.length - 1));

  const prev = () =>
    setActiveIdx((i) => Math.max(i - 1, 0));

  return (
    <section style={{ padding: 40, background: "#f5f5f5" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        Featured Properties
      </h2>

      {/* Buttons */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <button onClick={prev}>←</button>
        <button onClick={next}>→</button>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          gap: 20,
          justifyContent: "center",
        }}
      >
        {PROPERTIES.map((prop, i) => (
          <div
            key={prop.id}
            style={{
              width: 300,
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 10,
              background: "#fff",
              opacity: i === activeIdx ? 1 : 0.4,
            }}
          >
            <img
              src={prop.image}
              alt={prop.title}
              style={{ width: "100%", height: 150, objectFit: "cover" }}
            />

            <h3>{prop.title}</h3>
            <p>{prop.location}</p>

            <p>
              <strong>{prop.price}</strong>
            </p>

            <p>{prop.bhk} • {prop.area}</p>

            <button
              style={{
                background: "#2563eb",
                color: "#fff",
                border: "none",
                padding: 8,
                width: "100%",
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
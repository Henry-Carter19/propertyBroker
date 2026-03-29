import { useState } from "react";
import { CITIES } from "../data/data";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"Buy" | "Rent" | "Sell">("Buy");
  const [searchCity, setSearchCity] = useState("Mumbai");

  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.35)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 900,
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "#fff",
            marginBottom: 20,
          }}
        >
          Find Your Perfect Home
        </h1>

        {/* Search Box */}
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: 20,
          }}
        >
          {/* Tabs */}
          <div style={{ display: "flex", marginBottom: 10 }}>
            {(["Buy", "Rent", "Sell"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  flex: 1,
                  padding: 10,
                  background: activeTab === tab ? "#2563eb" : "#eee",
                  color: activeTab === tab ? "#fff" : "#000",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div style={{ display: "flex", gap: 10 }}>
            <select
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
            >
              {CITIES.map((c) => (
                <option key={c.name}>{c.name}</option>
              ))}
            </select>

            <input
              placeholder="Search property..."
              style={{ flex: 1 }}
            />

            <button
              style={{
                background: "#2563eb",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
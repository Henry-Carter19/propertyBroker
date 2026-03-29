import { useIntersectionObserver } from "../hooks/hooks";

export default function WhyUsSection() {
  const { ref, visible } = useIntersectionObserver();

  const features = [
    {
      icon: "🛡️",
      title: "RERA Verified",
      desc: "All properties are verified and legally safe.",
    },
    {
      icon: "🔍",
      title: "Smart Search",
      desc: "Advanced filters to find your perfect home.",
    },
    {
      icon: "📞",
      title: "Expert Support",
      desc: "Get help from property experts anytime.",
    },
    {
      icon: "🏆",
      title: "Trusted Platform",
      desc: "Used by millions across India.",
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: 60,
        background: "#0f172a",
        color: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 40 }}>
        Why Choose Us
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {features.map((f, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              opacity: visible ? 1 : 0.5,
              transition: "0.5s",
            }}
          >
            <div style={{ fontSize: 40 }}>{f.icon}</div>
            <h3>{f.title}</h3>
            <p style={{ color: "#ccc" }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
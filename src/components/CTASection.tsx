import { useIntersectionObserver } from "../hooks/hooks";

export default function CTASection() {
  const { ref, visible } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      style={{
        padding: 60,
        background: "#2563eb",
        color: "#fff",
        textAlign: "center",
        opacity: visible ? 1 : 0.6,
        transition: "opacity 0.5s",
      }}
    >
      <h2 style={{ marginBottom: 20 }}>
        Ready to Find Your Dream Home?
      </h2>

      <p style={{ marginBottom: 30 }}>
        Join thousands of happy buyers today.
      </p>

      <button
        style={{
          padding: "12px 24px",
          background: "#fff",
          color: "#2563eb",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Browse Properties
      </button>
    </section>
  );
}
import { STATS } from "../data/data";
import { useIntersectionObserver, useCountUp } from "../hooks/hooks";
import type { Stat } from "../types/types";

function StatCard({ stat, visible }: { stat: Stat; visible: boolean }) {
  const count = useCountUp(stat.value, visible);

  return (
    <div
      style={{
        textAlign: "center",
        padding: 20,
      }}
    >
      <h2 style={{ fontSize: 28 }}>{count}</h2>
      <p style={{ color: "#666" }}>{stat.label}</p>
    </div>
  );
}

export default function StatsSection() {
  const { ref, visible } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      style={{
        padding: "60px 20px",
        background: "#fff",
        borderBottom: "1px solid #eee",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {STATS.map((stat) => (
          <StatCard key={stat.label} stat={stat} visible={visible} />
        ))}
      </div>
    </section>
  );
}
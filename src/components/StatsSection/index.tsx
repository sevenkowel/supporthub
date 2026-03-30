const stats = [
  { number: '50+', label: '交易品种' },
  { number: '1:500', label: '最大杠杆' },
  { number: '0.01', label: '最低手数(Lot)' },
  { number: '24/5', label: '交易时间' },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '16px',
          maxWidth: 800,
          margin: '0 auto',
        }}>
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

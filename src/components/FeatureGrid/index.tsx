const features = [
  {
    title: '易学易用',
    description: '从账户注册到第一笔交易，手把手带您了解外汇保证金交易全流程，即使零经验也能快速上手。',
    link: '/docs/getting-started/intro',
  },
  {
    title: '专业内容',
    description: '深入理解保证金、杠杆、点差、佣金等核心概念，掌握交易基础知识与风险管理策略。',
    link: '/docs/trading-basics/intro',
  },
  {
    title: '全面保障',
    description: '了解保证金追缴、强平机制和负余额保护，学习如何合理运用杠杆控制交易风险。',
    link: '/docs/risk-management/intro',
  },
];

export default function FeatureGrid() {
  return (
    <section className="vue-features">
      <div className="container">
        <h2 className="vue-features-title">为什么选择我们</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0',
          maxWidth: 960,
          margin: '0 auto',
        }}>
          {features.map((feature) => (
            <a
              key={feature.title}
              href={feature.link}
              className="vue-feature-item"
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

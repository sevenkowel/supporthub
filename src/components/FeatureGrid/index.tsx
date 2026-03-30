const features = [
  {
    icon: '📖',
    title: '入门指南',
    description: '从账户注册到第一笔交易，手把手带您了解外汇保证金交易全流程。',
    link: '/docs/getting-started/intro',
  },
  {
    icon: '📊',
    title: '交易基础',
    description: '深入理解保证金、杠杆、点差、佣金等核心概念，掌握交易基础知识。',
    link: '/docs/trading-basics/intro',
  },
  {
    icon: '🛡️',
    title: '风险管理',
    description: '学习保证金追缴、强平机制和风险计算，保护您的交易资金安全。',
    link: '/docs/risk-management/intro',
  },
  {
    icon: '💰',
    title: '入金与出金',
    description: '支持多种支付方式，了解手续费、处理时间和限额规则。',
    link: '/docs/deposits-withdrawals/intro',
  },
  {
    icon: '🔧',
    title: '账户管理',
    description: '账户类型对比、安全设置修改、交易限额管理等实用操作指南。',
    link: '/docs/account-management/intro',
  },
  {
    icon: '❓',
    title: '常见问题',
    description: '汇总用户最常遇到的问题和解决方案，快速找到您需要的答案。',
    link: '/docs/faq/account',
  },
];

export default function FeatureGrid() {
  return (
    <section style={{padding: '80px 0'}}>
      <div className="container">
        <h2 className="section-title">探索知识库</h2>
        <p className="section-subtitle">
          按分类浏览文档，快速找到您需要的帮助
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
          maxWidth: 1080,
          margin: '0 auto',
        }}>
          {features.map((feature, idx) => (
            <a
              key={feature.title}
              href={feature.link}
              className={`feature-card animate-fade-in-up animate-delay-${idx + 1}`}
              style={{opacity: 0}}
            >
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

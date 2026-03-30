const articles = [
  {
    tag: '入门指南',
    title: '如何开设外汇保证金交易账户',
    excerpt: '详细说明账户注册流程、身份验证要求和首次入金步骤，帮助您快速开始交易。',
    time: '5 分钟',
    link: '/docs/getting-started/intro',
  },
  {
    tag: '交易基础',
    title: '理解保证金与杠杆的关系',
    excerpt: '深入解析保证金计算公式、杠杆比例对盈亏的影响，以及如何合理运用杠杆控制风险。',
    time: '8 分钟',
    link: '/docs/trading-basics/margin-and-leverage',
  },
  {
    tag: '风险管理',
    title: '什么是保证金追缴（Margin Call）？',
    excerpt: '了解保证金追缴的触发条件、强平机制运作原理，以及如何避免账户被强制平仓。',
    time: '6 分钟',
    link: '/docs/risk-management/margin-call-and-stop-out',
  },
  {
    tag: '资金管理',
    title: '入金方式与手续费详解',
    excerpt: '对比银行电汇、信用卡、电子钱包等入金渠道的手续费、到账时间和限额。',
    time: '4 分钟',
    link: '/docs/deposits-withdrawals/deposit-methods',
  },
];

export default function PopularArticles() {
  return (
    <section className="vue-articles">
      <div className="container">
        <h2 className="vue-section-title">热门文章</h2>
        <p className="vue-section-subtitle">
          其他用户最常阅读的帮助文档
        </p>
        <div style={{maxWidth: 720, margin: '0 auto'}}>
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.link}
              className="vue-article-card"
            >
              <span className="vue-article-tag">{article.tag}</span>
              <h3 className="vue-article-title">{article.title}</h3>
              <p className="vue-article-excerpt">{article.excerpt}</p>
              <span className="vue-article-meta">⏱ {article.time}</span>
            </a>
          ))}
        </div>
        <div style={{textAlign: 'center', marginTop: '48px'}}>
          <a href="/docs/getting-started/intro" className="vue-btn-primary">
            查看全部文档 →
          </a>
        </div>
      </div>
    </section>
  );
}

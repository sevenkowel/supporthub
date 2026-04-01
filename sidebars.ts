import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    // 1. Getting Started (新用户 & SEO引流)
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'getting-started/intro',
        'getting-started/how-to-open-an-account',
        'getting-started/account-types-explained',
        'getting-started/demo-vs-live-account',
        'getting-started/supported-countries',
        'getting-started/platform-download',
      ],
    },
    // 2. Account & Verification (KYC + 合规信任)
    {
      type: 'category',
      label: '👤 Account & Verification',
      collapsible: true,
      collapsed: true,
      items: [
        'account-management/intro',
        'account-management/account-types',
        'account-management/password-and-security',
        'account-management/account-limits',
        'account-verification/kyc-verification-guide',
        'account-verification/why-my-account-pending',
      ],
    },
    // 3. Deposits & Withdrawals (转化关键区)
    {
      type: 'category',
      label: '💰 Deposits & Withdrawals',
      collapsible: true,
      collapsed: true,
      items: [
        'deposits-withdrawals/intro',
        'deposits-withdrawals/deposit-methods',
        'deposits-withdrawals/withdrawal-methods',
        'deposits-withdrawals/withdrawal-pending',
        'deposits-withdrawals/fees-and-processing-time',
      ],
    },
    // 4. Trading (交易逻辑 + 执行问题)
    {
      type: 'category',
      label: '📈 Trading',
      collapsible: true,
      collapsed: true,
      items: [
        'trading-basics/intro',
        'trading-basics/margin-and-leverage',
        'trading-basics/spread-and-commission',
        'trading-basics/swap-rollover',
        'trading-basics/order-types',
        'trading-basics/trading-hours',
      ],
    },
    // 5. Copy Trading (社交跟单)
    {
      type: 'category',
      label: '👥 Copy Trading',
      collapsible: true,
      collapsed: true,
      items: [
        'copy-trading/intro',
      ],
    },
    // 6. Platforms (MT4/MT5技术问题)
    {
      type: 'category',
      label: '💻 Platforms',
      collapsible: true,
      collapsed: true,
      items: [
        'platforms/intro',
        'platforms/mt4',
        'platforms/mt5',
      ],
    },
    // 7. Risk Management (风险管理)
    {
      type: 'category',
      label: '🛡️ Risk Management',
      collapsible: true,
      collapsed: true,
      items: [
        'risk-management/intro',
        'risk-management/margin-call-and-stop-out',
        'risk-management/risk-calculation',
        'risk-management/negative-balance-protection',
      ],
    },
    // 8. Security & Compliance (安全合规)
    {
      type: 'category',
      label: '🔒 Security & Compliance',
      collapsible: true,
      collapsed: true,
      items: [
        'security-compliance/intro',
      ],
    },
    // 9. Troubleshooting (故障排除)
    {
      type: 'category',
      label: '🔧 Troubleshooting',
      collapsible: true,
      collapsed: true,
      items: [
        'troubleshooting/intro',
        'troubleshooting/mt5-invalid-price',
        'troubleshooting/trade-context-busy',
      ],
    },
    // 10. Glossary (名词解释 - 折叠)
    {
      type: 'category',
      label: '📚 Glossary',
      collapsible: true,
      collapsed: true,
      items: [
        'glossary/overview',
        'glossary/margin',
        'glossary/margin-call',
        'glossary/leverage',
        'glossary/slippage',
        'glossary/spread',
        'glossary/swap',
        'glossary/pip',
        'glossary/liquidity',
      ],
    },
  ],

  // FAQ 结构化数据专用
  faqSidebar: [
    {
      type: 'category',
      label: 'Account FAQ',
      collapsible: true,
      collapsed: false,
      items: ['faq/account-faq'],
    },
    {
      type: 'category',
      label: 'Trading FAQ',
      collapsible: true,
      collapsed: true,
      items: ['faq/trading'],
    },
    {
      type: 'category',
      label: 'Deposit FAQ',
      collapsible: true,
      collapsed: true,
      items: ['faq/deposits'],
    },
    {
      type: 'category',
      label: 'Withdrawal FAQ',
      collapsible: true,
      collapsed: true,
      items: ['faq/withdrawals'],
    },
    {
      type: 'category',
      label: 'Platform FAQ',
      collapsible: true,
      collapsed: true,
      items: ['faq/login-issues'],
    },
  ],
};

export default sidebars;

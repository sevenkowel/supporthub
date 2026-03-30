import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '🚀 入门指南',
      collapsible: true,
      collapsed: false,
      items: [
        'getting-started/intro',
        'getting-started/account-registration',
        'getting-started/account-verification',
        'getting-started/first-deposit',
        'getting-started/platform-download',
      ],
    },
    {
      type: 'category',
      label: '📊 交易基础',
      collapsible: true,
      collapsed: true,
      items: [
        'trading-basics/intro',
        'trading-basics/margin-and-leverage',
        'trading-basics/spread-and-commission',
        'trading-basics/order-types',
        'trading-basics/trading-hours',
      ],
    },
    {
      type: 'category',
      label: '💰 入金与出金',
      collapsible: true,
      collapsed: true,
      items: [
        'deposits-withdrawals/intro',
        'deposits-withdrawals/deposit-methods',
        'deposits-withdrawals/withdrawal-methods',
        'deposits-withdrawals/fees-and-processing-time',
      ],
    },
    {
      type: 'category',
      label: '🛡️ 风险管理',
      collapsible: true,
      collapsed: true,
      items: [
        'risk-management/intro',
        'risk-management/margin-call-and-stop-out',
        'risk-management/risk-calculation',
        'risk-management/negative-balance-protection',
      ],
    },
    {
      type: 'category',
      label: '🔧 账户管理',
      collapsible: true,
      collapsed: true,
      items: [
        'account-management/intro',
        'account-management/account-types',
        'account-management/password-and-security',
        'account-management/account-limits',
      ],
    },
  ],

  faqSidebar: [
    {
      type: 'category',
      label: '账户相关',
      collapsible: true,
      collapsed: false,
      items: [
        'faq/account',
        'faq/verification',
        'faq/login-issues',
      ],
    },
    {
      type: 'category',
      label: '交易相关',
      collapsible: true,
      collapsed: true,
      items: [
        'faq/trading',
        'faq/order-execution',
        'faq/slippage',
      ],
    },
    {
      type: 'category',
      label: '资金相关',
      collapsible: true,
      collapsed: true,
      items: [
        'faq/deposits',
        'faq/withdrawals',
      ],
    },
  ],
};

export default sidebars;

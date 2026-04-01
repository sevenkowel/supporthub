import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Intercom, update } from '@intercom/messenger-js-sdk';

// ✅ 替换为您的实际 Intercom App ID
const INTERCOM_APP_ID = 'your-intercom-app-id';

/**
 * 从 URL 路径解析出所属的文档分类
 * 例如 /docs/deposits-withdrawals/withdrawal-pending → "Deposits & Withdrawals"
 */
function getCategoryFromPath(pathname: string): string {
  const categoryMap: Record<string, string> = {
    'getting-started':     'Getting Started',
    'account-management':  'Account & Verification',
    'account-verification':'Account & Verification',
    'deposits-withdrawals':'Deposits & Withdrawals',
    'trading-basics':      'Trading',
    'copy-trading':        'Copy Trading',
    'platforms':           'Platforms',
    'risk-management':     'Risk Management',
    'security-compliance': 'Security & Compliance',
    'troubleshooting':     'Troubleshooting',
    'glossary':            'Glossary',
    'faq':                 'FAQ',
    'blog':                'Blog',
  };

  for (const [key, label] of Object.entries(categoryMap)) {
    if (pathname.includes(`/${key}/`) || pathname.endsWith(`/${key}`)) {
      return label;
    }
  }
  return 'General';
}

/**
 * 从 Docusaurus 当前 locale 映射出 Intercom 支持的 language code
 */
function getIntercomLanguage(locale: string): string {
  const localeMap: Record<string, string> = {
    'zh-Hans': 'zh-CN',
    'en':      'en',
    'vi':      'vi',
    'th':      'th',
    'ja':      'ja',
    'ko':      'ko',
    'id':      'id',
  };
  return localeMap[locale] ?? 'en';
}

export default function IntercomProviderWrapper() {
  const location = useLocation();
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;

  // 初始化 Intercom（仅执行一次）
  useEffect(() => {
    Intercom({
      app_id: INTERCOM_APP_ID,
      // 隐藏默认的 Intercom 圆形按钮，由我们的导航栏按钮触发
      hide_default_launcher: true,
      // 导航栏"联系客服"按钮的 CSS class
      custom_launcher_selector: '.intercom-trigger-btn',
      // 初始语言
      language_override: getIntercomLanguage(currentLocale),
    });
  }, []);

  // 每次页面路由变化时，更新 Intercom 上下文
  useEffect(() => {
    const fullUrl = typeof window !== 'undefined'
      ? window.location.href
      : location.pathname;

    const category = getCategoryFromPath(location.pathname);
    const language = getIntercomLanguage(currentLocale);

    // 获取页面标题
    const pageTitle = typeof document !== 'undefined'
      ? document.title
      : '';

    update({
      // 当前访问的文档页面完整 URL
      last_request_at: Math.floor(Date.now() / 1000),
      // 自定义字段：传递上下文给客服
      'Current Page URL':      fullUrl,
      'Current Page Title':    pageTitle,
      'Support Category':      category,
      'User Language':         language,
      'User Locale':           currentLocale,
    });
  }, [location.pathname, currentLocale]);

  return null;
}

import { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Intercom from '@intercom/messenger-js-sdk';

// ✅ Intercom App ID
const INTERCOM_APP_ID = 'xmlmu479';

/**
 * 从 URL 路径解析出所属的文档分类
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

// 打开 Intercom 的全局函数
function openIntercom() {
  const w = window as any;
  if (w.Intercom) {
    w.Intercom('show');
  } else {
    console.warn('⚠️ Intercom 未加载');
  }
}

// 挂载到 window 上
if (typeof window !== 'undefined') {
  (window as any).openIntercom = openIntercom;
}

export default function IntercomProviderWrapper() {
  const location = useLocation();
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  const [isReady, setIsReady] = useState(false);

  // 初始化 Intercom
  useEffect(() => {
    try {
      Intercom({
        app_id: INTERCOM_APP_ID,
        hide_default_launcher: true,
        language_override: getIntercomLanguage(currentLocale),
      });
      setIsReady(true);
      console.log('✅ Intercom 初始化成功');
    } catch (error) {
      console.error('❌ Intercom 初始化失败:', error);
    }
  }, []);

  // 每次页面路由变化时，更新 Intercom 上下文
  useEffect(() => {
    if (!isReady) return;

    const fullUrl = typeof window !== 'undefined' ? window.location.href : location.pathname;
    const category = getCategoryFromPath(location.pathname);
    const language = getIntercomLanguage(currentLocale);
    const pageTitle = typeof document !== 'undefined' ? document.title : '';

    if (typeof window !== 'undefined' && (window as any).Intercom) {
      (window as any).Intercom('update', {
        'Current Page URL':    fullUrl,
        'Current Page Title':  pageTitle,
        'Support Category':    category,
        'User Language':       language,
        'User Locale':         currentLocale,
      });
    }
  }, [location.pathname, currentLocale, isReady]);

  // 监听点击事件，拦截"联系客服"按钮
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // 检查是否点击了带有 intercom-trigger-btn 类的链接
      if (target.closest('.intercom-trigger-btn')) {
        e.preventDefault();
        openIntercom();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
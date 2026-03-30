import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Forex Help Center',
  tagline: '外汇保证金交易帮助中心 — 专业知识库与客户支持',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://forex-help.example.com',
  baseUrl: '/',

  organizationName: 'forex-help',
  projectName: 'forex-help-center',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
      },
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogTitle: '产品更新',
          blogDescription: '外汇保证金产品最新动态和更新公告',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Search: Configure Algolia DocSearch when ready
  // themes: ['@docusaurus/theme-search-algolia'],
  // plugins: ['docusaurus-lunr-search'],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: 'announcement',
      content:
        '📢 最新公告：平台已完成系统升级，新增 50+ 交易品种。如遇问题请联系 <a href="javascript:void(0)" onclick="window.Intercom && window.Intercom(\'show\')">在线客服</a>',
      backgroundColor: '#0066FF',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'Help Center',
      logo: {
        alt: 'Forex Help Center Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '文档',
        },
        {
          type: 'docSidebar',
          sidebarId: 'faqSidebar',
          position: 'left',
          label: '常见问题',
        },
        {to: '/blog', label: '产品更新', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'javascript:void(0)',
          label: '💬 联系客服',
          position: 'right',
          className: 'intercom-trigger-btn',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '入门指南',
              to: '/docs/getting-started/intro',
            },
            {
              label: '交易教程',
              to: '/docs/trading-basics/intro',
            },
            {
              label: '风险管理',
              to: '/docs/risk-management/intro',
            },
          ],
        },
        {
          title: '支持',
          items: [
            {
              label: '常见问题',
              to: '/docs/faq/account',
            },
            {
              label: '提交工单',
              href: 'javascript:void(0)',
            },
            {
              label: '联系邮箱',
              href: 'mailto:support@forex-help.example.com',
            },
          ],
        },
        {
          title: '合规',
          items: [
            {
              label: '隐私政策',
              href: '/legal/privacy',
            },
            {
              label: '服务条款',
              href: '/legal/terms',
            },
            {
              label: '风险披露',
              href: '/legal/risk-disclosure',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Forex Help Center. All rights reserved. 外汇保证金交易存在高风险。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

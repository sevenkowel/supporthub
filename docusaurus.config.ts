import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Forex Help Center',
  tagline: '外汇保证金交易帮助中心',
  favicon: 'img/favicon.png',

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
    locales: ['zh-Hans', 'en', 'vi', 'th', 'ja', 'ko', 'id'],
    localeConfigs: {
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
      },
      en: {
        label: 'English',
        direction: 'ltr',
      },
      vi: {
        label: 'Tiếng Việt',
        direction: 'ltr',
      },
      th: {
        label: 'ไทย',
        direction: 'ltr',
      },
      ja: {
        label: '日本語',
        direction: 'ltr',
      },
      ko: {
        label: '한국어',
        direction: 'ltr',
      },
      id: {
        label: 'Bahasa Indonesia',
        direction: 'ltr',
      },
    },
  },

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh'], // 支持中英文搜索
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
        docsRouteBasePath: '/docs',
        indexBlog: true,
        indexPages: true,
        searchBarShortcutHint: true,
        searchBarShortcut: true,
        searchBarPosition: 'right',
        // 显式设置搜索索引生成
        indexDocs: true,
      },
    ],
  ],

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

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'announcement',
      content:
        '平台已完成系统升级，新增 50+ 交易品种。如遇问题请联系 <a href="#" onclick="event.preventDefault(); document.querySelector(\'.intercom-trigger-btn\')?.click();">在线客服</a>',
      backgroundColor: '#f6f6f7',
      textColor: '#213547',
      isCloseable: true,
    },
    navbar: {
      title: 'Help Center',
      logo: {
        alt: 'Forex Help Center Logo',
        src: 'img/logo 品牌.png',
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
          href: '#',
          label: '联系客服',
          position: 'right',
          className: 'intercom-trigger-btn',
        },
        // TODO: Enable auth navbar item after fixing import paths
        // {
        //   type: 'custom-authNavbarItem',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'light',
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
      copyright: `© ${new Date().getFullYear()} Forex Help Center. 外汇保证金交易存在高风险。`,
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

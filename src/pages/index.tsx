import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import FeatureGrid from '@site/src/components/FeatureGrid';
import PopularArticles from '@site/src/components/PopularArticles';
import StatsSection from '@site/src/components/StatsSection';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner, 'vue-hero')}>
      <div className="container">
        <h1 className="hero-title">
          外汇保证金<br />Help Center
        </h1>
        <p className="hero-desc">
          从入门到精通，全面了解外汇保证金交易。浏览我们的专业文档，或直接联系客服团队获取即时帮助。
        </p>
        <div className="hero-actions">
          <Link className="vue-btn-primary" to="/docs/getting-started/intro">
            浏览文档
          </Link>
          <button
            className="vue-btn-outline"
            onClick={() => window.Intercom && window.Intercom('show')}
          >
            联系客服
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`外汇保证金帮助中心`}
      description="外汇保证金交易专业帮助中心 — 交易指南、风险管理、账户管理及客户支持"
    >
      <HomepageHeader />
      <main>
        <FeatureGrid />
        <StatsSection />
        <PopularArticles />
      </main>
    </Layout>
  );
}

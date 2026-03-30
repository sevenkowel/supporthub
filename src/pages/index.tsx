import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import FeatureGrid from '@site/src/components/FeatureGrid';
import PopularArticles from '@site/src/components/PopularArticles';
import StatsSection from '@site/src/components/StatsSection';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero-gradient', styles.heroBanner)}>
      <div className="container" style={{position: 'relative', zIndex: 2}}>
        <div style={{
          maxWidth: 720,
          margin: '0 auto',
          textAlign: 'center',
          paddingTop: '80px',
          paddingBottom: '80px',
        }}>
          <div className={styles.heroBadge}>
            🏛️ 专业外汇保证金知识库
          </div>
          <Heading as="h1" style={{
            fontSize: '52px',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '20px',
            color: '#FFFFFF',
          }}>
            外汇保证金<br />
            <span style={{
              background: 'linear-gradient(135deg, #66B0FF 0%, #B794F6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Help Center</span>
          </Heading>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.75)',
            maxWidth: 520,
            margin: '0 auto 36px',
            lineHeight: 1.7,
          }}>
            从入门到精通，全面了解外汇保证金交易。浏览我们的专业文档，或直接联系客服团队获取即时帮助。
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Link className="cta-button-primary" to="/docs/getting-started/intro">
              📖 浏览文档
            </Link>
            <button
              className="cta-button-secondary"
              style={{color: 'rgba(255,255,255,0.9)'}}
              onClick={() => window.Intercom && window.Intercom('show')}
            >
              💬 联系客服
            </button>
          </div>
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

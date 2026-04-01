import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

/** 术语词典 — 在这里集中维护所有术语的简短定义 */
const GLOSSARY_DEFINITIONS: Record<string, { definition: string; link: string }> = {
  // 保证金类
  margin: {
    definition: '保证金是开仓所需存入的押金，占合约价值的一定百分比。',
    link: '/docs/glossary/margin',
  },
  leverage: {
    definition: '杠杆允许您用小额资金控制更大的仓位，同时放大收益和亏损。',
    link: '/docs/glossary/leverage',
  },
  slippage: {
    definition: '滑点是预期成交价格与实际成交价格之间的差异，在波动行情中更常见。',
    link: '/docs/glossary/slippage',
  },
  spread: {
    definition: '点差是买入价（Ask）与卖出价（Bid）之间的差值，是主要的交易成本之一。',
    link: '/docs/glossary/spread',
  },
  swap: {
    definition: '隔夜利息（Swap）是持仓过夜产生的费用或收益，由两种货币的利率差决定。',
    link: '/docs/glossary/swap',
  },
  // 中文术语
  '保证金': {
    definition: '保证金是开仓所需存入的押金，占合约价值的一定百分比。',
    link: '/docs/glossary/margin',
  },
  '杠杆': {
    definition: '杠杆允许您用小额资金控制更大的仓位，同时放大收益和亏损。',
    link: '/docs/glossary/leverage',
  },
  '滑点': {
    definition: '滑点是预期成交价格与实际成交价格之间的差异，在波动行情中更常见。',
    link: '/docs/glossary/slippage',
  },
  '点差': {
    definition: '点差是买入价（Ask）与卖出价（Bid）之间的差值，是主要的交易成本之一。',
    link: '/docs/glossary/spread',
  },
  '隔夜利息': {
    definition: '隔夜利息（Swap）是持仓过夜产生的费用或收益，由两种货币的利率差决定。',
    link: '/docs/glossary/swap',
  },
};

interface GlossaryProps {
  /** 术语 key，对应 GLOSSARY_DEFINITIONS 中的键 */
  term: string;
  /** 显示在文档中的文本，默认与 term 相同 */
  children?: React.ReactNode;
}

/**
 * 术语提示组件 — 悬停显示定义，点击跳转到术语详情页
 * 
 * 用法：
 * import Glossary from '@site/src/components/Glossary';
 * 
 * 您的持仓产生了 <Glossary term="swap">隔夜利息</Glossary>...
 * 注意控制 <Glossary term="margin">保证金</Glossary> 比例...
 */
export default function Glossary({ term, children }: GlossaryProps) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('top');
  const triggerRef = useRef<HTMLSpanElement>(null);
  const entry = GLOSSARY_DEFINITIONS[term.toLowerCase()] ?? GLOSSARY_DEFINITIONS[term];

  // 计算 tooltip 是放上面还是下面
  useEffect(() => {
    if (!visible || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const spaceAbove = rect.top;
    setPosition(spaceAbove > 140 ? 'top' : 'bottom');
  }, [visible]);

  if (!entry) {
    // 术语不在词典中时，直接渲染文本
    return <>{children ?? term}</>;
  }

  return (
    <span
      className={styles.wrapper}
      ref={triggerRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      tabIndex={0}
      role="button"
      aria-label={`术语：${term}`}
    >
      <span className={styles.trigger}>{children ?? term}</span>

      {visible && (
        <span
          className={`${styles.tooltip} ${
            position === 'bottom' ? styles.tooltipBottom : styles.tooltipTop
          }`}
          role="tooltip"
        >
          <span className={styles.tooltipTerm}>{term}</span>
          <span className={styles.tooltipDef}>{entry.definition}</span>
          <a
            href={entry.link}
            className={styles.tooltipLink}
            onClick={(e) => e.stopPropagation()}
          >
            查看完整说明 →
          </a>
        </span>
      )}
    </span>
  );
}

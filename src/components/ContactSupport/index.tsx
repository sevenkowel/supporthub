import React from 'react';
import styles from './styles.module.css';

interface ContactSupportProps {
  /** 显示在标题中，如 "出金问题" */
  topic?: string;
  /** 覆盖默认描述文字 */
  description?: string;
}

/**
 * 文档页底部的"联系客服"横幅组件
 * 
 * 使用方式（在任何 .md / .mdx 文件中）：
 * import ContactSupport from '@site/src/components/ContactSupport';
 * <ContactSupport topic="出金" />
 */
export default function ContactSupport({
  topic,
  description,
}: ContactSupportProps) {
  const title = topic ? `还有关于${topic}的问题？` : '还有问题没解决？';
  const desc =
    description ??
    '我们的支持团队 24/7 在线，平均响应时间不超过 5 分钟。';

  const handleOpenIntercom = () => {
    if (typeof window !== 'undefined' && (window as any).Intercom) {
      (window as any).Intercom('show');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{desc}</p>
        </div>
        <button
          className={styles.button}
          onClick={handleOpenIntercom}
          type="button"
        >
          💬 联系在线客服
        </button>
      </div>
    </div>
  );
}

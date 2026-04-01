import React, { useCallback } from 'react';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/NavbarItem/LinkNavbarItem';

export default function IntercomLinkNavbarItem({
  href,
  label,
  position,
  className,
  to,
  ...props
}: Props): JSX.Element {
  const handleClick = useCallback((e: React.MouseEvent) => {
    // 延迟一点执行，确保 Intercom 已加载
    setTimeout(() => {
      const w = window as any;
      if (w.Intercom) {
        w.Intercom('show');
      } else {
        console.warn('Intercom 未加载');
      }
    }, 100);
  }, []);

  // 使用 Link 组件，并添加 onClick 处理
  return (
    <Link
      className={className}
      onClick={handleClick}
      {...props}
    >
      {label}
    </Link>
  );
}
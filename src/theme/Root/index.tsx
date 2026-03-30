import React from 'react';
import OriginalRoot from '@theme-original/Root';
import IntercomProviderWrapper from '@site/src/components/IntercomProvider';

export default function Root({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <OriginalRoot>{children}</OriginalRoot>
      <IntercomProviderWrapper />
    </>
  );
}

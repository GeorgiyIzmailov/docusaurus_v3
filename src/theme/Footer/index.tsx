import React from 'react';
import Footer from '@theme-original/Footer';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { InkeepChatButton } from '@site/src/components/InkeepChatButton/InkeepChatButton';

export default function FooterWrapper(props) {
  return (
    <>
        <BrowserOnly fallback={<div />}>
          {InkeepChatButton}
        </BrowserOnly>
        <Footer {...props} />
    </>
  );
}

import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './components/CodeBlock';
import Md from './DayDayUp.md';
import gfm from 'remark-gfm';
import HeadingBlock from './components/HeadingBlock';
import Page from 'src/components/Page';
const Markdown = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const a = document.createElement('a');
    a.href = hash;
    a.click();
    a.remove();
  }, []);
  return (
    <Page>
      <ReactMarkdown
        plugins={[gfm]}
        source={Md}
        escapeHtml={true}
        renderers={{ code: CodeBlock, heading: HeadingBlock }}
      />
    </Page>
  );
};

export default Markdown;

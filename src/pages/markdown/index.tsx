import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './components/CodeBlock';
import Md from './DayDayUp.md';
import gfm from 'remark-gfm';
import HeadingBlock from './components/HeadingBlock';
import { Page } from '@/components';
const Markdown = () => {
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

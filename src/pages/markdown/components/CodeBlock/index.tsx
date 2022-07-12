import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// 设置高亮样式
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import {
// 	jsx,
// 	javascript,
// 	typescript,
// 	tsx,
// 	less,
// 	css
// } from 'react-syntax-highlighter/dist/esm/languages/prism';

interface Props {
  language: any;
  value: any;
}
const CodeBlock: React.FC<Props> = ({ language, value }) => {
  // useEffect(() => {
  // 	SyntaxHighlighter.registerLanguage('tsx', tsx);
  // 	SyntaxHighlighter.registerLanguage('jsx', jsx);
  // 	SyntaxHighlighter.registerLanguage('javascript', javascript);
  // 	SyntaxHighlighter.registerLanguage('less', less);
  // 	SyntaxHighlighter.registerLanguage('css', css);
  // 	SyntaxHighlighter.registerLanguage('typescript', typescript);
  // }, []);
  return (
    // @ts-ignore
    <SyntaxHighlighter language={language} style={materialOceanic}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

import React, { useCallback, useEffect, useState } from 'react';
import classnames from 'classnames';
import marked from 'marked';
import hljs from 'highlight.js';
import CopyToClipboard from 'react-copy-to-clipboard';
import { MarkedProps } from './types';
import styles from './index.less';
import { reg } from './constants';

/**
 * 字符串代码--->代码库
 */
const Marked = (props: MarkedProps) => {
  const { children, type, className, style = {}, onCopy } = props;
  const [code, setCode] = useState<string>('');
  const [markContent, setMarkContent] = useState<string>('');
  const [copyText, setCopyText] = useState('复制');
  useEffect(() => {
    if (children) {
      setCode(children.match(reg)?.[0] || '');
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code) {
          return (
            '<pre class="hljs"><code>' + hljs.highlightAuto(code, type ? [type] : undefined).value + '</code></pre>'
          );
        },
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
      });
      const markedContentd = marked(children);
      setMarkContent(markedContentd);
    }
  }, [children, type]);

  const copyAction = useCallback((text: string, result: boolean) => {
    // 拷贝成功交互
    setCopyText('已复制');
    setTimeout(() => {
      setCopyText('复制');
    }, 2000);
    if (onCopy) {
      onCopy(text, result);
    }
  }, []);

  return (
    <div className={classnames(styles.marked, { className })} style={style}>
      <div className={classnames(styles['marked-content'])}>
        {markContent && <div dangerouslySetInnerHTML={{ __html: markContent }} />}
        <CopyToClipboard text={code} onCopy={copyAction}>
          <span className={styles['marked-content__copy']}>{copyText}</span>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export { Marked };

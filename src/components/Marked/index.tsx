import React, { useCallback, useEffect, useState } from 'react';
import classnames from 'classnames';
import marked from 'marked';
import hljs from 'highlight.js';
import CopyToClipboard from 'react-copy-to-clipboard';
import { MarkedProps } from './types';
import styles from './index.less';
import { reg } from './constants';
import { t } from '@/config/locales';

/**
 * 字符串代码--->代码库
 */
const Marked = (props: MarkedProps) => {
  const { children, type, className, style = {}, onCopy } = props;
  const [code, setCode] = useState<string>('');
  const [markContent, setMarkContent] = useState<string>('');
  const [copyText, setCopyText] = useState(t('components.Marked.copy'));

  useEffect(() => {
    if (children) {
      setCode(children.match(reg)?.[1] || '');
      marked.setOptions({
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
        // headerIds: true,
        // headerPrefix: 'md-header',
      });
      const renderer: Partial<marked.Renderer> = {
        heading(text: string, level: number) {
          return `
									<h${level} class="__anchor__" id="#${text}">
										${text}
									</h${level}>`;
        },
        table(header, body) {
          return `<div class="cg-table"><table>${header}${body}</table></div>`;
        },
      };

      const highlight = (code: string) => {
        return '<pre class="hljs"><code>' + hljs.highlightAuto(code, type ? [type] : undefined).value + '</code></pre>';
      };

      marked.use({ renderer, highlight });

      const markedContentd = marked(children);
      setMarkContent(markedContentd);
    }
  }, [children, type]);

  const copyAction = useCallback((text: string, result: boolean) => {
    // 拷贝成功交互
    setCopyText(t('components.Marked.copied'));
    setTimeout(() => {
      setCopyText(t('components.Marked.copy'));
    }, 2000);
    if (onCopy) {
      onCopy(text, result);
    }
  }, []);

  return (
    <div className={classnames(styles.marked, { className })} style={style}>
      <div className={classnames(styles['marked-content'])}>
        {markContent && <div dangerouslySetInnerHTML={{ __html: markContent }} />}
        {/* @ts-ignore */}
        <CopyToClipboard text={code} onCopy={copyAction}>
          <span className={styles['marked-content__copy']}>{copyText}</span>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export { Marked };

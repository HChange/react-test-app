import React, { useEffect, useRef } from 'react';
import marked from 'marked';

import hljs from 'highlight.js';
import { MarkedProps } from './types';

const Marked = (props: MarkedProps) => {
  const { children, type } = props;
  const dom = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (children && dom.current) {
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
      const markedContent = marked(children);
      dom.current.innerHTML = markedContent;
    }
  }, [children, type, dom]);
  return (
    <div>
      <div ref={dom} />
      <div>copy</div>
    </div>
  );
};

export { Marked };

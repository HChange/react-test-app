import React, { useEffect, useMemo, useRef } from 'react';
import MI from 'markdown-it';
import hljs from 'highlight.js';
import Md from '../markdown/DayDayUp.md';
import 'highlight.js/styles/monokai.css';
// import javascript from 'highlight.js/lib/languages/javascript';
// import shell from 'highlight.js/lib/languages/shell';
import Page from 'src/components/Page';
// hljs.registerLanguage('javascript', javascript);
// hljs.registerLanguage('shell', shell);

const MarkdownIt = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const mi = useMemo(() => {
    return new MI({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>';
          } catch (__) {}
        }

        return '<pre class="hljs"><code>' + str + '</code></pre>';
      },
    });
  }, []);
  useEffect(() => {
    hljs.highlightAll();
    if (targetRef.current) {
      const result = mi.render(Md);
      targetRef.current.innerHTML = result;
    }
  }, [mi, targetRef]);

  return (
    <Page>
      <div ref={targetRef} />
    </Page>
  );
};

export default MarkdownIt;

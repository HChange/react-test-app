import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import MI from 'markdown-it';
import hljs from 'highlight.js';
import Md from '../markdown/DayDayUp.md';
import styles from './index.less';
import 'highlight.js/styles/monokai.css';
import javascript from 'highlight.js/lib/languages/javascript';
import shell from 'highlight.js/lib/languages/shell';
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
				console.log(lang);
				console.log(hljs.getLanguage(lang));

				if (lang && hljs.getLanguage(lang)) {
					try {
						return (
							'<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>'
						);
					} catch (__) {}
				}

				return '<pre class="hljs"><code>' + str + '</code></pre>';
			}
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
		<div className={styles.wrapper}>
			<div className={styles.page} ref={targetRef} />
		</div>
	);
};

export default MarkdownIt;

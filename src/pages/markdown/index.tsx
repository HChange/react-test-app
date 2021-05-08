import React, { createElement, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './components/CodeBlock';
import Md from './DayDayUp.md';
import styles from './index.less';
import gfm from 'remark-gfm';
import HeadingBlock from './components/HeadingBlock';
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
		<div className={styles.wrapper}>
			<div className={styles.page}>
				<ReactMarkdown
					plugins={[gfm]}
					source={Md}
					escapeHtml={true}
					renderers={{ code: CodeBlock, heading: HeadingBlock }}
				/>
			</div>
		</div>
	);
};

export default Markdown;

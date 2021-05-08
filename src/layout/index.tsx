import React, { useCallback, useEffect, useRef } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import routes from '../config/routes';
import styles from './index.less';
import { RouteConfig } from 'react-router-config';

const Layout: React.FC<{}> = (props) => {
	console.log('render');

	const createLink = (routes: RouteConfig[]) => {
		return (
			<ul>
				{routes.map(({ name, path, routes }) => {
					if (path === '/') {
						return null;
					} else {
						return (
							<li key={name}>
								<NavLink to={path as any} activeClassName={styles.active}>
									{name}
								</NavLink>
							</li>
						);
					}
				})}
			</ul>
		);
	};

	// 处理logo背景色
	const logoRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		// eslint-disable-next-line no-undef
		let timer: NodeJS.Timeout;
		if (logoRef.current) {
			let val = 1;
			let flag = true;
			timer = setInterval(() => {
				if (flag) {
					if (val < 30) {
						val += 0.1;
					} else {
						flag = false;
					}
				} else {
					if (val > -30) {
						val -= 0.1;
					} else {
						flag = true;
					}
				}
				logoRef.current!.style.backgroundImage = `
        linear-gradient(${217 - 10 * val}deg, rgba(255, ${val * 10}, ${
					Math.random() * 100
				}, 1), rgba(255,0,0,0) ${70 - val}%),
        linear-gradient(${127 + 10 * val}deg, rgba(${Math.random() * 100}, 255, ${
					val * 10
				}, 1), rgba(0,255,${Math.random() * 100},0) ${70 - 0.5 * val}%),
        linear-gradient(${336 - 10 * val}deg, rgba(${val * 10},0,255,1), rgba(0,0,255,0) ${
					40 + val
				}%)
        `;
			}, 50);
		}
		return () => timer && clearInterval(timer);
	}, [logoRef]);

	return (
		<div className={styles.wrapper}>
			<BrowserRouter>
				<div className={styles.nav}>
					<div className={styles.logo} ref={logoRef}>
						Change Test
					</div>
					{createLink(routes)}
				</div>
				<div className={styles.content}>{props.children}</div>
			</BrowserRouter>
		</div>
	);
};

export default Layout;

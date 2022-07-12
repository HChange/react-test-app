/* eslint-disable no-undef */
import React, { useEffect, useMemo } from 'react';
import { BrowserRouter, NavLink, HashRouter } from 'react-router-dom';
import routes from '../config/routes';
import styles from './index.less';
import { RouteConfig } from 'react-router-config';

const Layout: React.FC<{}> = (props) => {
  // 根据hash定位页面滚动位置
  useEffect(() => {
    if (process.env.REACT_APP_IS_GITHUT === 'true') return;
    const hash = window.location.hash;
    if (!hash) return;
    const a = document.createElement('a');
    a.href = hash;
    a.click();
    a.remove();
  }, []);

  // 左侧导航栏
  const createNav = (routes: RouteConfig[]) => {
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

  const Router: any = useMemo(() => {
    return process.env.REACT_APP_IS_GITHUB === 'true' ? HashRouter : BrowserRouter;
  }, []);

  return (
    <div className={styles.wrapper}>
      <Router>
        <header className={styles.header}>
          <div className={styles.logo}>Change Test</div>
        </header>
        <main className={styles.main}>
          <nav className={styles.nav}>{createNav(routes)}</nav>
          <article className={styles.content}>{props.children}</article>
        </main>
        {/* <footer className={styles.footer} /> */}
      </Router>
    </div>
  );
};

export default Layout;

/* eslint-disable no-undef */
import React, { Suspense, useEffect, useMemo } from 'react';
import { BrowserRouter, NavLink, HashRouter } from 'react-router-dom';
import { RouteConfig, routes } from '../config/routes';
import styles from './index.less';

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
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
        {routes.map(({ name, path }) => {
          if (path === '/') {
            return null;
          } else {
            return (
              <li key={name}>
                <NavLink to={path as any} className={({ isActive }) => (isActive ? styles.active : '')}>
                  {name}
                </NavLink>
              </li>
            );
          }
        })}
      </ul>
    );
  };

  const RouterWrapper = useMemo(() => {
    return process.env.REACT_APP_IS_GITHUB === 'true' ? HashRouter : BrowserRouter;
  }, []);

  return (
    <div className={styles.wrapper}>
      <RouterWrapper>
        <header className={styles.header}>
          <div className={styles.logo}>Change Test</div>
        </header>
        <main className={styles.main}>
          <nav className={styles.nav}>{createNav(routes)}</nav>
          <article className={styles.content}>
            <Suspense fallback={<>加载中...</>}>{props.children}</Suspense>
          </article>
        </main>
        {/* <footer className={styles.footer} /> */}
      </RouterWrapper>
    </div>
  );
};

export default Layout;

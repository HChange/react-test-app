import React, { useEffect } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import routes from '../config/routes';
import styles from './index.less';
import { RouteConfig } from 'react-router-config';

const Layout: React.FC<{}> = (props) => {
  // 根据hash定位页面滚动位置
  useEffect(() => {
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

  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <header className={styles.header}>
          <div className={styles.logo}>Change Test</div>
        </header>
        <main className={styles.main}>
          <nav className={styles.nav}>{createNav(routes)}</nav>
          <article className={styles.content}>{props.children}</article>
        </main>
        {/* <footer className={styles.footer} /> */}
      </BrowserRouter>
    </div>
  );
};

export default Layout;

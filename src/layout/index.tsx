import React, { useEffect } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import routes from '../config/routes';
import styles from './index.less';
import { RouteConfig } from 'react-router-config';

const Layout: React.FC<{}> = (props) => {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const a = document.createElement('a');
    a.href = hash;
    a.click();
    a.remove();
  }, []);

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

  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <div className={styles.nav}>
          <div className={styles.logo}>Change Test</div>
          {createLink(routes)}
        </div>
        <div className={styles.content}>{props.children}</div>
      </BrowserRouter>
    </div>
  );
};

export default Layout;

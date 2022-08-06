/* eslint-disable no-undef */
import React, { Suspense, useEffect, useMemo } from 'react';
import { BrowserRouter, NavLink, HashRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'tdesign-react';
import { RouteConfig, routes } from '../config/routes';
import styles from './index.less';
import { languages } from '@/locales';
import { Loading, ThemeModify } from '@/components';
/**
 * 布局
 */
const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const { t, i18n } = useTranslation();

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

  // 处理语言切换
  const handleChangeLanguage = (val: string) => {
    i18n.changeLanguage(val);
    // 刷新页面
    window.location.reload();
  };

  const options = useMemo(() => {
    const _options: Array<SelectOption> = [];
    languages.forEach((value) => {
      _options.push({ label: t(`languages.${value}`), value });
    });
    return _options;
  }, [t]);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.logo} data-text="Change Test">
          Change Test
        </div>
        <div className={styles.languages}>
          <Select
            style={{ width: '100px', marginRight: '20px' }}
            value={languages.includes(i18n.language) ? i18n.language : 'zh'}
            options={options}
            onChange={(v) => handleChangeLanguage(v.toString())}
          />
        </div>
      </header>
      <RouterWrapper>
        <main className={styles.main}>
          <nav className={styles.nav}>{createNav(routes)}</nav>
          <article className={styles.content}>
            <Suspense fallback={<Loading />}>{props.children}</Suspense>
          </article>
        </main>
        {/* <footer className={styles.footer} /> */}
      </RouterWrapper>

      <ThemeModify />
    </div>
  );
};

export default Layout;

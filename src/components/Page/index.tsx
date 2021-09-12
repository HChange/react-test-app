import React from 'react';
import { useRouteMatch } from 'react-router';
import routes from '@/config/routes';
import styles from './index.less';
import { PageProps } from './types';
const Page: React.FC<PageProps> = (props) => {
  const { path } = useRouteMatch();
  const defaultTitle = routes.filter((item) => {
    return item.path === path;
  })[0].name;
  const { children, title = defaultTitle } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer} />
      </div>
    </div>
  );
};

export { Page };
export * from './types';

import React, { memo } from 'react';
import { useLocation } from 'react-router';
import { routes } from '@/config/routes';
import styles from './index.less';
import { PageProps } from './types';
import { BackLine } from '../BackLine';
const Page: React.FC<PageProps> = memo((props) => {
  const { pathname } = useLocation();
  const defaultTitle = routes.filter((item) => {
    return item.path === pathname;
  })[0].name;
  const { children, title = defaultTitle, backLineProps = true } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>
        {/* background  line */}
        {backLineProps && <BackLine {...(typeof backLineProps === 'boolean' ? {} : backLineProps)} />}
        {/* content */}
        <div className={styles['page-content']}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.content}>{children}</div>
          <div className={styles.footer} />
        </div>
      </div>
    </div>
  );
});

export { Page };
export * from './types';

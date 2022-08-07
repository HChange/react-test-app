import React, { memo, useContext } from 'react';
import { useLocation } from 'react-router';
import { routes } from '@/config/routes';
import styles from './index.less';
import { PageProps } from './types';
import { BackLine } from '../BackLine';
import { GlobalContext } from '../GlobalContextWrapper';
import classNames from 'classnames';
/**
 * 内容展示页面组件
 */
const Page: React.FC<PageProps> = memo((props) => {
  const {
    state: { isMobile },
  } = useContext(GlobalContext);
  const { pathname } = useLocation();
  const defaultTitle = routes.filter((item) => {
    return item.path === pathname;
  })[0].name;
  const { children, title = defaultTitle, backLineProps = true } = props;

  return (
    <div className={classNames(styles.wrapper, { [styles['wrapper--isMobile']]: isMobile })}>
      <div className={styles.page}>
        {backLineProps && <BackLine {...(typeof backLineProps === 'boolean' ? {} : backLineProps)} />}
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

import React from 'react';
import styles from './index.less';
const Page: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>{children}</div>
    </div>
  );
};

export default Page;

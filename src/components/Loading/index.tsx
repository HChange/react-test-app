import React from 'react';
import { LoadingProps } from './types';
import LoadingImg from '@/assets/loading.gif';
import styles from './index.less';

const Loading = (props: LoadingProps) => {
  const { size = 60, source = LoadingImg } = props;
  return (
    <div className={styles.wrapper}>
      <img src={source} style={{ width: size, height: size }} />
    </div>
  );
};

export { Loading };
export * from './types';

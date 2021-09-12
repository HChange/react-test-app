import React from 'react';
import { BlockProps } from './types';
import styles from './index.less';
import { Title } from '../Title';

const Block = (props: BlockProps) => {
  const { title, children } = props;
  return (
    <div className={styles.block}>
      <Title>{title}</Title>
      <div className={styles['block__content']}>{children}</div>
    </div>
  );
};

export { Block };
export * from './types';

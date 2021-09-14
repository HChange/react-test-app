import { scrollIntoView } from '@/utils';
import React, { useRef } from 'react';
import styles from './index.less';

const Title = (props: { children: string }) => {
  const { children } = props;
  const ref = useRef<HTMLHeadingElement>(null);

  const scrollToTop = () => {
    if (ref.current) {
      scrollIntoView(ref.current);
    }
    window.location.hash = children;
  };

  return (
    <h3 id={children} className={styles.title} ref={ref} onClick={scrollToTop}>
      {children}
      <span className={styles.icon}>#</span>
    </h3>
  );
};

export { Title };

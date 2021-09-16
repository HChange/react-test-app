import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './index.less';
import { CodeViewerProps } from './types';

const CodeViewer = (props: CodeViewerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { render, code } = props;
  return (
    <div className={styles['code-viewer']}>
      <div className={styles['code-viewer__render']}>
        {render}
        <span
          className={classNames(styles['code-viewer__show-btn'], { [styles['code-viewer__show-btn-open']]: isOpen })}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? '关闭代码' : '展开代码'}
        </span>
      </div>
      <div className={classNames(styles['code-viewer__code'], { [styles['code-viewer__code-open']]: isOpen })}>
        {code}
      </div>
    </div>
  );
};

export { CodeViewer };

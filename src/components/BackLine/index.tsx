import React, { memo } from 'react';
import styles from './index.less';
import { BackLineProps } from './types';
export { BackLineProps };

/**
 *
 * 网格背景
 */
const BackLine = memo((props: BackLineProps) => {
  const { width = 15, height = 15, stroke = '#eee', strokeWidth = '0.4' } = props;
  return (
    <div className={styles['back-line-wrapper']}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" x="0" y="0" width={width} height={height} patternUnits="userSpaceOnUse">
            <path
              stroke={stroke}
              strokeWidth={strokeWidth}
              d={`M${width / 2} 0 V${width} M0 ${height / 2} H${height}`}
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
});

export { BackLine };

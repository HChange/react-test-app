import { scrollIntoView } from '@/pages/utils';
import React from 'react';

/**
 * 锚点
 * @param to 锚点对应的id名
 */
const AnchorPoint: React.FC<{ to: string }> = (props) => {
  const { to, children } = props;

  const goAction = () => {
    const point = document.getElementById(to);
    console.warn(`找不到 “${to}” 相关锚点`);
    if (point) {
      scrollIntoView(point);
    }
    window.location.hash = to;
  };
  return <div onClick={goAction}>{children}</div>;
};

export default AnchorPoint;

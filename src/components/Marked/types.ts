import React from 'react';

export interface MarkedProps {
  children: string;
  /**
   * 代码类型，不传入程序自动推测
   */
  type?: string;
  className?: string;
  style?: React.CSSProperties;
  onCopy?: (text: string, result: boolean) => void;
}

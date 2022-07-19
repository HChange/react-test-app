import React, { memo, useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router';
import { routes } from '@/config/routes';
import styles from './index.less';
import { PageProps } from './types';
import { drawGrid } from '@/utils';
import {
  canvasCurrentWidthMultiply,
  canvasWidthMultiply,
  defaultConfig,
  gridWidthMultiply,
  MAX_HEIGHT,
} from './constants';
const Page: React.FC<PageProps> = memo((props) => {
  const { pathname } = useLocation();
  const defaultTitle = routes.filter((item) => {
    return item.path === pathname;
  })[0].name;
  const { children, title = defaultTitle, backLine = true } = props;

  const { color, stepx, stepy, lineWidth } = useMemo(() => {
    if (typeof backLine === 'boolean') {
      return defaultConfig;
    } else {
      return { ...defaultConfig, ...backLine };
    }
  }, [backLine]);

  const canvas = useRef<HTMLCanvasElement>(null);
  const page = useRef<HTMLDivElement>(null);
  const canvasWrapper = useRef<HTMLDivElement>(null);
  const timer = useRef();
  useEffect(() => {
    let resizeObserver: ResizeObserver;
    if (page.current && backLine) {
      resizeObserver = new ResizeObserver(() => {
        if (timer.current) {
          clearTimeout(timer.current);
        }
        setTimeout(() => {
          if (canvas.current && canvasWrapper.current && page.current) {
            // 动态设置canvas高度
            const { clientHeight, clientWidth } = page.current;
            if (clientHeight > MAX_HEIGHT) return;
            // 取多倍作用：不需要监听页面 resize
            canvasWrapper.current.style.height = `${clientHeight}px`;
            canvas.current.style.width = `${clientWidth * canvasCurrentWidthMultiply}px`;
            canvas.current.style.height = `${clientHeight * canvasCurrentWidthMultiply}px`;
            canvas.current.width = clientWidth * canvasWidthMultiply;
            canvas.current.height = clientHeight * canvasWidthMultiply;
            drawGrid({
              canvas: canvas.current,
              color,
              stepx: stepx * gridWidthMultiply,
              stepy: stepy * gridWidthMultiply,
              lineWidth,
            });
          }
        }, 500);
      });
      resizeObserver.observe(page.current);
    }
    return () => {
      resizeObserver?.disconnect?.();
    };
  }, [canvas, page, backLine, canvasWrapper]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.page} ref={page}>
        {/* background  line */}
        {backLine && (
          <div ref={canvasWrapper} className={styles['canvas-wrapper']}>
            <canvas ref={canvas} className={styles.canvas} />
          </div>
        )}
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

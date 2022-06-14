import { Page } from '@/components';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './index.less';
import _data from './data';

const VirtualList = () => {
  const [renderData, setRenderData] = useState<typeof _data>([]);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [startOffset, setStartOffset] = useState(0);
  const [start, setStart] = useState(0);
  const itemHeight = 50;
  const virtualWrapper = useRef<HTMLDivElement>(null);
  const virtual = useRef<HTMLDivElement>(null);
  const visibleCount = useMemo(() => Math.ceil(wrapperHeight / itemHeight), [wrapperHeight]);
  const end = start + visibleCount;
  // 已经更新的高度
  const renderHeight = useMemo(() => renderData.length * itemHeight, [renderData]);

  // 应该显示的列表数据
  const visibleData = useMemo(() => renderData.slice(start, Math.min(end, renderData.length)), [
    renderData,
    start,
    end,
  ]);

  useEffect(() => {
    setRenderData(_data.slice(0, visibleCount));
  }, [visibleCount]);

  useEffect(() => {
    const wrapper = virtualWrapper.current;
    if (wrapper) {
      setWrapperHeight(wrapper.clientHeight);
    }
  }, []);

  const scrollEvent = useCallback(() => {
    const scrollTop = virtualWrapper.current?.scrollTop ?? 0;
    const start = Math.floor(scrollTop / itemHeight);
    const end = start + visibleCount;
    setStart(start);
    if (end >= renderData.length) {
      setRenderData(_data.slice(0, end + visibleCount));
    }
    setStartOffset(scrollTop);
  }, [renderData, visibleCount]);

  useEffect(() => {
    let dom = virtualWrapper.current;
    console.log(dom);

    scrollEvent();
    if (dom) {
      dom.addEventListener('scroll', scrollEvent);
    }
    return () => {
      if (dom) {
        dom.removeEventListener('scroll', scrollEvent);
      }
    };
  }, [scrollEvent]);

  return (
    <Page>
      <div className={styles['virtual-list-wrapper']} ref={virtualWrapper}>
        <div className={styles['virtual-list-phantom']} style={{ height: Math.max(renderHeight, wrapperHeight + 1) }} />
        <div className={styles['virtual-list']} ref={virtual} style={{ transform: `translateY(${startOffset}px)` }}>
          {visibleData.map(({ id, title, avatar, content }) => (
            <div key={id} className={styles['virtual-list-item']}>
              <img className={styles['virtual-list-item__avatar']} src={avatar} alt="" />
              <div className={styles['virtual-list-item__content']}>
                <h3 className={styles['virtual-list-item__title']}>{title}</h3>
                <div className={styles['virtual-list-item__desc']}>{content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default VirtualList;

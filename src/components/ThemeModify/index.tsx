import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './index.less';
import { setTheme, ThemeEnum, themeModeKey, themePanelMap } from './constants';

export * from './constants';

/**
 * 主题切换悬浮窗
 */
const ThemeModify = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeEnum>();

  useEffect(() => {
    const _currentTheme = localStorage.getItem(themeModeKey) || ThemeEnum.LIGHT;
    setCurrentTheme(_currentTheme as ThemeEnum);
  }, []);

  useEffect(() => {
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, [currentTheme]);

  const buttonWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buttonWrapper.current) {
      buttonWrapper.current.style.right = `-${(Object.keys(themePanelMap).length - 1) * 45}px`;
    }
  }, [buttonWrapper]);

  return (
    <div className={styles['theme-modify']} ref={buttonWrapper}>
      {currentTheme &&
        [
          [currentTheme, themePanelMap[currentTheme]],
          ...Object.entries(themePanelMap).filter(([key, value]) => {
            return key !== currentTheme;
          }),
        ].map(([key, value]) => {
          return (
            <div
              key={key}
              className={classNames({ [styles['theme-button--first']]: currentTheme === key }, styles['theme-button'])}
              style={{ background: value }}
              onClick={() => currentTheme !== key && setCurrentTheme(key as ThemeEnum)}
            >
              {currentTheme !== key && <div className={styles['theme-button__mask']}>{key}</div>}
            </div>
          );
        })}
    </div>
  );
};

export { ThemeModify };

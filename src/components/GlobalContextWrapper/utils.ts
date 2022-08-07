import { createContext, useEffect, useReducer } from 'react';
import { GlobalContextAction, GlobalContextActionTypeEnum, GlobalContextType, GlobalContextKeys } from './types';

const defaultValue: GlobalContextType = { isMobile: false };

export const GlobalContext = createContext<{
  state: GlobalContextType;
}>({
  state: defaultValue,
});

const _globalContextKeys: Array<GlobalContextKeys> = ['isMobile', 'test'];

export const globalContextReducer = (prevState: GlobalContextType, action: GlobalContextAction) => {
  const { type, value, key } = action;
  switch (type) {
    case GlobalContextActionTypeEnum.ADD:
      if (!_globalContextKeys.includes(key)) {
        return prevState;
      }
      // @ts-ignore
      prevState[key] = value;
      return { ...prevState };
    case GlobalContextActionTypeEnum.UPDATE:
      if (!_globalContextKeys.includes(key)) {
        return prevState;
      }
      // @ts-ignore
      prevState[key] = value;
      return { ...prevState };
    case GlobalContextActionTypeEnum.DELETE:
      if (!_globalContextKeys.includes(key) || !prevState[key]) {
        return prevState;
      }
      delete prevState[key];
      return { ...prevState };
  }
};

export const PC_SCREEN_MINI_WIDTH = 768;
export const useGlobalContextReducer = () => {
  const [state, dispatch] = useReducer(globalContextReducer, defaultValue);
  useEffect(() => {
    const observerInstance = new ResizeObserver(([doc]) => {
      const clientWidth = doc.target.clientWidth;
      if (clientWidth <= PC_SCREEN_MINI_WIDTH) {
        dispatch({ type: GlobalContextActionTypeEnum.UPDATE, key: 'isMobile', value: true });
      } else {
        dispatch({ type: GlobalContextActionTypeEnum.UPDATE, key: 'isMobile', value: false });
      }
    });
    observerInstance.observe(document.documentElement);
    return () => {
      observerInstance.disconnect();
    };
  }, []);
  return { state };
};

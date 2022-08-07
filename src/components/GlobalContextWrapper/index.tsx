import React from 'react';
import { GlobalContextWrapperProps } from './types';
import { GlobalContext, useGlobalContextReducer } from './utils';

const GlobalContextWrapper = (props: GlobalContextWrapperProps) => {
  const { children } = props;
  const { state } = useGlobalContextReducer();

  return <GlobalContext.Provider value={{ state }}>{children}</GlobalContext.Provider>;
};

export { GlobalContextWrapper };

export * from './types';
export * from './utils';

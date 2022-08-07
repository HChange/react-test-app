import React from 'react';

/* eslint-disable no-unused-vars */
export interface GlobalContextWrapperProps {
  children: React.ReactNode;
}

export interface GlobalContextType {
  isMobile: boolean;
  test?: number;
}

export enum GlobalContextActionTypeEnum {
  ADD = 'add',
  UPDATE = 'update',
  DELETE = 'delete',
}

export type GlobalContextKeys = keyof GlobalContextType;

export interface GlobalContextAction<T extends GlobalContextKeys = GlobalContextKeys> {
  type: GlobalContextActionTypeEnum;
  key: T;
  value?: GlobalContextType[T];
}

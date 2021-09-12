import React from 'react';
import { useRecoilValue } from 'recoil';
import { asyncState } from './asyncState';

const AsyncModule = () => {
  const response: any = useRecoilValue(asyncState);
  return <div>{response?.code}</div>;
};

export default AsyncModule;

import React, { Suspense } from 'react';
import AsyncModule from './AsyncModules';

const Async = () => {
  return (
    // @ts-ignore
    <Suspense fallback={<>加载中...</>}>
      <AsyncModule />
    </Suspense>
  );
};

export default Async;

import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import React, { Suspense } from 'react';
import AsyncModule from './AsyncModules';

const Async = () => {
  return (
    <ErrorBoundary message>
      <Suspense fallback={<>加载中...</>}>
        <AsyncModule />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Async;

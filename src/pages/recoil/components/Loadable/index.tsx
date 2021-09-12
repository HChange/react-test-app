import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { loadashState } from './state';

const Loadable = () => {
  const stateLoadable = useRecoilValueLoadable(loadashState);
  switch (stateLoadable.state) {
    case 'hasValue':
      return <div>{stateLoadable.contents.code}</div>;
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw stateLoadable.contents;
  }
};

export default Loadable;

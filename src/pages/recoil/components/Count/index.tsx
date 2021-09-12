import React from 'react';
import { useRecoilValue } from 'recoil';
import { countState } from '../../recoilState';

const Count = () => {
  const count = useRecoilValue(countState);
  return <div>名字长度为:{count}</div>;
};

export default Count;

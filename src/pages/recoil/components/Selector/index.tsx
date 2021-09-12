import { Input } from 'antd';
import React from 'react';
import { useRecoilState } from 'recoil';
import { setGetTest } from './state';

const Selector = () => {
  const [value, setValue] = useRecoilState(setGetTest);

  return (
    <div>
      <Input onChange={(v) => setValue(v.target.value as any)} value={value} />
    </div>
  );
};

export default Selector;

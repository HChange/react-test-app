import { Input } from 'tdesign-react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { setGetTest } from './state';

const Selector = () => {
  const [value, setValue] = useRecoilState(setGetTest);

  return (
    <div>
      <Input onChange={(v) => setValue(Number(v))} value={value} />
    </div>
  );
};

export default Selector;

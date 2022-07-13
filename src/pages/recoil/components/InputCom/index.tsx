import React from 'react';
import { Input } from 'tdesign-react';
import { useRecoilState } from 'recoil';
import { nameState } from '../../recoilState';

const InputCom = () => {
  const [name, setName] = useRecoilState(nameState);

  return (
    <div>
      <Input value={name} onChange={(v) => setName(v.toString())} />
      <div>输入的名字是：{name}</div>
    </div>
  );
};

export default InputCom;

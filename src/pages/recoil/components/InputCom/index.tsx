import React from 'react';
import { Input } from 'antd';
import { useRecoilState } from 'recoil';
import { nameState } from '../../recoilState';

const InputCom = () => {
  const [name, setName] = useRecoilState(nameState);

  return (
    <div>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <div>输入的名字是：{name}</div>
    </div>
  );
};

export default InputCom;

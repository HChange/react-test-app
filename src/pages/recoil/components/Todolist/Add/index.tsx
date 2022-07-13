import { Button, Input, notification } from 'tdesign-react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todolistState } from '../todolistState';

// 用于创建唯一 ID 的工具
let id = 0;
function getId() {
  return id++;
}

const Add = () => {
  const [value, setValue] = useState<string>('');
  const setRecords = useSetRecoilState(todolistState);
  const addAction = () => {
    if (!value) {
      notification.error({ content: '请输入有效值' });
    } else {
      setRecords((prev) => [{ id: getId(), isComplete: false, text: value }, ...prev]);
      setValue('');
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Input onChange={(v) => setValue(v.toString())} value={value} />
      <Button theme="primary" onClick={addAction}>
        添加
      </Button>
    </div>
  );
};

export default Add;

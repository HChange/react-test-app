import { Button, Input, notification } from 'antd';
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
      notification.error({ message: '请输入有效值' });
    } else {
      setRecords((prev) => [{ id: getId(), isComplete: false, text: value }, ...prev]);
      setValue('');
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Input onChange={(e) => setValue(e.target.value)} value={value} />
      <Button type="primary" onClick={addAction}>
        添加
      </Button>
    </div>
  );
};

export default Add;

import { Button } from 'antd';
import React, { useState } from 'react';

const index = () => {
  const [open, setOpen] = useState(false);
  console.log('render');

  let arr = [1, 2, 3, 4];
  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Toggle</Button>
      <div style={open ? { background: 'blue', backgroundColor: 'red' } : { backgroundColor: 'red' }}>
        show show show !!!!【测试style冲突，react警告⚠️】
      </div>
      {arr.map((item) => {
        return <li key={item}>{item}</li>;
      })}
      <Button
        onClick={() => {
          arr = [...arr, 5];
        }}
      >
        测试render
      </Button>
    </div>
  );
};

export default index;

import React, { useRef, useState } from 'react';

const index = () => {
  const [count1, setCount1] = useState(Math.random());
  const [count2, setCount2] = useState(Math.random());

  const notFirst = useRef(false);
  React.useEffect(() => {
    if (notFirst.current === false) {
      return;
    }
    // 耗时 300 毫秒的计算
    const start = Number(new Date());
    while (Number(new Date()) - start <= 300) {
      continue;
    }
    if (count1 === 0) {
      setCount1(Math.random());
    }
  }, [count1]);

  React.useLayoutEffect(() => {
    if (notFirst.current === false) {
      return;
    }

    // 耗时 300 毫秒的计算
    const start = Number(new Date());
    while (Number(new Date()) - start <= 300) {
      continue;
    }
    if (count2 === 0) {
      setCount2(Math.random());
    }
  }, [count2]);

  const handleClick1 = React.useCallback(() => {
    setCount1(0);
    notFirst.current = true;
  }, []);
  const handleClick2 = React.useCallback(() => {
    setCount2(0);
    notFirst.current = true;
  }, []);
  return (
    <div>
      <div>
        useEffect: <button onClick={handleClick1}>{count1}</button>
      </div>

      <div>
        useLayoutEffect: <button onClick={handleClick2}>{count2}</button>
      </div>
    </div>
  );
};

export default index;

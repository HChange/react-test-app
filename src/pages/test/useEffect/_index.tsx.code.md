# 这是一级标题

## 这是二级标题

### 这是三级标题

#### 这是四级标题

##### 这是五级标题

###### 这是六级标题

**这是加粗的文字**
_这是倾斜的文字_`
**_这是斜体加粗的文字_**
~~这是加删除线的文字~~

> 这是引用的内容
>
> > 这是引用的内容
> >
> > > > > > > > > > 这是引用的内容

---

---

---

---

![blockchain](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=702257389,1274025419&fm=27&gp=0.jpg '区块链')

[简书](http://jianshu.com)
[百度](http://baidu.com)

| 姓名 | 技能 | 排行 | 分数 |
| :--: | :--: | :--: | :--: |
| 刘备 |  哭  | 大哥 |  98  |
| 关羽 |  打  | 二哥 | 100  |
| 张飞 |  骂  | 三弟 |  18  |

```JavaScript
import React, { useState } from 'react';

const index = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  React.useEffect(() => {
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
    // 耗时 300 毫秒的计算
    const start = Number(new Date());
    while (Number(new Date()) - start <= 300) {
      continue;
    }
    if (count2 === 0) {
      setCount2(Math.random());
    }
  }, [count2]);

  const handleClick1 = React.useCallback(() => setCount1(0), []);
  const handleClick2 = React.useCallback(() => setCount2(0), []);
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

```

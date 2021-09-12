import React from 'react';
import { useRecoilValue } from 'recoil';
import { todolistStatsState } from '../todolistState';

const Stats = () => {
  const { totalNum, totalComplete, totalWillComplete, precentComplete } = useRecoilValue(todolistStatsState);
  return (
    <div>
      <p>统计</p>
      <ul>
        <li>总数：{totalNum}</li>
        <li>已完成：{totalComplete}</li>
        <li>待完成：{totalWillComplete}</li>
        <li>完成率：{`${Math.floor(precentComplete * 100)}%`}</li>
      </ul>
    </div>
  );
};

export default Stats;

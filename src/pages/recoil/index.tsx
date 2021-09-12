import React from 'react';
import { Page } from '@/components';
import Async from './components/Async';
import Count from './components/Count';
import InputCom from './components/InputCom';
import Loadable from './components/Loadable';
import Selector from './components/Selector';
import Todolist from './components/Todolist';
import './index.less';

const RecoilTest = () => {
  return (
    <Page>
      <div className="docs">
        <h1>Recoil</h1>
        <h2>简单使用</h2>
        <InputCom />
        <Count />
        <hr />
        <h2>写一个TodoList</h2>
        <Todolist />
        <hr />
        <h2>来个异步的</h2>
        <Async />
        <h2>set get Selector</h2>
        <Selector />

        <h2>Loadable </h2>
        <Loadable />
      </div>
    </Page>
  );
};

export default RecoilTest;

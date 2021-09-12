import React from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import About from 'src/pages/About';
import Markdown from 'src/pages/markdown';
import MarkdownIt from 'src/pages/markdown-it';
import RecoilTest from 'src/pages/recoil/index';
import Test from 'src/pages/test/index';

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to={{ pathname: '/about' }} />,
  },
  {
    path: '/about',
    component: About,
    name: '关于',
  },
  {
    path: '/test',
    component: Test,
    name: '测试',
  },
  {
    path: '/markdown',
    component: Markdown,
    name: 'Markdown',
  },
  {
    path: '/markdown-it',
    component: MarkdownIt,
    name: 'MarkdownIt',
  },
  {
    path: '/recoil',
    component: RecoilTest,
    name: 'recoil',
  },
];

export default routes;

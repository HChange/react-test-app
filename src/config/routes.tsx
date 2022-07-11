import React from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import About from '@/pages/about';
import Markdown from '@/pages/markdown';
import MarkdownIt from '@/pages/markdown-it';
import RecoilTest from '@/pages/recoil/index';
import Test from '@/pages/test/index';
import VirtualList from '@/pages/virtuallist';
import JsonDownload from '@/pages/json-download';

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
    name: 'Recoil',
  },
  {
    path: '/virtuallist',
    component: VirtualList,
    name: '虚拟长列表',
  },
  {
    path: '/json-download',
    component: JsonDownload,
    name: 'Json下载',
  },
];

export default routes;

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

const is_github = window.IS_GITHUB === 'true';
const getCurrentLink = (link: string) => {
  return is_github ? `/react-test-app${link}` : link;
};

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to={{ pathname: getCurrentLink('/about') }} />,
  },
  {
    path: getCurrentLink('/about'),
    component: About,
    name: '关于',
  },
  {
    path: getCurrentLink('/test'),
    component: Test,
    name: '测试',
  },
  {
    path: getCurrentLink('/markdown'),
    component: Markdown,
    name: 'Markdown',
  },
  {
    path: getCurrentLink('/markdown-it'),
    component: MarkdownIt,
    name: 'MarkdownIt',
  },
  {
    path: getCurrentLink('/recoil'),
    component: RecoilTest,
    name: 'Recoil',
  },
  {
    path: getCurrentLink('/virtuallist'),
    component: VirtualList,
    name: '虚拟长列表',
  },
  {
    path: getCurrentLink('/json-download'),
    component: JsonDownload,
    name: 'Json下载',
  },
];

export default routes;

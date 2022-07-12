import React from 'react';
import { Navigate, useRoutes, RouteObject } from 'react-router-dom';
import About from '@/pages/about';
import Markdown from '@/pages/markdown';
import MarkdownIt from '@/pages/markdown-it';
import RecoilTest from '@/pages/recoil/index';
import Test from '@/pages/test/index';
import VirtualList from '@/pages/virtuallist';
import JsonDownload from '@/pages/json-download';

export interface RouteConfig extends RouteObject {
  name?: string;
}
const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Navigate to={{ pathname: '/about' }} />,
  },
  {
    path: '/about',
    element: <About />,
    name: '关于',
  },
  {
    path: '/test',
    element: <Test />,
    name: '测试',
  },
  {
    path: '/markdown',
    element: <Markdown />,
    name: 'Markdown',
  },
  {
    path: '/markdown-it',
    element: <MarkdownIt />,
    name: 'MarkdownIt',
  },
  {
    path: '/recoil',
    element: <RecoilTest />,
    name: 'Recoil',
  },
  {
    path: '/virtuallist',
    element: <VirtualList />,
    name: '虚拟长列表',
  },
  {
    path: '/json-download',
    element: <JsonDownload />,
    name: 'Json下载',
  },
];

function RenderRoutes() {
  const element = useRoutes(routes);
  return element;
}
export { routes };

export default RenderRoutes;

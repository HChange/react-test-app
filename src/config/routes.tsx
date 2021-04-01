import { Redirect } from 'react-router-dom';
import {RouteConfig} from 'react-router-config';
import About from '../pages/About'
import Home from '../pages/Home'
import Markdown from '../pages/markdown'
import React from 'react';
const routes:RouteConfig[] =[
    {
        path:'/',
        exact:true,
        render:()=><Redirect to={{pathname:'/about'}}/>
    },
    {
        path:'/about',
        component:About,
        name:'关于',
    },
    {
        path:'/markdown',
        component:Markdown,
        name:'Markdown'
    },
] 

export default routes;
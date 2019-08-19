'use strict';

import asyncComponent from './utils';

const routes = [
    {
        path: '/',
        component: asyncComponent({
            loader: () => import('Modules/Home')
        })
    },{
        path: '/canpayHome', // 首页
        component: asyncComponent({
            loader: () => import('Modules/Home')
        })
    },{
        path: '/detail', // 详情页
        component: asyncComponent({
            loader: () => import('Modules/Detail')
        })
    }
];

export default routes;
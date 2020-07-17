import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';

import routes from './routes';

Vue.use(Router);

// Meta config
Vue.use(VueMeta, {
    refreshOnceOnNavigation: true,
});

export const router = new Router({
    mode: 'history',
    transitionOnLoad: true,
    linkActiveClass: 't-active',
    linkExactActiveClass: 't-active',
    root: '/',
    routes,
    scrollBehavior()
    {
        return { x: 0, y: 0 };
    },
});

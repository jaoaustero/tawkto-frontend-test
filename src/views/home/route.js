export default [
    {
        path: '/',
        component: () => import('@/views/home'),
        children:
        [
            {
                path: '',
                name: 'HomeList',
                component: () => import('@/views/home/pages/list'),
                meta:
                {
                    page: 'index',
                    breadcrumbs: 'All Categories',
                },
            },

            {
                path: ':id',
                name: 'HomeView',
                component: () => import('@/views/home/pages/show'),
                meta:
                {
                    page: 'show',
                    breadcrumbs: 'View',
                },
            },
        ],
    },
];

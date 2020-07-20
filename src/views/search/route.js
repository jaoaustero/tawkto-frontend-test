export default [
    {
        path: '/search',
        component: () => import('@/views/search'),
        children:
        [
            {
                path: ':title',
                name: 'SearchList',
                component: () => import('@/views/search/pages/list'),
                meta:
                {
                    page: 'index',
                    breadcrumbs: 'Search results',
                },
            },
        ],
    },
];

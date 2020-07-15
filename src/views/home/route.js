export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home'),
        meta:
        {
            breadcrumbs: 'Home',
        },
    },
];

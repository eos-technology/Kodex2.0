const reportRoutes = {
    path: '/report',
    name: 'report',
    meta: {
        requiresAuth: false
    },
    children: [
{
    path: 'reports',
    name: 'reports',
    component: () => import ('@/modules/report/views/reports/Index.vue')
},
{
    path: 'generate',
    name: 'generate',
    component: () => import ('@/modules/report/views/generate/Index.vue')
},
{
    path: 'download',
    name: 'download',
    component: () => import ('@/modules/report/views/download/Index.vue')
},
{
    path: 'details',
    name: 'details',
    component: () => import ('@/modules/report/views/details/Index.vue')
}
    ]
}

export default reportRoutes

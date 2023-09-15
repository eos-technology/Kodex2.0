const projectRoutes = {
    path: '/project',
    name: 'project',
    meta: {
        requiresAuth: false
    },
    children: [
{
    path: 'new_project',
    name: 'new_project',
    component: () => import ('@/modules/project/views/new_project/Index.vue')
},
{
    path: 'dashboard',
    name: 'dashboard',
    component: () => import ('@/modules/project/views/dashboard/Index.vue')
}
    ]
}

export default projectRoutes

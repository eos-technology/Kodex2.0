const userRoutes = {
    path: '/user',
    name: 'user',
    meta: {
        requiresAuth: false
    },
    children: [
{
    path: 'list',
    name: 'list',
    component: () => import ('@/modules/user/views/list/Index.vue')
},
{
    path: 'create',
    name: 'create',
    component: () => import ('@/modules/user/views/create/Index.vue')
},
{
    path: 'permissions',
    name: 'permissions',
    component: () => import ('@/modules/user/views/permissions/Index.vue')
},
{
    path: 'invite',
    name: 'invite',
    component: () => import ('@/modules/user/views/invite/Index.vue')
}
    ]
}

export default userRoutes

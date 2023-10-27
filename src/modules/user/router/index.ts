const userRoutes = {
  path: '/user',
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: '',
      name: 'user',
      component: () => import('@/modules/user/views/list/Index.vue')
    }
  ]
}

export default userRoutes

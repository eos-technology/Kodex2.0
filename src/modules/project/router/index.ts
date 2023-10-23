import configRoutes from '@/modules/config/router'
import transactionRoutes from '@/modules/transaction/router'
import payment_linkRoutes from '@/modules/payment_link/router'
import reportRoutes from '@/modules/report/router'
import payment_methodRoutes from '@/modules/payment_method/router'
import userRoutes from '@/modules/user/router'

const projectRoutes = {
  path: '/project',
  component: () => import('@/layouts/App.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: '',
      name: 'project',
      component: () => import('@/modules/project/layout/Project.vue'),
      children: [
        {
          path: '',
          name: 'project-dashboard',
          component: () => import('@/modules/project/views/dashboard/Index.vue')
        },
        userRoutes,
        payment_methodRoutes,
        reportRoutes,
        payment_linkRoutes,
        transactionRoutes,
        configRoutes,
      ]
    },
    {
      path: 'new_project',
      name: 'new_project',
      component: () => import('@/modules/project/views/new_project/Index.vue')
    }
  ]
}

export default projectRoutes

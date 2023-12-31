import { createRouter, createWebHistory } from 'vue-router'

//importation
import templateRoutes from '@/modules/template/router'
import gatewayRoutes from '@/modules/gateway/router'
import projectRoutes from '@/modules/project/router'
import authRoutes from '@/modules/auth/router'
import dashboardRoutes from '@/modules/dashboard/router'
import cart_Routes from '@/modules/cart/router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //module
    templateRoutes,
    gatewayRoutes,
    projectRoutes,
    dashboardRoutes,
    authRoutes,
    cart_Routes
  ],
  linkExactActiveClass: 'router-link-active'
})

/* router.beforeEach((to, from, next) => {
  let userInstance: any = useUserStore()

  const loggedIn = userInstance.user
  const abilities = userInstance.abilities

  const publicPages: any = ['login', 'register', 'reset', 'recover', 'Error', 'Maintenance']

  const exludedPurchase: any = ['licenses', 'pay-method', 'info-pay']

  const authRequired = !publicPages.includes(to.name)

  let bearer = localStorage.getItem('auth')

  if ((authRequired && loggedIn === null) || (!bearer && authRequired)) {
    next({
      name: 'login',
      replace: true
    })
  } else {
    if (
      loggedIn &&
      (!loggedIn.meta || loggedIn.meta.packs_count <= 0) &&
      !exludedPurchase.includes(to.name)
    ) {
      next({
        name: 'licenses',
        replace: true
      })
    } else {
      next()
    }
  }
}) */

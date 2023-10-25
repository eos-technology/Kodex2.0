import type { Endpoint } from '@/types/apiTypes'

const api: any = {
  auth: {
    login: <Endpoint>{
      method: 'post',
      uri: function () {
        return `/auth/signin`
      }
    }
  },
  user: {
    info: <Endpoint>{
      method: 'get',
      uri: function () {
        return `/user/info`
      }
    }
  },
  project: {
    projects: <Endpoint>{
      method: 'get',
      uri: function () {
        return `/project`
      }
    }
  },
  notification: {
    notifications: <Endpoint>{
      method: 'get',
      uri: function () {
        return `/notification`
      }
    },
    toggle: <Endpoint>{
      method: 'post',
      uri: function () {
        return `/notification`
      }
    }
  }
}

export default api

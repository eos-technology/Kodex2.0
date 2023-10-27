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
    },
    create: <Endpoint>{
      method: 'post',
      uri: function () {
        return `/project`
      }
    },
  },
  transaction: {
    transactions: <Endpoint>{
      method: 'get',
      uri: function (payload: {uuid: string}) {
        return `/transaction/${payload.uuid}`
      }
    },
    stats: <Endpoint>{
      method: 'get',
      uri: function (payload: {uuid: string}) {
        return `/transaction/stats/${payload.uuid}`
      }
    },
    detail: <Endpoint>{
      method: 'get',
      uri: function (payload: {uuid: string}) {
        return `/transaction/detail/${payload.uuid}`
      }
    },
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

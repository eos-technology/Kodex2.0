import type { Endpoint } from '@/types/apiTypes'

const api: any = {
  auth: {
    endpointExample: <Endpoint>{
      method: 'post',
      uri: function (params?: any) {
        return `carts/${params}`
      }
    }
  },
  othersModules: {
    endpointExample: <Endpoint>{
      method: 'post',
      uri: function (params?: any) {
        return `carts/${params}`
      }
    }
  }
}

export default api

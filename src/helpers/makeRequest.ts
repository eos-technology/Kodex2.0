import api from '@/services/api'
import { type AxiosRequestConfig } from 'axios'
import axios from '@/plugins/Axios'
import type { Endpoint } from '@/types/apiTypes'

const makeRequest = async (data: { route: string; params?: any; body?: any }) => {
  const route: Endpoint = api[data.route]

  const body: any = data.body

  const config: AxiosRequestConfig = {
    params: data.params,
    ...body
  }

  try {
    const response = await axios[route.method](route.uri(data.params), config)
    return response.data
  } catch (error) {
    throw error
  }
}

export default makeRequest

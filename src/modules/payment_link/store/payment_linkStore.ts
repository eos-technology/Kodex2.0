import { defineStore } from 'pinia'
import makeRequest from '@/helpers/makeRequest'
import type { loginRequest, loginResponseType } from '../types/storeTypes'
// project imports

export const usepayment_linkStore = defineStore({
  id: 'payment_link',
  state: (): any => ({
    bearer: null
  }),
  getters: {},
  actions: {
    async login(body: loginRequest) {
      try {
        const data: loginResponseType = await makeRequest({ route: 'login', body })
        this.bearer = data.bearer
        return data
      } catch (error) {
        return error
      }
    }
  },
  //persist: true // SOLO PARA PERSISTIR
})

import { makeRequest } from '@/helpers/Index'
import { defineStore } from 'pinia'
import type {
  loginRequest,
  loginResponseType,
  registerRequest,
  registerResponseType
} from '../types/storeTypes'
import api from '@/services/api'
// project imports

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): any => ({
    bearer: null
  }),
  getters: {},
  actions: {
    async login(body: loginRequest) {
      
      try {
        const data: loginResponseType = await makeRequest({ method: api.auth.login, body })
        this.bearer = data.token
        return data
      } catch (error: any) {
        console.log({error})
        throw new Error(error)
      }
    },
    /* async register(body: registerRequest) {
      try {
        const data: registerResponseType = await makeRequest({ route: 'signup', body })
        return data
      } catch (error: any) {
        throw error
      }
    },
    async recover(body: { email: string }) {
      try {
        const data: any = await makeRequest({ route: 'recover', body })
        return data
      } catch (error: any) {
        throw error
      }
    },
    async restore(body: { email: string; password: string }) {
      try {
        const data: any = await makeRequest({ route: 'restore', body })
        return data
      } catch (error: any) {
        throw error
      }
    } */
  },
  persist: true // SOLO PARA PERSISTIR
})

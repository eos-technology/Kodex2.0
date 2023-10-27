import { defineStore } from 'pinia'
// project imports
import axios from '@/plugins/Axios'
import {makeRequest} from '@/helpers/Index'
import api from '@/services/api'

interface user {
  user: any
  abilities: string[]
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): user => ({
    user: null,
    abilities: []
  }),
  getters: {},
  actions: {
    async userInfo() {
      try {
        let bearer = localStorage.getItem('auth')
        if (bearer) {
          let auth = JSON.parse(bearer)
          axios.defaults.headers.common.Authorization = 'Bearer ' + auth.bearer
        }
        const data: any = await makeRequest({ method: api.user.info })
        this.user = data.user
        this.abilities = data.abilities
        return data.user
      } catch (error) {
        throw error
      }
    },
    /* async getDashboard() {
      try {
        const data: any = await makeRequest({ route: 'dashboard' })
        return data
      } catch (error) {
        throw error
      }
    },
    async updatePassword(payload: any) {
      try {
        const data: any = await makeRequest({ route: 'password', body: payload })
        return data
      } catch (error) {
        throw error
      }
    },
    async getCountries() {
      try {
        const data: any = await makeRequest({ route: 'countries' })
        return data
      } catch (error) {
        throw error
      }
    },
    async updateUser(payload: any) {
      try {
        const data: any = await makeRequest({ route: 'updateUser', body: payload })
        this.user = data
        return data
      } catch (error) {
        throw error
      }
    },
    async logout() {
      try {
        const data: any = await makeRequest({ route: 'logout' })
        return data
      } catch (error) {
        throw error
      }
    } */
  },
  persist: true
})

import { defineStore } from 'pinia'
import makeRequest from '@/helpers/makeRequest'
import api from '@/services/api'
// project imports

export const useNotificationStore = defineStore({
  id: 'notifications',
  state: (): any => ({
  }),
  getters: {},
  actions: {
    async getNotifications() {
      try {
        const data: any = await makeRequest({ method: api.notification.notifications })
        return data
      } catch (error: any) {
        throw new Error(error);
      }
    },
    async readNotification(body: any) {
        try {
          const data: any = await makeRequest({ method: api.notification.toggle, body })
          return data
        } catch (error: any) {
          throw new Error(error);
        }
      },
  },
  //persist: true // SOLO PARA PERSISTIR
})

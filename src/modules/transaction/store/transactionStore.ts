import { defineStore } from 'pinia'
import makeRequest from '@/helpers/makeRequest'
import api from '@/services/api'
// project imports

export const useTransactionStore = defineStore({
  id: 'transaction',
  state: (): any => ({
  }),
  getters: {},
  actions: {
    async getTransactions(payload: any) {
      try {
        const data: any = await makeRequest({ method: api.transaction.transactions, params: payload })
        return data
      } catch (error: any) {
        throw new Error(error);
      }
    },
    async getStats(payload: {uuid: string}) {
      try {
        const data: any = await makeRequest({ method: api.transaction.stats, params: payload })
        return data
      } catch (error: any) {
        throw new Error(error);
      }
    },
    async getDetail(payload: {uuid: string}) {
      try {
        const data: any = await makeRequest({ method: api.transaction.detail, params: payload })
        return data
      } catch (error: any) {
        throw new Error(error);
      }
    },
  },
  //persist: true // SOLO PARA PERSISTIR
})

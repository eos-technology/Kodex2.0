import { defineStore } from 'pinia'
import makeRequest from '@/helpers/makeRequest'
import api from '@/services/api'
// project imports

export const useProjectStore = defineStore({
  id: 'project',
  state: (): any => ({
  }),
  getters: {},
  actions: {
    async getProjects() {
      try {
        const data: any = await makeRequest({ method: api.project.projects })
        return data
      } catch (error: any) {
        throw new Error(error);
      }
    },
    async createProject(payload: {name: string, color: string }) {
      try {
        const data: any = await makeRequest({ method: api.project.create, body: payload })
        return data
      } catch (error: any) {
        throw new Error(error);
      }
    },
  },
  //persist: true // SOLO PARA PERSISTIR
})

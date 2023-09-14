/**
 * axios setup to use mock service
 */

import Axios from 'axios'
import { useErrorsStore } from '@/stores/errors'
import { router } from '@/router'

const axios = Axios.create()

let bearer = localStorage.getItem('auth')
if (bearer) {
  let auth = JSON.parse(bearer)
  axios.defaults.headers.common.Authorization = 'Bearer ' + auth.bearer
}

// interceptor for http
axios.interceptors.response.use(
  (response) => {
    const errorsStore = useErrorsStore()
    errorsStore.cleanErrors()
    return response
  },
  (error) => {
    const errorsStore = useErrorsStore()

    if (error.request.status == 401) {
      router.push({ name: 'login' })
    }

    let errorsArray = []
    if (error.request.status != 401 && error.request.status != 404) {
      if (error.response.data.message) {
        errorsArray.push(error.response.data.message)
      } else {
        error.response.data.errors.forEach((element: any) => {
          errorsArray.push(element.message)
        })
      }
    }

    errorsStore.setErrors(errorsArray)
    return Promise.reject((error.response && error.response.data) || 'Wrong Services')
  }
)

export default axios

export type loginResponseType = {
  token: String
}

export type loginRequest = {
  email: string | null
  password: string | null
  remember: boolean
  meta: {
    ip: string
    location: string
  }
}

export type registerRequest = {
  names: string | null
  username: string | null
  email: string | null
  password: string | null
  referral: string | null
  confirmPassword?: string | null
  country: string | null
  date: string | null
  phone: string | null
}

/* export type recoverRequest = {
  url: string | null
  password: string | null
  confirmPassword: string | null
} */

export type Endpoint = {
  method: 'get' | 'post' // Método HTTP permitido para la ruta
  uri: (params: any) => string // Función para construir la URL
}

export type registerResponseType = {
  response: string
}

export type recoverRequest = {
  email: string | null
}

export type codeRequest = {
  password: string | null
  newPassword: string | null
}

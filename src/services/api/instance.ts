'use client'

import axios from 'axios'

export const authHeader_Bearer = () => {
  if (typeof window === 'undefined') return {}

  // Get token from cookies
  const lang = localStorage.getItem('lang')
}

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL!,
  headers: {
    Accept: 'application/json'
  }
})

instance.interceptors.request.use(
  async (config) => {
    const authHeader = authHeader_Bearer()
    // @ts-ignore
    config.headers = {
      ...config.headers,
      ...authHeader
    }
    return config
  },
  (error) => Promise.reject(error)
)

// ✅ Keep response interceptor for handling errors
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      window.location.href = '/'
    }

    if (error.response) {
      // toast.error(error?.response?.data?.message)
      return Promise.reject({
        status: error.response.status,
        message: error.response.data.message
      })
    } else if (error.request) {
      return Promise.reject(error.request)
    } else {
      return Promise.reject(error)
    }
  }
)

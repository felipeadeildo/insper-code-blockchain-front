import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import xior from 'xior'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const API_URL = import.meta.env.VITE_API_URL

export const httpClient = xior.create({
  baseURL: API_URL,
})

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // If 401 Unauthorized, remove token and redirect to login
    if (error?.response?.status === 401) {
      localStorage.removeItem('auth_token')
      delete httpClient.defaults.headers['Authorization']

      // Only redirect if not already on login/home page
      if (
        window.location.pathname !== '/' &&
        !window.location.pathname.includes('login')
      ) {
        window.location.href = '/'
      }
    }

    return Promise.reject(error)
  }
)

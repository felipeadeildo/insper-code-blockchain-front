import { httpClient } from '~/lib/utils'

export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  token: string
  user: {
    id: string
    name: string
    email: string
    role?: string
  }
}

export interface User {
  id: string
  name: string
  email: string
  role?: string
}

// Auth API functions
export async function login(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  try {
    const response = await httpClient.post<AuthResponse>(
      '/auth/login',
      credentials
    )
    return response.data
  } catch (error) {
    console.error('Login error:', error)
    throw error
  }
}

export async function getCurrentUser(): Promise<User> {
  try {
    const response = await httpClient.get<User>('/auth/me')
    return response.data
  } catch (error) {
    console.error('Get current user error:', error)
    throw error
  }
}

// Token management functions
export function setAuthToken(token: string): void {
  localStorage.setItem('auth_token', token)
  httpClient.defaults.headers['Authorization'] = `Bearer ${token}`
}

export function getAuthToken(): string | null {
  return localStorage.getItem('auth_token')
}

export function removeAuthToken(): void {
  localStorage.removeItem('auth_token')
  delete httpClient.defaults.headers['Authorization']
}

export function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    const exp = payload.exp * 1000 // Convert to milliseconds
    return Date.now() >= exp
  } catch {
    return true // If we can't parse, consider it expired
  }
}

// Initialize token on app start
export function initializeAuth(): void {
  const token = getAuthToken()
  if (token && !isTokenExpired(token)) {
    httpClient.defaults.headers['Authorization'] = `Bearer ${token}`
  } else if (token && isTokenExpired(token)) {
    // Remove expired token
    removeAuthToken()
  }
}

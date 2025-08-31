import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import type { LoginCredentials, User } from '~/services/auth'
import * as authService from '~/services/auth'

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isAuthenticated = !!user

  // Initialize auth on mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        authService.initializeAuth()
        const token = authService.getAuthToken()

        if (token && !authService.isTokenExpired(token)) {
          // Get current user info
          const currentUser = await authService.getCurrentUser()
          setUser(currentUser)
        }
      } catch (error) {
        console.error('Failed to initialize auth:', error)
        // If getCurrentUser fails, remove invalid token
        authService.removeAuthToken()
      } finally {
        setIsLoading(false)
      }
    }

    initAuth()
  }, [])

  const login = async (credentials: LoginCredentials) => {
    try {
      setIsLoading(true)
      const response = await authService.login(credentials)

      // Set token and update httpClient headers
      authService.setAuthToken(response.token)
      setUser(response.user)
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    authService.removeAuthToken()
    setUser(null)
  }

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}

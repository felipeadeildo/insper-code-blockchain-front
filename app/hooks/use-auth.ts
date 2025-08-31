import { useAuthContext } from '~/contexts/auth'

export function useAuth() {
  return useAuthContext()
}

import { Blocks, Eye, EyeOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Alert, AlertDescription } from '~/components/ui/alert'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { useAuth } from '~/hooks/use-auth'
import type { Route } from './+types/login'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Login - Insper Blockchain' },
    {
      name: 'description',
      content: 'Faça login na plataforma administrativa do Insper Blockchain.',
    },
  ]
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const { login, isLoading, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Email e senha são obrigatórios')
      return
    }

    try {
      await login({ email, password })
      // Redirect will happen automatically via useEffect
    } catch (error: any) {
      console.error('Login error:', error)
      setError(error?.response?.data?.message || 'Credenciais inválidas')
    }
  }

  return (
    <main className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-primary/10">
      <div className="w-full max-w-md px-4">
        <Card className="shadow-xl">
          <CardHeader className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Blocks className="h-8 w-8" />
              <span className="text-2xl font-bold">Blockchain Insper</span>
            </div>
            <div>
              <CardTitle className="text-2xl">Fazer login</CardTitle>
              <CardDescription>
                Acesse a plataforma administrativa
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? 'Entrando...' : 'Entrar'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Button variant="ghost" asChild>
                <a href="/">Voltar para o site</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

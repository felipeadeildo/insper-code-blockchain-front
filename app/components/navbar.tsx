import { Blocks, Menu, X, LogOut, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '~/components/ui/button'
import { useAuth } from '~/hooks/use-auth'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { isAuthenticated, user, logout } = useAuth()

  const navItems = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Áreas', href: '#areas' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Fund', href: '#fundo' },
    { name: 'Research', href: '#research' },
    { name: 'Notícias', href: '/noticias' },
    { name: 'Contato', href: '#contato' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'sobre',
        'areas',
        'projetos',
        'fundo',
        'research',
        'contato',
      ]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection ? `#${currentSection}` : '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary/80 transition-colors"
          >
            <Blocks className="h-6 w-6" />
            <span className="hidden sm:block">Blockchain Insper</span>
            <span className="sm:hidden">BI</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.href
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              
              {isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span className="hidden lg:block">{user?.name || user?.email}</span>
                  </div>
                  <Button size="sm" variant="outline" onClick={logout}>
                    <LogOut className="w-4 h-4 mr-1" />
                    Sair
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="/login">Login</a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href="#contato">Junte-se a nós</a>
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-secondary'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              
              {isAuthenticated ? (
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>{user?.name || user?.email}</span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      logout()
                      setIsOpen(false)
                    }}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sair
                  </Button>
                </div>
              ) : (
                <div className="mt-4 space-y-2">
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <a href="/login" onClick={() => setIsOpen(false)}>
                      Login
                    </a>
                  </Button>
                  <Button size="sm" className="w-full" asChild>
                    <a href="#contato" onClick={() => setIsOpen(false)}>
                      Junte-se a nós
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

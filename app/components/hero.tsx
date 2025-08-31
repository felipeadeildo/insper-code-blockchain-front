import { ArrowRight, Lightbulb, Target, Users } from 'lucide-react'
import { Button } from '~/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-primary/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Primeira organização estudantil de blockchain da América Latina
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Conectando <span className="text-primary">jovens talentos</span> às
            oportunidades do futuro
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Integramos disrupção e mercado tradicional, tornando a inovação
            blockchain acessível e preparando a próxima geração para as
            tecnologias emergentes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="group">
              Junte-se a nós
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Conheça nossos projetos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Nossa Missão</h3>
              <p className="text-sm text-muted-foreground">
                Conectar jovens talentos às oportunidades de um mercado em
                criação
              </p>
            </div>

            <div className="text-center group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Nossos Valores</h3>
              <p className="text-sm text-muted-foreground">
                Tornar a inovação acessível para o mercado tradicional
              </p>
            </div>

            <div className="text-center group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Nossa Comunidade</h3>
              <p className="text-sm text-muted-foreground">
                Estudantes engajados de diversas áreas do conhecimento
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

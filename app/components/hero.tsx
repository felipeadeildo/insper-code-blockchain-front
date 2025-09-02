import { ArrowRight, ChevronDown, Lightbulb, Target, Users } from 'lucide-react'
import { Button } from '~/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-4 lg:mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-2 text-xs lg:text-sm font-medium">
              <span className="w-1.5 h-1.5 animate-pulse" />
              Primeira organização estudantil de blockchain da América Latina
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Conectando <span className="text-primary">jovens talentos</span> às
            oportunidades do futuro
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed">
            Integramos disrupção e mercado tradicional, tornando a inovação
            blockchain acessível e preparando a próxima geração para as
            tecnologias emergentes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center mb-8 lg:mb-12">
            <Button size="lg" className="group" asChild>
              <a href="#contato">
                Junte-se a nós
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projetos">Conheça nossos projetos</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 lg:mb-3 group-hover:bg-primary/20 transition-colors">
                <Target className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-sm lg:text-base">
                Nossa Missão
              </h3>
              <p className="text-xs lg:text-sm text-muted-foreground">
                Conectar jovens talentos às oportunidades de um mercado em
                criação
              </p>
            </div>

            <div className="text-center group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 lg:mb-3 group-hover:bg-primary/20 transition-colors">
                <Lightbulb className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-sm lg:text-base">
                Nossos Valores
              </h3>
              <p className="text-xs lg:text-sm text-muted-foreground">
                Tornar a inovação acessível para o mercado tradicional
              </p>
            </div>

            <div className="text-center group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 lg:mb-3 group-hover:bg-primary/20 transition-colors">
                <Users className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-sm lg:text-base">
                Nossa Comunidade
              </h3>
              <p className="text-xs lg:text-sm text-muted-foreground">
                Estudantes engajados de diversas áreas do conhecimento
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary/80 transition-colors z-20 hidden md:block"
        aria-label="Scroll para próxima seção"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  )
}

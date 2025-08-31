import {
  Building2,
  Coins,
  ExternalLink,
  FileText,
  Shield,
  TrendingUp,
  Users,
} from 'lucide-react'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Section, SectionHeader } from './section'

export function Projects() {
  const projects = [
    {
      title: 'Business Case Ambev',
      description:
        'Foi avaliada a aplicação de blockchain na operação da Ambev para tornar o gerenciamento da sua cadeia logística mais eficiente e transparente, visando diminuir custos e criar valor para o consumidor.',
      icon: Building2,
      tags: ['Business', 'Supply Chain', 'Logística'],
      category: 'Estudo de Caso',
    },
    {
      title: 'Tokenização de Precatórios',
      description:
        'Foi desenvolvida uma solução de tokenização de recebíveis judiciais no padrão ERC-20, junto ao Grupo GCB e à PeerBR.',
      icon: FileText,
      tags: ['Finance', 'Tokenização', 'ERC-20'],
      category: 'Desenvolvimento',
    },
    {
      title: 'ICO Presale da GAUGECASH',
      description:
        'Durante este projeto foi desenvolvido, em parceria com uma grande empresa do mercado, um Initial Coin Offering para a GAUGECASH, o primeiro sistema monetário descentralizado.',
      icon: Coins,
      tags: ['ICO', 'Crowdfunding', 'DeFi'],
      category: 'Consultoria',
    },
    {
      title: 'Fundo Simulado',
      description:
        'Como norte para os estudos produzidos, o Fundo Simulado surgiu para testar e refinar a eficácia das análises desenvolvidas pelos membros, colocando na prática toda a pesquisa teórica adquirida.',
      icon: TrendingUp,
      tags: ['Finance', 'Investimentos', 'Análise'],
      category: 'Educacional',
    },
    {
      title: 'Registro de Membros em NFTs',
      description:
        'Foi desenvolvido um sistema de registro para guardar as informações dos membros de forma segura e eterna. O sistema usa IPFS e a rede Polygon, garantindo imutabilidade e segurança.',
      icon: Shield,
      tags: ['NFT', 'IPFS', 'Polygon'],
      category: 'Tecnologia',
    },
    {
      title: 'Valuation Mineração',
      description:
        'Em parceria com uma grande empresa do mercado, foi realizado um estudo completo que estipulou diversos fatores do setor de mineração de criptoativos para averiguar possíveis investimentos.',
      icon: Users,
      tags: ['Mining', 'Valuation', 'Investimentos'],
      category: 'Consultoria',
    },
  ]

  return (
    <Section id="projetos" className="bg-secondary/30">
      <SectionHeader
        subtitle="Nossos Projetos"
        title="Conheca alguns dos nossos projetos públicos"
        description="Desenvolvemos soluções reais para empresas e casos de uso práticos que demonstram o potencial da tecnologia blockchain."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="outline" className="text-xs">
                  {project.category}
                </Badge>
              </div>
              <CardTitle className="text-xl leading-tight">
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="w-full group-hover:bg-primary/10 transition-colors"
              >
                Saiba mais
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" variant="outline">
          Ver todos os projetos
        </Button>
      </div>
    </Section>
  )
}

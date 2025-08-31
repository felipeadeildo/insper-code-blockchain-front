import { Coins, FileBarChart, TrendingUp, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Progress } from '~/components/ui/progress'
import { Section, SectionHeader } from './section'

export function Fund() {
  const indicators = [
    { label: 'Retorno acumulado', value: '+127.3%', progress: 85 },
    { label: 'Retorno anual médio', value: '+42.1%', progress: 70 },
    { label: 'Número de ativos', value: '15', progress: 60 },
    { label: 'Researches realizados', value: '25+', progress: 95 },
  ]

  const fundFeatures = [
    {
      icon: FileBarChart,
      title: 'Análise Técnica',
      description:
        'Avaliação de whitepapers e fundamentalistas de diversas criptomoedas',
    },
    {
      icon: TrendingUp,
      title: 'Aplicabilidade',
      description:
        'Estudo da aplicabilidade real e potencial de crescimento futuro',
    },
    {
      icon: Coins,
      title: 'Alocação Estratégica',
      description:
        'Realização da alocação de ativos baseada em análise criteriosa',
    },
    {
      icon: Users,
      title: 'Aprendizado Prático',
      description: 'Teste e refinamento da eficácia das análises dos membros',
    },
  ]

  return (
    <Section id="fundo" className="bg-secondary/30">
      <SectionHeader
        subtitle="Fundo Blockchain Insper"
        title="Nossa tese de investimento em prática"
        description="Analisamos whitepapers de diversas criptomoedas, avaliando aplicabilidade, escalabilidade e potencial de crescimento futuro para realizar a alocação de ativos do nosso fundo simulado."
      />

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-6">Indicadores do Fundo</h3>
          <div className="space-y-6">
            {indicators.map((indicator, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    {indicator.label}
                  </span>
                  <span className="text-lg font-bold text-primary">
                    {indicator.value}
                  </span>
                </div>
                <Progress value={indicator.progress} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">Nossa Metodologia</h3>
          <div className="grid grid-cols-2 gap-4">
            {fundFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-sm mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Objetivo do Fundo Simulado
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Como norte para os estudos produzidos, o Fundo Simulado surgiu para
            testar e refinar a eficácia das análises desenvolvidas pelos
            membros, colocando na prática toda a pesquisa e bagagem teórica
            adquiridas durante nossos estudos.
          </p>
        </CardContent>
      </Card>
    </Section>
  )
}

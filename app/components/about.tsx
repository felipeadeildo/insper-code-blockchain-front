import { Calendar, MapPin, TrendingUp, Users2 } from 'lucide-react'
import { Badge } from '~/components/ui/badge'
import { Card, CardContent } from '~/components/ui/card'
import { Section, SectionHeader } from './section'

export function About() {
  const stats = [
    { icon: Calendar, label: 'Fundada em', value: '2017' },
    { icon: MapPin, label: 'Primeira na', value: 'América Latina' },
    { icon: Users2, label: 'Áreas de estudo', value: '3' },
    { icon: TrendingUp, label: 'Anos de', value: 'Inovação' },
  ]

  const values = [
    'Alto comprometimento',
    'Proatividade',
    'Inovação',
    'Trabalho em equipe',
    'Multidisciplinaridade',
    'Excelência',
    'Eficiência',
  ]

  return (
    <Section id="sobre" className="bg-secondary/30">
      <SectionHeader
        subtitle="Sobre Nós"
        title="Reavaliando o presente e construindo o futuro"
        description="Criada em setembro de 2017, a Blockchain Insper é a primeira organização estudantil da América Latina focada em estudo de tecnologias blockchain."
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-6">Nossa História</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Derivada de uma iniciativa universitária, reunimos estudantes de
              administração, economia, engenharias e direito em uma entidade
              dividida em três áreas de estudo:
              <strong className="text-foreground">
                {' '}
                Business, Finance e Tecnologia
              </strong>
              .
            </p>
            <p>
              Buscamos criar um time altamente engajado e preparado para
              enfrentar a nova onda tecnológica no mercado, estimulando o estudo
              e a adoção da tecnologia blockchain no Brasil, criando
              conhecimento não apenas para o presente, mas também para o futuro.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">Nossos Valores</h3>
          <div className="flex flex-wrap gap-2">
            {values.map((value, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm py-2 px-3"
              >
                {value}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4 text-primary">
              Nossa Missão
            </h3>
            <p className="text-muted-foreground">
              Conectar jovens talentos às oportunidades de um mercado em
              criação, fomentando o desenvolvimento do ecossistema brasileiro em
              torno da tecnologia blockchain para criar um futuro mais
              eficiente.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4 text-primary">Nossa Visão</h3>
            <p className="text-muted-foreground">
              Tornar a inovação acessível para o mercado tradicional,
              capacitando alunos com o melhor conteúdo e conectando-os ao
              mercado para incluir nosso país nesse cenário de inovação.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}

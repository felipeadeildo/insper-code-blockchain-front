import { Briefcase, Code, Play, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Section, SectionHeader } from './section'

export function Areas() {
  const areas = [
    {
      icon: Briefcase,
      title: 'Business',
      description:
        'Estudo das aplicações da tecnologia blockchain, atuações nas diversas áreas e empresas e elaboração de possíveis casos reais.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Finance',
      description:
        'Estudo do mercado de criptoativos, tecnologia blockchain no mercado financeiro e elaboração de estratégias de investimento.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Code,
      title: 'Tech',
      description:
        'Estudo da tecnologia blockchain na parte técnica, smart contracts, dApps, desenvolvimento de software e criptografia.',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <Section id="areas">
      <SectionHeader
        subtitle="Nossas Áreas"
        title="Conheça nossas áreas de estudo!"
        description="Estamos estruturados em áreas de estudo especializadas, cada uma focada em diferentes aspectos da tecnologia blockchain."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {areas.map((area, index) => (
          <Card
            key={index}
            className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
          >
            <CardHeader className="text-center pb-4">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${area.color} p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <area.icon className="w-full h-full text-white" />
              </div>
              <CardTitle className="text-2xl">{area.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center leading-relaxed">
                {area.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">
                Conheça nosso trabalho!
              </h3>
              <p className="text-muted-foreground mb-6">
                Assista ao vídeo institucional e descubra mais sobre nossas
                atividades, projetos e como estamos moldando o futuro da
                tecnologia blockchain no Brasil.
              </p>
            </div>
            <div className="relative group cursor-pointer">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  )
}

import { Quote } from 'lucide-react'
import { Card, CardContent } from '~/components/ui/card'
import { Section, SectionHeader } from './section'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Felipe Santos',
      role: 'Co-fundador e Ex-membro',
      content:
        'Hoje acredito que a entidade se tornou algo muito mais próximo do que imaginávamos quando foi fundada, um organismo que funciona de maneira independente de qualquer membro específico. Além da possibilidade de aprender e debater com pessoas inteligentes sobre caminhos futuros para a sociedade por meio da tecnologia, os membros têm a oportunidade de aplicar essas ideias na prática nas áreas internas e também em projetos com as principais empresas do país como Ambev e BTG Pactual.',
      avatar: 'FS',
    },
    {
      name: 'Bruno Arthur',
      role: 'Co-fundador e Ex-membro',
      content:
        'Quando me chamaram e disseram que estavam fazendo uma entidade relacionada a isso eu vi uma oportunidade de disseminar o conhecimento nem que fosse dentro do próprio Insper. Foi então que me juntei ao time de fundadores da entidade. Com uma missão de difundir o conhecimento e fazer com que as pessoas gostem de aprender e tenham as melhores ferramentas a sua disposição. Por isso decido fazer vários projetos para que eu possa levar o conhecimento que fui adquirindo para os outros seja na forma de aulas, ou até mesmo mentoria de um projeto proposto.',
      avatar: 'BA',
    },
    {
      name: 'João P. J. M. Perpetuo',
      role: 'Co-fundador e Ex-membro',
      content:
        'Fundar a B.I. foi um desafio ímpar. Estudar uma tecnologia tão latente e nova trouxe desafios extras, mas ao mesmo tempo diferenciais competitivos em nossos currículos, logo no início de nossas carreiras. Habilidades de aprendizado, gestão de equipe, resolução de conflitos, entendimento de viabilidade de projetos e tomada de decisão, eram desenvolvidas a cada dia. Hoje posso falar que a entidade teve papel fundamental em meu desenvolvimento profissional e na posição que ocupo hoje.',
      avatar: 'JP',
    },
  ]

  return (
    <Section id="depoimentos">
      <SectionHeader
        subtitle="Depoimentos"
        title="O que nossos membros dizem"
        description="Conheça as experiências de quem passou pela Blockchain Insper e descobriu novas oportunidades no mundo da tecnologia."
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="relative">
            <CardContent className="p-8">
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

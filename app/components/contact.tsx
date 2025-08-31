import {
  Clock,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import { Section, SectionHeader } from './section'

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Localização',
      details: 'Insper - Instituto de Ensino e Pesquisa',
      secondary: 'Rua Quatá, 300 - Vila Olímpia, São Paulo',
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      details: 'Segunda à Sexta',
      secondary: '07:00 às 23:00',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'blockchain@insper.edu.br',
      secondary: 'Resposta em até 48h',
    },
  ]

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Instagram, name: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Github, name: 'GitHub', color: 'hover:text-gray-900' },
    { icon: MessageSquare, name: 'Discord', color: 'hover:text-indigo-600' },
  ]

  return (
    <Section id="contato">
      <SectionHeader
        subtitle="Entre em Contato"
        title="Vamos conversar sobre blockchain?"
        description="Caso queira fazer contato conosco, utilize os canais abaixo ou preencha o formulário. Estamos sempre abertos para novas conexões e oportunidades."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground">{info.details}</p>
                    <p className="text-sm text-muted-foreground/80">
                      {info.secondary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <p className="text-muted-foreground mb-4">
              Siga-nos nas redes sociais para acompanhar nossos projetos e
              novidades.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className={`group ${social.color} transition-colors`}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input id="firstName" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input id="lastName" placeholder="Seu sobrenome" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  placeholder="Sobre o que você gostaria de falar?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Escreva sua mensagem aqui..."
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Venha conhecer a Blockchain Insper e o Insper!
          </h3>
          <p className="text-muted-foreground text-lg">
            Estamos sempre abertos para receber visitantes e futuros membros.
            Agende uma visita e conheça nosso trabalho de perto.
          </p>
        </CardContent>
      </Card>
    </Section>
  )
}

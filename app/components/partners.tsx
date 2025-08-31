import { Card, CardContent } from '~/components/ui/card'
import { Section, SectionHeader } from './section'

export function Partners() {
  const partners = [
    { name: 'Insper', category: 'Educacional' },
    { name: 'Mercado Bitcoin', category: 'Exchange' },
    { name: 'Ambev', category: 'Corporativo' },
    { name: 'Itaú', category: 'Financeiro' },
    { name: 'Dotz', category: 'Fintech' },
    { name: 'GCB Investimentos', category: 'Investimentos' },
    { name: 'Peer BR', category: 'Blockchain' },
    { name: 'Coins', category: 'Exchange' },
    { name: 'Fernando Ulrich', category: 'Especialista' },
    { name: 'Blockchain Berkeley', category: 'Acadêmico' },
    { name: 'BeeTech', category: 'Tecnologia' },
    { name: 'Block Master', category: 'Educacional' },
    { name: 'iCoLab', category: 'Inovação' },
    { name: 'Mar Ventures', category: 'VC' },
    { name: 'Portal do Bitcoin', category: 'Mídia' },
  ]

  const categories = {
    Educacional:
      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    Exchange:
      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    Corporativo:
      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    Financeiro:
      'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
    Fintech: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300',
    Investimentos: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    Blockchain:
      'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
    Especialista:
      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    Acadêmico: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
    Tecnologia:
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
    Inovação:
      'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300',
    VC: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300',
    Mídia: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300',
  }

  return (
    <Section id="parceiros" className="bg-secondary/30">
      <SectionHeader
        subtitle="Parceiros"
        title="Conheça nossos parceiros e apoiadores"
        description="Trabalhamos em conjunto com empresas, instituições e especialistas para fortalecer o ecossistema blockchain no Brasil."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {partners.map((partner, index) => (
          <Card
            key={index}
            className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <CardContent className="p-4 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                <span className="text-primary font-bold text-sm">
                  {partner.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <h4 className="font-medium text-sm mb-2 text-foreground leading-tight">
                {partner.name}
              </h4>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${categories[partner.category as keyof typeof categories] || 'bg-gray-100 text-gray-800'}`}
              >
                {partner.category}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Card className="inline-block bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4">Quer ser nosso parceiro?</h3>
            <p className="text-muted-foreground mb-4">
              Junte-se aos nossos parceiros e apoie o desenvolvimento da
              tecnologia blockchain no Brasil.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}

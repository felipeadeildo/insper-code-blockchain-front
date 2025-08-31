import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { Section, SectionHeader } from '~/components/section'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import type { Route } from './+types/news'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Notícias - Insper Blockchain' },
    {
      name: 'description',
      content:
        'Fique por dentro das últimas notícias e novidades do mundo blockchain e criptomoedas.',
    },
  ]
}

// Mock data - later this will come from API
const mockNews = [
  {
    id: '1',
    title: 'Bitcoin atinge nova máxima histórica em 2024',
    excerpt:
      'O Bitcoin superou a marca de $70.000 pela primeira vez na história, impulsionado por maior adoção institucional e aprovação de ETFs.',
    category: 'Market',
    author: 'Equipe Finance',
    publishedAt: '2024-03-15',
    readTime: '3 min',
    imageUrl: '/images/bitcoin-high.jpg',
  },
  {
    id: '2',
    title: 'Ethereum 2.0: O futuro das finanças descentralizadas',
    excerpt:
      'Análise completa sobre as melhorias do Ethereum 2.0 e seu impacto no ecossistema DeFi.',
    category: 'Technology',
    author: 'Equipe Tech',
    publishedAt: '2024-03-10',
    readTime: '5 min',
    imageUrl: '/images/ethereum-2.jpg',
  },
  {
    id: '3',
    title: 'Workshop: Smart Contracts na Prática',
    excerpt:
      'Recap do nosso workshop sobre desenvolvimento de smart contracts com Solidity.',
    category: 'Event',
    author: 'Equipe Business',
    publishedAt: '2024-03-05',
    readTime: '4 min',
    imageUrl: '/images/workshop-smart-contracts.jpg',
  },
  {
    id: '4',
    title: 'Regulamentação de Criptomoedas no Brasil',
    excerpt:
      'Entenda as novas regulamentações do Banco Central para exchanges e investidores de criptomoedas.',
    category: 'Regulation',
    author: 'Equipe Business',
    publishedAt: '2024-02-28',
    readTime: '6 min',
    imageUrl: '/images/regulation-brazil.jpg',
  },
  {
    id: '5',
    title: 'NFTs além da Arte: Casos de Uso Reais',
    excerpt:
      'Exploramos aplicações práticas dos NFTs em setores como imobiliário, gaming e educação.',
    category: 'Innovation',
    author: 'Equipe Tech',
    publishedAt: '2024-02-20',
    readTime: '4 min',
    imageUrl: '/images/nft-usecases.jpg',
  },
  {
    id: '6',
    title: 'DeFi vs Finanças Tradicionais: Comparativo',
    excerpt:
      'Análise detalhada das vantagens e desvantagens entre finanças descentralizadas e o sistema bancário tradicional.',
    category: 'Analysis',
    author: 'Equipe Finance',
    publishedAt: '2024-02-15',
    readTime: '7 min',
    imageUrl: '/images/defi-vs-traditional.jpg',
  },
]

const categories = [
  { name: 'Todas', value: 'all' },
  { name: 'Mercado', value: 'Market' },
  { name: 'Tecnologia', value: 'Technology' },
  { name: 'Eventos', value: 'Event' },
  { name: 'Regulamentação', value: 'Regulation' },
  { name: 'Inovação', value: 'Innovation' },
  { name: 'Análises', value: 'Analysis' },
]

export default function News() {
  return (
    <main className="min-h-screen pt-16">
      <Section>
        <SectionHeader
          subtitle="Blog & Notícias"
          title="Fique por dentro do mundo blockchain"
          description="Últimas notícias, análises e insights sobre criptomoedas, tecnologia blockchain e o mercado financeiro."
        />

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={category.value === 'all' ? 'default' : 'outline'}
              size="sm"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <span className="text-muted-foreground">Featured Image</span>
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">Destaque</Badge>
                <Badge>{mockNews[0].category}</Badge>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                {mockNews[0].title}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {mockNews[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {mockNews[0].author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(mockNews[0].publishedAt).toLocaleDateString(
                    'pt-BR'
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {mockNews[0].readTime}
                </div>
              </div>
              <Button asChild>
                <a href={`/noticias/${mockNews[0].id}`}>
                  Ler artigo completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </div>
        </Card>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockNews.slice(1).map((article) => (
            <Card
              key={article.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Image</span>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  <a href={`/noticias/${article.id}`}>{article.title}</a>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString(
                        'pt-BR'
                      )}
                    </span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Carregar mais notícias
          </Button>
        </div>
      </Section>
    </main>
  )
}

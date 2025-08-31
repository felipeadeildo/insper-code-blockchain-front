import { ArrowLeft, Calendar, Clock, Share2, User } from 'lucide-react'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'
import type { Route } from './+types/article'

export function meta({ params }: Route.MetaArgs) {
  // In real app, this would fetch article data based on params.id
  return [
    { title: 'Bitcoin atinge nova máxima histórica - Insper Blockchain' },
    {
      name: 'description',
      content:
        'O Bitcoin superou a marca de $70.000 pela primeira vez na história, impulsionado por maior adoção institucional.',
    },
  ]
}

// Mock article data - later this will come from API based on params.id
const mockArticle = {
  id: '1',
  title: 'Bitcoin atinge nova máxima histórica em 2024',
  content: `
    <p>O Bitcoin (BTC) alcançou um novo recorde histórico nesta semana, superando a marca dos $70.000 pela primeira vez desde seu lançamento em 2009. Esse marco representa não apenas um momento significativo para a criptomoeda líder, mas também um reflexo da crescente maturidade do mercado de ativos digitais.</p>

    <h2>Fatores que impulsionaram a alta</h2>
    
    <p>Diversos fatores contribuíram para essa valorização excepcional:</p>
    
    <ul>
      <li><strong>Aprovação de ETFs de Bitcoin:</strong> A aprovação de fundos negociados em bolsa (ETFs) de Bitcoin pela SEC americana facilitou o acesso de investidores institucionais ao mercado.</li>
      <li><strong>Adoção institucional:</strong> Grandes corporações como Tesla, MicroStrategy e Square continuam a adicionar Bitcoin aos seus balanços patrimoniais.</li>
      <li><strong>Inflação global:</strong> O Bitcoin tem sido visto como uma reserva de valor alternativa em meio às preocupações inflacionárias globais.</li>
      <li><strong>Regulamentação mais clara:</strong> Marcos regulatórios mais definidos em várias jurisdições têm aumentado a confiança dos investidores.</li>
    </ul>

    <h2>Análise técnica</h2>
    
    <p>Do ponto de vista técnico, o Bitcoin quebrou importantes níveis de resistência, com volume significativo apoiando o movimento. Os indicadores sugerem que ainda há espaço para valorização, embora correções sejam naturais em qualquer ativo.</p>

    <blockquote>
      "Esta valorização do Bitcoin representa um amadurecimento do mercado de criptomoedas e uma validação da tecnologia blockchain como um todo." - Equipe de Análise Insper Blockchain
    </blockquote>

    <h2>Impacto no mercado</h2>
    
    <p>A alta do Bitcoin teve efeitos positivos em todo o ecossistema de criptomoedas, com altcoins também registrando valorizações significativas. O mercado total de criptomoedas ultrapassou os $2.5 trilhões em capitalização.</p>

    <h2>Perspectivas futuras</h2>
    
    <p>Os analistas permanecem otimistas sobre o potencial de longo prazo do Bitcoin, especialmente considerando:</p>
    
    <ul>
      <li>O halving programado para 2024</li>
      <li>Crescimento contínuo da adoção institucional</li>
      <li>Desenvolvimento de soluções de segunda camada como a Lightning Network</li>
      <li>Maior integração com o sistema financeiro tradicional</li>
    </ul>

    <p>No entanto, é importante lembrar que o mercado de criptomoedas permanece volátil e os investidores devem sempre fazer suas próprias pesquisas e considerar seus perfis de risco antes de investir.</p>
  `,
  category: 'Market',
  author: 'Equipe Finance',
  publishedAt: '2024-03-15',
  readTime: '3 min',
  imageUrl: '/images/bitcoin-high.jpg',
}

export default function Article() {
  return (
    <main className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8" asChild>
          <a href="/noticias">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para notícias
          </a>
        </Button>

        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge>{mockArticle.category}</Badge>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              {mockArticle.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {mockArticle.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(mockArticle.publishedAt).toLocaleDateString(
                    'pt-BR'
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {mockArticle.readTime}
                </div>
              </div>

              <Button variant="outline" size="sm" className="sm:ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-muted-foreground">Featured Image</span>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-blockquote:border-l-primary prose-blockquote:text-foreground"
            dangerouslySetInnerHTML={{ __html: mockArticle.content }}
          />

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Gostou do artigo?
                </span>
                <Button size="sm">Compartilhar</Button>
              </div>

              <Button variant="outline" asChild>
                <a href="/noticias">Ver mais notícias</a>
              </Button>
            </div>
          </footer>
        </article>

        {/* Related Articles */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Artigos relacionados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Image</span>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    <a href={`/noticias/${i + 1}`}>
                      Título do artigo relacionado {i}
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Breve descrição do artigo relacionado que desperta o
                    interesse do leitor.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <span>Há 2 dias</span> • <span>4 min</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  Clock,
  Loader2,
  User,
} from 'lucide-react'
import { useState } from 'react'
import { Section, SectionHeader } from '~/components/section'
import { Alert, AlertDescription } from '~/components/ui/alert'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { useInfiniteArticles } from '~/hooks/use-news'
import type { Article } from '~/services/news'
import { getCategoryLabel } from '~/services/news'
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

const allCategories = [
  { name: 'Todas', value: undefined },
  { name: 'Mercado', value: 'market' as const },
  { name: 'Tecnologia', value: 'technology' as const },
  { name: 'Eventos', value: 'event' as const },
  { name: 'Regulamentação', value: 'regulation' as const },
  { name: 'Inovação', value: 'innovation' as const },
  { name: 'Análises', value: 'analysis' as const },
]

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState<
    Article['category'] | undefined
  >(undefined)

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteArticles({
    category: selectedCategory,
    status: 'published',
    limit: 6,
  })

  // Flatten all pages into a single array
  const articles = data?.pages.flatMap((page) => page.articles) || []
  const featuredArticle = articles[0]
  const otherArticles = articles.slice(1)

  if (isError) {
    return (
      <main className="min-h-screen pt-16">
        <Section>
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Erro ao carregar as notícias:{' '}
              {error?.message || 'Erro desconhecido'}
            </AlertDescription>
          </Alert>
        </Section>
      </main>
    )
  }

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
          {allCategories.map((category) => (
            <Button
              key={category.value || 'all'}
              variant={
                selectedCategory === category.value ? 'default' : 'outline'
              }
              size="sm"
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          <>
            {/* Featured Article */}
            {featuredArticle && (
              <Card className="mb-12 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    {featuredArticle.imageUrl ? (
                      <img
                        src={featuredArticle.imageUrl}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-muted-foreground">
                        Featured Image
                      </span>
                    )}
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">Destaque</Badge>
                      <Badge>
                        {getCategoryLabel(featuredArticle.category)}
                      </Badge>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredArticle.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(
                          featuredArticle.publishedAt
                        ).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime}
                      </div>
                    </div>
                    <Button asChild>
                      <a href={`/noticias/${featuredArticle.id}`}>
                        Ler artigo completo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            )}

            {/* Articles Grid */}
            {otherArticles.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {otherArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                      {article.imageUrl ? (
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-muted-foreground text-sm">
                          Image
                        </span>
                      )}
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {getCategoryLabel(article.category)}
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
            )}

            {/* Load More Button */}
            {hasNextPage && (
              <div className="text-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                >
                  {isFetchingNextPage ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Carregando...
                    </>
                  ) : (
                    'Carregar mais notícias'
                  )}
                </Button>
              </div>
            )}

            {articles.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  {selectedCategory
                    ? `Nenhuma notícia encontrada na categoria "${getCategoryLabel(selectedCategory)}"`
                    : 'Nenhuma notícia encontrada'}
                </p>
              </div>
            )}
          </>
        )}
      </Section>
    </main>
  )
}

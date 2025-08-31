import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  Clock,
  Loader2,
  Plus,
  User,
} from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Section, SectionHeader } from '~/components/section'
import { Alert, AlertDescription } from '~/components/ui/alert'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { useAuth } from '~/hooks/use-auth'
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

  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

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
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-12">
        <Section>
          <SectionHeader
            subtitle="Blog & Notícias"
            title="Fique por dentro do mundo blockchain"
            description="Últimas notícias, análises e insights sobre criptomoedas, tecnologia blockchain e o mercado financeiro."
          />

          {/* Nova notícia button (admin only) */}
          {isAuthenticated && (
            <div className="flex justify-end mb-8">
              <Button
                variant="default"
                size="sm"
                onClick={() => navigate('/admin/article?id=new')}
                className="gap-2"
              >
                <Plus className="w-4 h-4" />
                Nova notícia
              </Button>
            </div>
          )}

          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {allCategories.map((category) => (
              <Button
                key={category.value || 'all'}
                variant={
                  selectedCategory === category.value ? 'default' : 'outline'
                }
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="transition-all duration-200 hover:scale-105"
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
                <Card className="mb-16 overflow-hidden border-0 bg-gradient-to-r from-card via-card to-card/80 backdrop-blur-sm shadow-xl">
                  <div className="grid lg:grid-cols-5 gap-0">
                    <div className="lg:col-span-3 aspect-video lg:aspect-auto bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                      {featuredArticle.imageUrl ? (
                        <img
                          src={featuredArticle.imageUrl}
                          alt={featuredArticle.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <span className="text-muted-foreground">
                          Featured Image
                        </span>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
                    </div>
                    <CardContent className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center relative">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge
                          variant="secondary"
                          className="bg-primary/20 text-primary border-primary/30"
                        >
                          Destaque
                        </Badge>
                        <Badge className="bg-secondary/20 text-secondary-foreground border-secondary/30">
                          {getCategoryLabel(featuredArticle.category)}
                        </Badge>
                      </div>
                      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                        {featuredArticle.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {featuredArticle.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(
                            featuredArticle.publishedAt
                          ).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredArticle.readTime}
                        </div>
                      </div>
                      <Button asChild size="lg" className="w-fit group">
                        <a href={`/noticias/${featuredArticle.id}`}>
                          Ler artigo completo
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              )}

              {/* Articles Grid */}
              {otherArticles.length > 0 && (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mb-12">
                  {otherArticles.map((article) => (
                    <Card
                      key={article.id}
                      className="group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden border-0 bg-card/50 backdrop-blur-sm"
                    >
                      <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center relative overflow-hidden">
                        {article.imageUrl ? (
                          <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <span className="text-muted-foreground text-sm">
                            Image
                          </span>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardHeader className="pb-3 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            variant="outline"
                            className="text-xs bg-primary/10 border-primary/20"
                          >
                            {getCategoryLabel(article.category)}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2">
                          <a
                            href={`/noticias/${article.id}`}
                            className="hover:underline decoration-primary/30 underline-offset-4"
                          >
                            {article.title}
                          </a>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 px-6 pb-6">
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
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
      </div>
    </main>
  )
}

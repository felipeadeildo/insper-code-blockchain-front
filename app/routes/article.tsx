import {
  AlertTriangle,
  ArrowLeft,
  Calendar,
  Clock,
  Edit,
  Loader2,
  Share2,
  User,
} from 'lucide-react'
import { Alert, AlertDescription } from '~/components/ui/alert'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'
import { useAuth } from '~/hooks/use-auth'
import { useArticle, useArticles } from '~/hooks/use-news'
import { getCategoryLabel } from '~/services/news'
import type { Route } from './+types/article'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Artigo - Insper Blockchain' },
    {
      name: 'description',
      content: 'Leia o artigo completo sobre blockchain e criptomoedas.',
    },
  ]
}

export default function Article({ params }: Route.ComponentProps) {
  const { data: article, isLoading, isError, error } = useArticle(params.id)
  const { isAuthenticated } = useAuth()

  // Get related articles (same category, excluding current article)
  const { data: relatedData } = useArticles({
    category: article?.category,
    status: 'published',
    limit: 3,
  })

  const relatedArticles =
    relatedData?.articles.filter((a) => a.id !== params.id).slice(0, 3) || []

  const handleShare = async () => {
    if (navigator.share && article) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  if (isLoading) {
    return (
      <main className="min-h-screen pt-16">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-12">
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </div>
      </main>
    )
  }

  if (isError || !article) {
    return (
      <main className="min-h-screen pt-16">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-12">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              {error?.message || 'Artigo não encontrado'}
            </AlertDescription>
          </Alert>

          <div className="mt-8">
            <Button variant="ghost" asChild>
              <a href="/noticias">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para notícias
              </a>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-16">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 hover:bg-primary/10 transition-colors"
          asChild
        >
          <a href="/noticias">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para notícias
          </a>
        </Button>

        <article className="max-w-5xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-primary/10 text-primary border-primary/20 text-sm px-3 py-1">
                {getCategoryLabel(article.category)}
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text">
              {article.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {article.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.publishedAt).toLocaleDateString('pt-BR')}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </div>
              </div>

              <div className="flex gap-2 sm:ml-auto">
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
                {isAuthenticated && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={`/admin/article?id=${params.id}`}>
                      <Edit className="w-4 h-4 mr-2" />
                      Editar
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {article.imageUrl ? (
            <div className="aspect-video rounded-lg mb-8 overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-8 flex items-center justify-center">
              <span className="text-muted-foreground">Featured Image</span>
            </div>
          )}

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-blockquote:border-l-primary prose-blockquote:text-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground mr-2">
                  Tags:
                </span>
                {article.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Gostou do artigo?
                </span>
                <Button size="sm" onClick={handleShare}>
                  Compartilhar
                </Button>
              </div>

              <Button variant="outline" asChild>
                <a href="/noticias">Ver mais notícias</a>
              </Button>
            </div>
          </footer>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Artigos relacionados
            </h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {relatedArticles.map((relatedArticle) => (
                <Card
                  key={relatedArticle.id}
                  className="group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden border-0 bg-card/50 backdrop-blur-sm"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center relative overflow-hidden">
                    {relatedArticle.imageUrl ? (
                      <img
                        src={relatedArticle.imageUrl}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-muted-foreground text-sm">
                        Image
                      </span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      <a
                        href={`/noticias/${relatedArticle.id}`}
                        className="hover:underline decoration-primary/30 underline-offset-4"
                      >
                        {relatedArticle.title}
                      </a>
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <span>
                        {new Date(
                          relatedArticle.publishedAt
                        ).toLocaleDateString('pt-BR')}
                      </span>{' '}
                      • <span>{relatedArticle.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

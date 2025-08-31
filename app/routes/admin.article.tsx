import { AlertTriangle, ArrowLeft, Loader2, Save, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { Alert, AlertDescription } from '~/components/ui/alert'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import { useAuth } from '~/hooks/use-auth'
import {
  useArticle,
  useCreateArticle,
  useDeleteArticle,
  useUpdateArticle,
} from '~/hooks/use-news'
import type { CreateArticleData } from '~/services/news'
import { articleCategories } from '~/services/news'

export function meta() {
  return [
    { title: 'Admin - Gerenciar Artigo' },
    {
      name: 'description',
      content: 'Painel administrativo para gerenciar artigos',
    },
  ]
}

export default function AdminArticle() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { isAuthenticated, isLoading: authLoading } = useAuth()
  const articleId =
    searchParams.get('id') === 'new' ? null : searchParams.get('id') || ''
  const isEditing = !!articleId

  // Hooks
  const { data: article, isLoading: articleLoading } = useArticle(
    articleId || ''
  )
  const createMutation = useCreateArticle()
  const updateMutation = useUpdateArticle()
  const deleteMutation = useDeleteArticle()

  // Form state
  const [formData, setFormData] = useState<CreateArticleData>({
    title: '',
    content: '',
    excerpt: '',
    category: 'market',
    tags: [],
    imageUrl: '',
    status: 'published',
  })

  const [tagInput, setTagInput] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Update form when article loads
  if (article && isEditing && formData.title === '') {
    setFormData({
      title: article.title,
      content: article.content,
      excerpt: article.excerpt,
      category: article.category,
      tags: article.tags,
      imageUrl: article.imageUrl || '',
      status: article.status,
    })
  }

  // Auth check
  if (authLoading) {
    return (
      <main className="min-h-screen pt-16 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </main>
    )
  }

  if (!isAuthenticated) {
    navigate('/login')
    return null
  }

  const handleInputChange = (field: keyof CreateArticleData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      handleInputChange('tags', [...formData.tags, tagInput.trim()])
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    handleInputChange(
      'tags',
      formData.tags.filter((tag) => tag !== tagToRemove)
    )
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) newErrors.title = 'Título é obrigatório'
    if (!formData.content.trim()) newErrors.content = 'Conteúdo é obrigatório'
    if (!formData.excerpt.trim()) newErrors.excerpt = 'Resumo é obrigatório'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSave = async () => {
    if (!validateForm()) return

    try {
      let articleId: string

      if (isEditing && article) {
        await updateMutation.mutateAsync({
          id: article.id,
          ...formData,
        })
        articleId = article.id
      } else {
        const newArticle = await createMutation.mutateAsync(formData)
        articleId = newArticle.id
      }

      // Navigate to the article page using React Router
      navigate(`/noticias/${articleId}`)
    } catch (error) {
      console.error('Erro ao salvar artigo:', error)
    }
  }

  const handleDelete = async () => {
    if (!article || !confirm('Tem certeza que deseja excluir este artigo?'))
      return

    try {
      await deleteMutation.mutateAsync(article.id)
      navigate('/noticias')
    } catch (error) {
      console.error('Erro ao excluir artigo:', error)
    }
  }

  const isLoading =
    articleLoading ||
    createMutation.isPending ||
    updateMutation.isPending ||
    deleteMutation.isPending

  return (
    <main className="min-h-screen pt-16">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 lg:py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-4 min-w-0 flex-1">
            <Button variant="ghost" size="sm" asChild className="shrink-0">
              <a href="/noticias">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </a>
            </Button>
            <h1 className="text-xl sm:text-2xl font-bold truncate">
              {isEditing ? 'Editar Artigo' : 'Criar Novo Artigo'}
            </h1>
          </div>

          <div className="flex gap-2 sm:gap-3 shrink-0">
            {isEditing && (
              <Button
                variant="destructive"
                size="sm"
                onClick={handleDelete}
                disabled={isLoading}
                className="hover:bg-destructive/90 transition-colors flex-1 sm:flex-none"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Excluir</span>
                <span className="sm:hidden">Excluir</span>
              </Button>
            )}
            <Button
              onClick={handleSave}
              disabled={isLoading}
              size="sm"
              className="px-4 sm:px-6 flex-1 sm:flex-none"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              <span className="hidden sm:inline">Salvar</span>
              <span className="sm:hidden">Salvar</span>
            </Button>
          </div>
        </div>

        {/* Error Alert */}
        {(createMutation.error ||
          updateMutation.error ||
          deleteMutation.error) && (
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Erro ao processar operação. Tente novamente.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Main Form */}
          <div className="lg:col-span-3 space-y-6 lg:space-y-8">
            <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-lg">
              <CardHeader className="pb-4 lg:pb-6">
                <CardTitle className="text-lg lg:text-xl">
                  Informações Básicas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-6">
                <div>
                  <Label htmlFor="title">Título *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Digite o título do artigo"
                    className={errors.title ? 'border-red-500' : ''}
                  />
                  {errors.title && (
                    <p className="text-sm text-red-500 mt-1">{errors.title}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="excerpt">Resumo *</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) =>
                      handleInputChange('excerpt', e.target.value)
                    }
                    placeholder="Breve resumo do artigo"
                    rows={3}
                    className={errors.excerpt ? 'border-red-500' : ''}
                  />
                  {errors.excerpt && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.excerpt}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="content">Conteúdo *</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) =>
                      handleInputChange('content', e.target.value)
                    }
                    placeholder="Conteúdo completo do artigo (HTML permitido)"
                    rows={15}
                    className={`${errors.content ? 'border-red-500' : ''} resize-y`}
                  />
                  {errors.content && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.content}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">
                    Você pode usar HTML básico para formatação
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:space-y-8">
            <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-lg">
              <CardHeader className="pb-4 lg:pb-6">
                <CardTitle className="text-lg lg:text-xl">
                  Configurações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-6">
                <div>
                  <Label htmlFor="category">Categoria</Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) =>
                      handleInputChange('category', e.target.value)
                    }
                    className="w-full p-2 border rounded-md text-sm"
                  >
                    {articleCategories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) =>
                      handleInputChange('status', e.target.value)
                    }
                    className="w-full p-2 border rounded-md text-sm"
                  >
                    <option value="published">Publicado</option>
                    <option value="draft">Rascunho</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="imageUrl">URL da Imagem</Label>
                  <Input
                    id="imageUrl"
                    value={formData.imageUrl}
                    onChange={(e) =>
                      handleInputChange('imageUrl', e.target.value)
                    }
                    placeholder="https://exemplo.com/imagem.jpg"
                    className="text-sm"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-lg">
              <CardHeader className="pb-4 lg:pb-6">
                <CardTitle className="text-lg lg:text-xl">Tags</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-6">
                <div className="flex gap-2">
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Nova tag"
                    onKeyPress={(e) =>
                      e.key === 'Enter' && (e.preventDefault(), addTag())
                    }
                    className="text-sm flex-1"
                  />
                  <Button
                    type="button"
                    size="sm"
                    onClick={addTag}
                    className="shrink-0"
                  >
                    +
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground text-xs"
                      onClick={() => removeTag(tag)}
                    >
                      {tag} ×
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

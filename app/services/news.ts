import { httpClient } from '~/lib/utils'

export interface Article {
  id: string
  title: string
  content: string
  excerpt: string
  category:
    | 'market'
    | 'technology'
    | 'event'
    | 'regulation'
    | 'innovation'
    | 'analysis'
  author: string
  publishedAt: string
  readTime: string
  imageUrl?: string
  tags: string[]
  status: 'published' | 'draft'
}

export interface CreateArticleData {
  title: string
  content: string
  excerpt: string
  category: Article['category']
  tags: string[]
  imageUrl?: string
  status?: Article['status']
}

export interface UpdateArticleData extends Partial<CreateArticleData> {
  id: string
}

export interface ArticlesFilters {
  category?: Article['category']
  status?: Article['status']
  search?: string
  limit?: number
  offset?: number
}

export interface ArticlesResponse {
  articles: Article[]
  total: number
  hasMore: boolean
}

// News API functions
export async function getArticles(
  filters: ArticlesFilters = {}
): Promise<ArticlesResponse> {
  try {
    const params = new URLSearchParams()

    if (filters.category) params.append('category', filters.category)
    if (filters.status) params.append('status', filters.status)
    if (filters.search) params.append('search', filters.search)
    if (filters.limit) params.append('limit', filters.limit.toString())
    if (filters.offset) params.append('offset', filters.offset.toString())

    const response = await httpClient.get<ArticlesResponse>(
      `/news?${params.toString()}`
    )
    return response.data
  } catch (error) {
    console.error('Get articles error:', error)
    throw error
  }
}

export async function getArticle(id: string): Promise<Article> {
  try {
    const response = await httpClient.get<Article>(`/news/${id}`)
    return response.data
  } catch (error) {
    console.error('Get article error:', error)
    throw error
  }
}

export async function createArticle(data: CreateArticleData): Promise<Article> {
  try {
    const response = await httpClient.post<Article>('/news', {
      ...data,
      status: data.status || 'published',
    })
    return response.data
  } catch (error) {
    console.error('Create article error:', error)
    throw error
  }
}

export async function updateArticle(data: UpdateArticleData): Promise<Article> {
  try {
    const { id, ...updateData } = data
    const response = await httpClient.put<Article>(`/news/${id}`, updateData)
    return response.data
  } catch (error) {
    console.error('Update article error:', error)
    throw error
  }
}

export async function deleteArticle(id: string): Promise<void> {
  try {
    await httpClient.delete(`/news/${id}`)
  } catch (error) {
    console.error('Delete article error:', error)
    throw error
  }
}

// Categories helper
export const articleCategories: {
  value: Article['category']
  label: string
}[] = [
  { value: 'market', label: 'Mercado' },
  { value: 'technology', label: 'Tecnologia' },
  { value: 'event', label: 'Eventos' },
  { value: 'regulation', label: 'Regulamentação' },
  { value: 'innovation', label: 'Inovação' },
  { value: 'analysis', label: 'Análises' },
]

export function getCategoryLabel(category: Article['category']): string {
  return articleCategories.find((c) => c.value === category)?.label || category
}

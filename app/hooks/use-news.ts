import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import type {
  ArticlesFilters,
  CreateArticleData,
  UpdateArticleData,
} from '~/services/news'
import * as newsService from '~/services/news'

// Query keys
export const newsKeys = {
  all: ['news'] as const,
  articles: () => [...newsKeys.all, 'articles'] as const,
  article: (id: string) => [...newsKeys.all, 'article', id] as const,
  filtered: (filters: ArticlesFilters) =>
    [...newsKeys.articles(), 'filtered', filters] as const,
}

// Hooks for fetching news
export function useArticles(filters: ArticlesFilters = {}) {
  return useQuery({
    queryKey: newsKeys.filtered(filters),
    queryFn: () => newsService.getArticles(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export function useInfiniteArticles(filters: ArticlesFilters = {}) {
  return useInfiniteQuery({
    queryKey: [...newsKeys.filtered(filters), 'infinite'],
    queryFn: ({ pageParam = 0 }) =>
      newsService.getArticles({
        ...filters,
        offset: pageParam,
        limit: filters.limit || 6,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.hasMore) return undefined
      return allPages.length * (filters.limit || 6)
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export function useArticle(id: string) {
  return useQuery({
    queryKey: newsKeys.article(id),
    queryFn: () => newsService.getArticle(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Hooks for managing news (admin functions)
export function useCreateArticle() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreateArticleData) => newsService.createArticle(data),
    onSuccess: (newArticle) => {
      // Invalidate articles list
      queryClient.invalidateQueries({ queryKey: newsKeys.articles() })

      // Add the new article to cache
      queryClient.setQueryData(newsKeys.article(newArticle.id), newArticle)
    },
  })
}

export function useUpdateArticle() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UpdateArticleData) => newsService.updateArticle(data),
    onSuccess: (updatedArticle) => {
      // Update article in cache
      queryClient.setQueryData(
        newsKeys.article(updatedArticle.id),
        updatedArticle
      )

      // Invalidate articles list
      queryClient.invalidateQueries({ queryKey: newsKeys.articles() })
    },
  })
}

export function useDeleteArticle() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => newsService.deleteArticle(id),
    onSuccess: (_, deletedId) => {
      // Remove article from cache
      queryClient.removeQueries({ queryKey: newsKeys.article(deletedId) })

      // Invalidate articles list
      queryClient.invalidateQueries({ queryKey: newsKeys.articles() })
    },
  })
}

// Utility hooks
export function useArticleCategories() {
  return newsService.articleCategories
}

export function usePrefetchArticle(id: string) {
  const queryClient = useQueryClient()

  return () => {
    queryClient.prefetchQuery({
      queryKey: newsKeys.article(id),
      queryFn: () => newsService.getArticle(id),
      staleTime: 10 * 60 * 1000, // 10 minutes
    })
  }
}

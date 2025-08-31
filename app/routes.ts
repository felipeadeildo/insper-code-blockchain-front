import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes'

export default [
  layout('routes/_layout.tsx', [
    index('routes/home.tsx'),
    route('noticias', 'routes/news.tsx'),
    route('noticias/:id', 'routes/article.tsx'),
    route('login', 'routes/login.tsx'),
  ]),
] satisfies RouteConfig

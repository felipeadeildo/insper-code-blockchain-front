import { About } from '~/components/about'
import { Areas } from '~/components/areas'
import { Contact } from '~/components/contact'
import { Fund } from '~/components/fund'
import { Hero } from '~/components/hero'
import { Partners } from '~/components/partners'
import { Projects } from '~/components/projects'
import { Research } from '~/components/research'
import { Testimonials } from '~/components/testimonials'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Insper Blockchain - Conectando jovens talentos ao futuro' },
    {
      name: 'description',
      content:
        'A primeira organização estudantil da América Latina focada em blockchain. Conectamos jovens talentos às oportunidades de um mercado em criação.',
    },
    {
      name: 'keywords',
      content:
        'blockchain, insper, bitcoin, ethereum, criptomoedas, tecnologia, inovação, educação',
    },
  ]
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Areas />
      <Projects />
      <Testimonials />
      <Fund />
      <Research />
      <Partners />
      <Contact />
    </main>
  )
}

import { Calendar, ExternalLink, Filter } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Section, SectionHeader } from './section'

export function Research() {
  const [selectedYear, setSelectedYear] = useState<string>('all')

  const researches = [
    {
      title: 'Avalanche',
      year: '2022',
      description:
        'A Avalanche é uma plataforma pública e open-source que conta com uma blockchain layer 1 que suporta tanto smart contracts como redes personalizáveis.',
      category: 'Layer 1',
    },
    {
      title: 'Solana',
      year: '2022',
      description:
        'A criptomoeda Solana (Sol) foi lançada em março de 2020, com o objetivo de rivalizar com a Ethereum, focando em capacidade de escalabilidade.',
      category: 'Layer 1',
    },
    {
      title: 'Polygon',
      year: '2022',
      description:
        'Criada em 2017, a MATIC é a moeda base do ecossistema Polygon, originalmente chamada de Rede Matic',
      category: 'Layer 2',
    },
    {
      title: 'Polkadot',
      year: '2022',
      description:
        'Criada em 2016 por Gavin Wood, co-fundador do Ethereum, a Polkadot é uma plataforma que surgiu com o objetivo principal de ser uma rede que conecta diferentes blockchains',
      category: 'Interoperabilidade',
    },
    {
      title: 'Decentraland',
      year: '2022',
      description:
        'Decentraland é um software executado na rede Ethereum; projetado para incentivar uma rede global de usuários a operar um mundo virtual compartilhado',
      category: 'Metaverso',
    },
    {
      title: 'Uniswap',
      year: '2022',
      description:
        'Criado por Hayden Adams com alguns conselhos de Vitalik Buterin, o protocolo da Uniswap possui duas funções: criptomoeda e DEX para tokens ERC-20',
      category: 'DeFi',
    },
    {
      title: 'Cardano',
      year: '2019',
      description:
        "Cardano é uma plataforma de criptomoedas e contratos inteligentes lançada em setembro de 2017, que se autodenomina como a 'terceira geração' das criptomoedas",
      category: 'Layer 1',
    },
    {
      title: 'Chainlink',
      year: '2019',
      description:
        'Chainlink é uma rede descentralizada com o objetivo de conectar informações de fora da rede com a blockchain interna, a partir de um sistema de oracles',
      category: 'Oracle',
    },
    {
      title: 'Monero',
      year: '2019',
      description:
        'Monero é um Fork da Bytecoin, a primeira criptomoeda privada, com foco em privacidade e anonimato nas transações',
      category: 'Privacy',
    },
    {
      title: 'ZCash',
      year: '2019',
      description:
        'Zcash (ZEC) é uma criptomoeda descentralizada criada em 2016 pelo programador norte-americano Zooko Wilcox, mantida pela Fundação Zcash',
      category: 'Privacy',
    },
    {
      title: 'Litecoin',
      year: '2019',
      description:
        'O Litecoin foi criado por um ex-engenheiro da Google Charlie Lee, com o objetivo de aumentar a velocidade de transação e escalabilidade',
      category: 'Payment',
    },
    {
      title: 'Ripple',
      year: '2019',
      description:
        'Fundado em 2012 por Chris Larsen e Jed McCaleb, o Ripple é tanto uma criptomoeda (XRP), como um protocolo de pagamento distribuído (RippleNet)',
      category: 'Payment',
    },
  ]

  const years = ['all', '2022', '2019']
  const categories = [
    'Layer 1',
    'Layer 2',
    'DeFi',
    'Privacy',
    'Payment',
    'Oracle',
    'Metaverso',
    'Interoperabilidade',
  ]

  const filteredResearches =
    selectedYear === 'all'
      ? researches
      : researches.filter((r) => r.year === selectedYear)

  return (
    <Section id="research">
      <SectionHeader
        subtitle="Bibliografia & Research"
        title="Nossos estudos e análises"
        description="Exploramos as principais tecnologias blockchain através de análises detalhadas e estudos aprofundados sobre os projetos mais relevantes do mercado."
      />

      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {years.map((year) => (
          <Button
            key={year}
            variant={selectedYear === year ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedYear(year)}
            className="flex items-center gap-2"
          >
            <Filter className="w-3 h-3" />
            {year === 'all' ? 'Todos' : year}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResearches.map((research, index) => (
          <Card
            key={index}
            className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {research.category}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {research.year}
                </div>
              </div>
              <CardTitle className="text-xl">{research.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {research.description}
              </p>

              <Button
                variant="ghost"
                size="sm"
                className="w-full group-hover:bg-primary/10 transition-colors"
              >
                Ler Research
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" variant="outline">
          Ver biblioteca completa
        </Button>
      </div>
    </Section>
  )
}

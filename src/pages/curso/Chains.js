import Materiais from '../../components/curso-intro/Materiais';
import Videos from '../../components/curso-intro/Videos';

const materiais1 = [
  {
    nome: "Path for Network Adoption",
    link: "https://www.coindesk.com/state-of-lightning-whats-the-path-for-network-adoption-in-2019"
  }
]

const videos1 = [
  {
    link: "https://www.youtube.com/embed/rrr_zPmEiME"
  },
  {
    link: "https://www.youtube.com/embed/pBh4DcM-0pg"
  },
  {
    link: "https://www.youtube.com/embed/8zVzw912wPo"
  },
  {
    link: "https://www.youtube.com/embed/c4TjfaLgzj4"
  }
]

const videos2 = [
  {
    link: "https://www.youtube.com/embed/ctzGr58_jeI"
  },
  {
    link: "https://www.youtube.com/embed/XW0QZmtbjvs"
  },
]

const materiais3 = [
  {
    nome: "Binance Smart Chain: a blockchain que pode roubar o trono da Ethereum",
    link: "https://esportes.yahoo.com/noticias/binance-smart-chain-blockchain-que-141600097.html"
  }
]

const videos3 = [
  {
    link: "https://www.youtube.com/embed/iJDoc0kvXLc"
  },
  {
    link: "https://www.youtube.com/embed/pA2SZmqZeRc"
  },
]

const materiais4 = [
  {
    nome: "Chainlink",
    link: "https://chain.link/solutions"
  }
]

const videos4 = [
  {
    link: "https://www.youtube.com/embed/tIUHQ7sDoaU"
  },
  {
    link: "https://www.youtube.com/embed/lRba55HTK0Q"
  },
  {
    link: "https://www.youtube.com/embed/TPXTmVdlyoc"
  },
]

const videos5 = [
  {
    link: "https://www.youtube.com/embed/Do8rHvr65ZA"
  },
  {
    link: "https://www.youtube.com/embed/Elwv7Itr1qA"
  },
  {
    link: "https://www.youtube.com/embed/Z2JlxAz3Mvg"
  },
  {
    link: "https://www.youtube.com/embed/FKh8hjJNhWc"
  },
]

const videos6 = [
  {
    link: "https://www.youtube.com/embed/IijtdpAtOt0"
  },
  {
    link: "https://www.youtube.com/embed/f7F67ZP9fsE"
  },
]

const videos7 = [
  {
    link: "https://www.youtube.com/embed/JeJzwZgxF50"
  },
]

export default function Chains() {
  return (
    <>
      <Materiais materiais={materiais1} titulo="Bitcoin Lightning Network" />
      <Videos videos={videos1} titulo="Bitcoin Lightning Network: Vídeos" />

      <Videos videos={videos2} titulo="Ethereum 2: Vídeos" />

      <Materiais materiais={materiais3} titulo="Binance Smart Chain" />
      <Videos videos={videos3} titulo="Binance Smart Chain: Vídeos" />

      <Materiais materiais={materiais4} titulo="Chainlink" />
      <Videos videos={videos4} titulo="Chainlink: Vídeos" />

      <Videos videos={videos5} titulo="Cardano: Vídeos" />

      <Videos videos={videos6} titulo="Polygon: Vídeos" />

      <Videos videos={videos7} titulo="Outras soluções de escalabilidade e privacidade: Vídeos" />
    </>
  )
}
import Materiais from '../../components/curso-intro/Materiais';
import Videos from '../../components/curso-intro/Videos';

const materiais1 = [
  {
    nome: "What Is a Cryptoasset?",
    link: "https://coinmarketcap.com/alexandria/glossary/cryptoasset"
  },
  {
    nome: "O que é tokenização",
    link: "https://blockchainacademy.com.br/blog/blockchain/o-que-e-tokenizacao/"
  },
  {
    nome: "Institutionalization of cryptoassets - KPMG",
    link: "https://assets.kpmg/content/dam/kpmg/us/pdf/2018/11/institutionalization-cryptoassets.pdf"
  },
  {
    nome: "Six blockchain and cryptoasset predictions for 2020 - KPMG Pt.1",
    link: "https://info.kpmg.us/news-perspectives/technology-innovation/blockchain-and-cryptoasset-predictions-for-2020.html"
  },
  {
    nome: "Six blockchain and cryptoasset predictions for 2020 - KPMG Pt.2",
    link: "https://info.kpmg.us/content/dam/info/en/news-perspectives/pdf/2020/blockchain-2020-predictions-news-and-perspectives.pdf"
  }
]

const materiais2 = [
  {
    nome: "WTF is an ICO?",
    link: "https://techcrunch.com/2017/05/23/wtf-is-an-ico/"
  },
  {
    nome: "What Is an ICO? — Bitcoin Magazine",
    link: "https://bitcoinmagazine.com/guides/what-ico/"
  },
  {
    nome: "Initial Coin Offering vs Security Token Offering: Know the Difference",
    link: "https://medium.com/brandlitic/difference-between-initial-coin-offering-and-security-token-offering-sto-vs-ico1e8066cc97d0-1e8066cc97d0"
  },
  {
    nome: "Will Security Token Offerings Be The Future Of Raising Money?",
    link: "https://www.forbes.com/sites/jonathanchester/2019/02/19/will-security-token-offerings-be-the-future-of-raising-money/amp/"
  },
  {
    nome: "Tokenização empresarial",
    link: "https://cointelegraph.com.br/news/enterprise-focused-ethereum-standards-consortium-eea-to-form-token-task-force"
  },
  {
    nome: "Analyzing Token Sale Models",
    link: "https://vitalik.ca/general/2017/06/09/sales.html"
  },
  {
    nome: "JP Morgan cryptocurrency",
    link: "https://www.cnbc.com/2019/02/13/jp-morgan-is-rolling-out-the-first-us-bank-backed-cryptocurrency-to-transform-payments--.html"
  },
  {
    nome: "Mining Report",
    link: "https://image.tokeninsight.com/levelPdf/TI-2020Q2_Mining_Industry_Report.pdf"
  },
  {
    nome: "JP Morgan’s blockchain platform Quorum used to tokenise gold",
    link: "https://coinrivet.com/jp-morgan-uses-blockchain-platform-quorum-to-tokenise-gold/"
  }
]

const materiais3 = [
  {
    nome: "Decentralized finance (DeFi) | Ethereum ORG",
    link: "https://ethereum.org/en/defi/"
  }
]

const videos3 = [
  {
    link: "https://www.youtube.com/embed/H-O3r2YMWJ4"
  },
  {
    link: "https://www.youtube.com/embed/ClnnLI1SClA"
  },
  {
    link: "https://www.youtube.com/embed/cizLhxSKrAc"
  },
  {
    link: "https://www.youtube.com/embed/8XJ1MSTEuU0"
  },
  {
    link: "https://www.youtube.com/embed/aTp9er6S73M"
  },
  {
    link: "https://www.youtube.com/embed/mCJUhnXQ76s"
  },
  {
    link: "https://www.youtube.com/embed/qFBYB4W2tqU"
  },
  {
    link: "https://www.youtube.com/embed/aTp9er6S73M"
  }
]

const materiais4 = [
  {
    nome: "Non-fungible tokens (NFT) | Ethereum ORG",
    link: "https://ethereum.org/en/nft/"
  }
]

const videos4 = [
  {
    link: "https://www.youtube.com/embed/FkUn86bH34M"
  },
  {
    link: "https://www.youtube.com/embed/Xdkkux6OxfM"
  },
  {
    link: "https://www.youtube.com/embed/WOxYlBTRncY"
  },
]

const materiais5 = [
  {
    nome: "What is a DAO?",
    link: "https://www.investopedia.com/tech/what-dao/"
  },
  {
    nome: "The Biggest Crowdfunding Project Ever Was Supposed to Create Manager-free Companies. But It's a Mess",
    link: "https://www.wired.com/2016/06/biggest-crowdfunding-project-ever-dao-mess/"
  },
  {
    nome: "The DAO, The Hack, The Soft Fork and The Hard Fork",
    link: "https://www.cryptocompare.com/coins/guides/the-dao-the-hack-the-soft-fork-and-the-hard-fork/"
  }
]

const materiais6 = [
  {
    nome: "Why Bitcoin and Crypto Have No Future",
    link: "https://medium.com/@thinkoutsidetheblox/why-bitcoin-and-crypto-have-no-future-4f95980bb774"
  },
  {
    nome: "DeFi - Decentralized Finance",
    link: "https://www.visualcapitalist.com/decentralized-finance/"
  }
]


export default function CryptoAssets() {
  return (
    <>
      <Materiais materiais={materiais1} titulo="Introdução" />

      <Materiais materiais={materiais2} titulo="Initial Coin Offering (ICO) e Security Token Offering (STO)" />

      <Materiais materiais={materiais3} titulo="Decentralized Finance (DeFi)" />
      <Videos videos={videos3} titulo="Decentralized Finance (DeFi): Vídeos" />

      <Materiais materiais={materiais4} titulo="Non-fungible Token (NFT)" />
      <Videos videos={videos4} titulo="Non-fungible Token (NFT): Vídeos" />

      <Materiais materiais={materiais5} titulo="Decentralized Autonomous Organization (DAO)" />

      <Materiais materiais={materiais6} titulo="Para Refletir..." />
    </>
  )
}
import Materiais from '../../components/curso-intro/Materiais';
import Videos from '../../components/curso-intro/Videos';

const materiais = [
  {
    nome: "Carta: Bitcoin by Satoshi Nakamoto",
    link: "http://p2pfoundation.ning.com/forum/topics/bitcoin-open-source"
  },
  {
    nome: "Documentário: Banking on Bitcoin",
    link: "https://vimeo.com/226777744"
  }
]

const videos = [
  {
    link: "https://www.youtube.com/embed/DyAufA2lWn0"
  },
  {
    link: "https://www.youtube.com/embed/bBC-nXj3Ng4"
  }
]

export default function Introducao() {
  return (
    <>
      <Videos videos={videos} titulo="Introdução" />
      <Materiais materiais={materiais} titulo="Essenciais" />
    </>
  )
}
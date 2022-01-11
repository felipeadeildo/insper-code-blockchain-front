import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';

import Ambev from '../assets/projetos/ambev.jpeg'
import Fundo from '../assets/projetos/fundo.png'
import Gaugecash from '../assets/projetos/gaugecash.jpg'
import Mineracao from '../assets/projetos/mineracao.jpg'
import NFTs from '../assets/projetos/nfts.jpg'
import Precatorios from '../assets/projetos/precatorios.jpeg'

const projetos = [
  {
    nome: "Business Case Ambev",
    descricao: "Foi avaliada a aplicação de blockchain na operação da Ambev para tornar o gerenciamento da sua cadeia logística mais eficiente e transparente, visando diminuir custos e ao mesmo tempo criar valor para o consumidor.",
    imagem: Ambev
  },
  {
    nome: "Tokenização de Precatórios",
    descricao: "Foi desenvolvida uma solução de tokenização de recebíveis judiciais no padrão ERC-20, junto ao Grupo GCB e à PeerBR.",
    imagem: Precatorios
  },
  {
    nome: "ICO Presale da GAUGECASH",
    descricao: "Durante este projeto foi desenvolvido, em parceria com uma grande empresa do mercado, um Initial Coin Offering para a GAUGECASH, o primeiro sistema monetário descentralizado. ",
    imagem: Gaugecash
  },
  {
    nome: "Fundo Simulado",
    descricao: "Como um norte para os estudos produzidos, o Fundo Simulado surgiu para testar e refinar a eficácia das análises desenvolvidas pelos membros, colocando na prática toda a pesquisa e bagagem teórica adquiridas.",
    imagem: Fundo
  },
  {
    nome: "Registro dos membros em NFTs",
    descricao: "Foi desenvolvido um sistema de registro a fim de guardar as informações de nossos membros de uma maneira segura e eterna. O sistema usa o IPFS e a rede Polygon, garantindo imutabilidade e segurança.",
    imagem: NFTs
  },
  {
    nome: "Valuation Mineração",
    descricao: "Em parceria com uma grande empresa do mercado, foi realizado um estudo completo que estipulou diversos fatores do setor de mineração de criptoativos. Esses números foram, então, analisados para averiguar um possível investimento.",
    imagem: Mineracao
  },
]

const Card1 = ({ data }) => (
  <Container maxW={'7xl'} p="12">
    <Box
      display="flex"
      flexDirection={{ base: 'column', sm: 'row' }}
      justifyContent="space-between">
      <Box
        display="flex"
        flex="1"
        marginRight="3"
        position="relative"
        alignItems="center">
        <Box
          width={{ base: '100%', sm: '85%' }}
          zIndex="2"
          marginLeft={{ base: '0', sm: '5%' }}
          marginTop="5%">
          <Image
            borderRadius="lg"
            src={data.imagem}
            alt="some good alt text"
            objectFit="contain"
          />
        </Box>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              'radial(orange.600 1px, transparent 1px)',
              'radial(orange.300 1px, transparent 1px)'
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: '3', sm: '0' }}>
        <Heading marginTop="1">
          {data.nome}
        </Heading>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg">
          {data.descricao}
        </Text>
      </Box>
    </Box>
  </Container>
)

const Card2 = ({ data }) => (
  <Container maxW={'7xl'} p="12">
    <Box
      display="flex"
      flexDirection={{ base: 'column', sm: 'row' }}
      justifyContent="space-between">
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: '3', sm: '0' }}>
        <Heading marginTop="1">
          {data.nome}
        </Heading>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg">
          {data.descricao}
        </Text>
      </Box>
      <Box
        display="flex"
        flex="1"
        marginRight="3"
        position="relative"
        alignItems="center">
        <Box
          width={{ base: '100%', sm: '85%' }}
          zIndex="2"
          marginLeft={{ base: '0', sm: '5%' }}
          marginTop="5%">
          <Image
            borderRadius="lg"
            src={data.imagem}
            alt="some good alt text"
            objectFit="contain"
          />
        </Box>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              'radial(orange.600 1px, transparent 1px)',
              'radial(orange.300 1px, transparent 1px)'
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </Box>
    </Box>
  </Container>
)

function Projetos() {
  return (
    <>
      <Box as="section">
        <Box
          maxW="2xl"
          mx="auto"
          px={{ base: '6', lg: '8' }}
          py={{ base: '16', sm: '20' }}
          textAlign="center"
        >
          <Heading size="3xl" fontWeight="extrabold" letterSpacing="tight">
            Projetos
          </Heading>
          <Text mt="4" fontSize="lg">
            Nesta seção, você vai poder conhecer alguns dos nossos projetos públicos
          </Text>
        </Box>
      </Box>
      {projetos.map((value, index) => {
        if (index % 2 === 0) {
          return <Card1 data={value} key={index} />
        }
        return <Card2 data={value} key={index} />
      })}
    </>
  );
}

export default Projetos;

import {
  Box,
  Text,
  Container,
  Heading,
  Stat,
  Flex,
  StatLabel,
  StatNumber,
  useColorModeValue,
  chakra,
  SimpleGrid,
  Divider,
  Wrap,
  WrapItem,
  Link,
  Image,
  HStack,
  Tag,
} from '@chakra-ui/react';
import { FaBitcoin } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { AiOutlineStock } from 'react-icons/ai';

import { ResponsiveLine } from '@nivo/line'
import axios from 'axios';
import { useEffect, useState } from 'react';

const researches = [
  {
    nome: "Cardano",
    tags: ["Research", "Criptomoedas"],
    texto: "Cardano é uma plataforma de criptomoedas e contratos inteligentes lançada em setembro de 2017, que se autodenomina como a “terceira geração” das criptomoedas...",
    link: "https://drive.google.com/file/d/1bp_9Iik_oa23-CZMuMbjjAWWiBxlwhkj/view?usp=sharing",
    image: "https://media.moneytimes.com.br/uploads/2020/05/cardano-ada-blockchain.jpg"
  },
  {
    nome: "Chainlink",
    tags: ["Research", "Criptomoedas"],
    texto: "Chainlink é uma rede descentralizada com o objetivo de conectar informações de fora da rede com a blockchain interna, a partir de um sistema oracles...",
    link: "https://drive.google.com/file/d/180Jjlbytnzzf6CuFurfjVZE8o7dvq-5C/view?usp=sharing",
    image: "https://suporte.mercadobitcoin.com.br/hc/article_attachments/360079203632/chainlink-combo-logo.png"
  },
  {
    nome: "Monero",
    tags: ["Research", "Criptomoedas"],
    texto: "Monero é um Fork da Bytecoin, a primeira criptomoeda privada, devido a algumas críticas feitas à moeda original, como a de que em seu início 80% de todas suas moedas já haviam sido mineradas. 7 desenvolvedores forkaram para monero (moeda em esperanto).",
    link: "https://drive.google.com/file/d/1e3VWdperg6dzuhWvsTBBNQjl6WJhnLSj/view?usp=sharing",
    image: "https://livecoins.com.br/wp-content/uploads/2018/03/monero-logo.png"
  },
  {
    nome: "ZCash",
    tags: ["Research", "Criptomoedas"],
    texto: "Zcash (ZEC) é uma criptomoeda descentralizada criada em 2016 pelo programador norte-americano Zooko Wilcox, e mantida pela instituição sem fins lucrativos chamada Fundação Zcash.",
    link: "https://drive.google.com/file/d/1cFeVojTXAN10x64SInuLzBRBwmBDh7dh/view?usp=sharing",
    image: "https://cdn.litemarkets.com/cache/uploads/blog_post/blog_posts/Zcash-Should-You-Invest-in-ZEC/zcash-logo-horizontal-fullcolor-twitter.png?q=75&s=12b927338ed87e270dfae59cd1f02615"
  },
  {
    nome: "Litecoin",
    tags: ["Research", "Criptomoedas"],
    texto: "O Litecoin foi criado por um ex-engenheiro da Google Charlie Lee, com o objetivo de aumentar a velocidade de transação e escalabilidade da moeda",
    link: "https://drive.google.com/file/d/1lZ78r0MY6osoh6Mevr1BqGG6PL56wMBA/view?usp=sharing",
    image: "https://moneyinvest.com.br/wp-content/uploads/2021/05/litcoin.jpeg"
  },
  {
    nome: "NEO",
    tags: ["Research", "Criptomoedas"],
    texto: "O projeto da NEO começou em fevereiro de 2014, quando o blockchain Antshares, foi criado sendo o primeiro desenvolvido na China.",
    link: "https://drive.google.com/file/d/1PDIhivRzXI4Kb-QtDoQ9Hd14CZhP8mTN/view?usp=sharing",
    image: "https://p7z2w8n8.rocketcdn.me/wp-content/uploads/2021/05/neo-o-que-e-como-funciona-vantagens-riscos-e-como-comprar.jpg"
  },
  {
    nome: "Tezos",
    tags: ["Research", "Criptomoedas"],
    texto: "Tezos é uma criptomoeda baseada em blockchain. Também tem sua própria plataforma de contratos inteligentes (smart contracts) que permite a criação de aplicativos descentralizados (dApps), sendo uma de suas propostas, ser uma plataforma de Security Token Offering (STO). Desse modo, o XTZ é um utility token que permite o acesso a rede blockchain da Tezos.",
    link: "https://drive.google.com/file/d/1gjvQy92JAsCwSYP8Tgpz28wo07h2mc-E/view?usp=sharing",
    image: "https://media.moneytimes.com.br/uploads/2020/11/tezos.jpg"
  },
  {
    nome: "Dogecoin",
    tags: ["Research", "Criptomoedas"],
    texto: "O Dogecoin (DOGE) é uma criptomoeda sem fins lucrativos fundada em dezembro de 2013 pelo australiano Jackson Palmer. O inusitado desta moeda é o fato de seu logotipo ser inspirado do meme “Doge”, a foto de um cachorro da raça Shiba Inu que viralizou na época.",
    link: "https://drive.google.com/file/d/1KtwSyO8rE-vqVOJVfqKC3o3Y1MIGNbEL/view?usp=sharing",
    image: "https://s2.glbimg.com/Yu_YuutgYfolZ-h9rW52gH45iuU=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/L/F/tLAOX9QCm7171sqJZFCA/075-porzycki-dogecoin210622-npbea-b.jpg"
  },
  {
    nome: "Ripple",
    tags: ["Research", "Criptomoedas"],
    texto: "Fundado em 2012 por Chris Larsen e Jed McCaleb, o Ripple é tanto uma criptomoeda (XRP), como um protocolo de pagamento distribuído (RippleNet) que busca permitir que instituições financeiras mandem dinheiro de forma segura, instantânea e super barata para qualquer lugar.",
    link: "https://drive.google.com/file/d/1aYR1DcfPprgULF_1U1XScJMrR0NUATL2/view?usp=sharing",
    image: "https://mms.businesswire.com/media/20190611005917/pt/726896/23/Ripple_Logo.jpg"
  },
  {
    nome: "Binance Coin",
    tags: ["Research", "Criptomoedas"],
    texto: "A Binance Coin (BNB) é uma altcoin criada por uma das maiores exchanges de criptoativos, a Binance.",
    link: "https://drive.google.com/file/d/161w-K0lMqIqkxjG7SyFOu3Cf9gatY8Fw/view?usp=sharing",
    image: "https://public.bnbstatic.com/image/cms/blog/20210412/3f999b0c-de99-495d-b9bc-634eb7ef4c47.png"
  },
  {
    nome: "Dash",
    tags: ["Research", "Criptomoedas"],
    texto: "A Dash foi criada em 2014, com o intuito de solucionar alguns problemas do bitcoin, como a velocidade e privacidade das transações.",
    link: "https://drive.google.com/file/d/1jJEvr_WnAMzcFYbtE0j5DMwMBCuoYY7f/view?usp=sharing",
    image: "http://media.dash.org/wp-content/uploads/dash-digital-cash.png"
  },
  {
    nome: "IOTA",
    tags: ["Research", "Criptomoedas"],
    texto: "IOTA é uma das criptomoedas da chamada “terceira geração de blockchains”, que mesmo não utilizando-se de uma blockchain em si, visa resolver os problemas de escalabilidade e rapidez de uma rede blockchain convencional, para assim dar chão para as novas tecnologias e novas demandas advindas da chamada “Internet Of Things”.",
    link: "https://drive.google.com/file/d/1IsJOcko-whb6qddaU3k4r4XDJjdb7bPS/view?usp=sharing",
    image: "https://img.ibxk.com.br/2017/12/12/iota-12163208489279.png"
  },
]

const format = v => `${v}%`

const MyResponsiveLine = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    // xScale={{ type: 'point' }}
    xScale={{
      type: 'time',
      format: '%Y-%m-%d',
    }}
    xFormat="time:%Y-%m-%d"
    // yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
    yFormat=" >-.2f"
    tooltipFormat={format}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      format: '%b %d',
      // tickRotation: -90,
      legend: 'Time (days)',
      legendOffset: 40,
      legendPosition: 'middle',
    }}
    axisLeft={{
      format: format,
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Cumulative Return (%)',
      legendOffset: -50,
      legendPosition: 'middle'
    }}
    enableGridX={false}
    enableSlices={'x'}
    colors={{ scheme: 'pastel1' }}
    lineWidth={4}
    enablePoints={false}
    pointSize={9}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    enableArea={true}
    areaOpacity={0.15}
    useMesh={true}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
)

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

function Fundo() {

  const [data, setData] = useState([]);
  const [accumulatedReturn, setAccumulatedReturn] = useState("")
  const [annualizedReturn, setAnnualizedReturn] = useState("")
  const [numberOfAssets, setNumberOfAssets] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://bi-crypto-fund.herokuapp.com/")
      setData(response.data["fund_info"]["chart_data"])
      setAccumulatedReturn(response.data["fund_info"]["cumulative_return"])
      setAnnualizedReturn(response.data["fund_info"]["annualized_return"])
      setNumberOfAssets(response.data["fund_info"]["number_of_assets"])
    }

    fetchData()
  }, [])

  return (
    <>
      <Box as="section">
        <Box
          maxW="3xl"
          mx="auto"
          px={{ base: '6', lg: '8' }}
          py={{ base: '16', sm: '20' }}
          textAlign="center"
        >
          <Heading size="3xl" fontWeight="extrabold" letterSpacing="tight">
            Fundo Blockchain Insper
          </Heading>
          <Text mt="4" fontSize="lg">
            Nossa tese de investimento consiste em analisar
            os whitepapers de diversas criptomoedas, a partir
            disso avaliando sua aplicabilidade, escalabilidade e
            potencial de crescimento futuro. Dessa forma, realizamos a
            alocação de ativos do nosso fundo simulado.
          </Text>
        </Box>
      </Box>
      <Box h="500px" m={10}>
        <MyResponsiveLine data={data} />
      </Box>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} marginBottom={20}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Indicadores
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Retorno acumulado'}
            stat={accumulatedReturn}
            icon={<FaBitcoin size={'3em'} />}
          />
          <StatsCard
            title={'Retorno anual médio'}
            stat={annualizedReturn}
            icon={<GiMoneyStack size={'3em'} />}
          />
          <StatsCard
            title={'Número de ativos'}
            stat={numberOfAssets}
            icon={<AiOutlineStock size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
      <Container maxW={'7xl'} p="12">
        <Heading as="h2">
          Researches
        </Heading>
        <Divider marginTop="5" />
        <Wrap spacing="30px" marginTop="5">
          {researches.map((value, index) => (
            <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
              <Box w="100%">
                <Box borderRadius="lg" overflow="hidden">
                  <Link textDecoration="none" _hover={{ textDecoration: 'none' }} href={value.link} isExternal>
                    <Image
                      transform="scale(1.0)"
                      src={value.image}
                      alt="some text"
                      objectFit="contain"
                      width="100%"
                      transition="0.3s ease-in-out"
                      _hover={{
                        transform: 'scale(1.05)',
                      }}
                    />
                  </Link>
                </Box>
                <BlogTags tags={value.tags} marginTop="3" />
                <Heading fontSize="xl" marginTop="2">
                  <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    {value.nome}
                  </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                  {value.texto}
                </Text>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </>
  );
}

export default Fundo;


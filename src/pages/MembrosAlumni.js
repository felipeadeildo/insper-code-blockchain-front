import { useEffect, useState } from 'react';
import {
  Container,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
  CircularProgress,
  Center,
  chakra
} from '@chakra-ui/react';
import { useMoralis } from "react-moralis";

import Card from '../components/members/Card'

const times = [
  {
    ano: "2021.2",
    chain: "polygon",
    address: "0x7efFf2fb972EB77f61922af70820053566F483C5"
  },
]


export default function MembrosAlumni() {

  const [presidentes, setPresidentes] = useState([]);
  const [diretores, setDiretores] = useState([]);
  const [business, setBusiness] = useState([]);
  const [finance, setFinance] = useState([]);
  const [tech, setTech] = useState([]);

  const { Moralis } = useMoralis();

  useEffect(() => {
    const fetchData = async () => {
      var data = []

      for await (let value of times) {
        let options = { chain: value.chain, address: value.address };
        let NFTs = await Moralis.Web3API.token.getAllTokenIds(options);

        data.push(...NFTs.result)
      }

      const cargos = data.map(value => {
        value.metadata = JSON.parse(value.metadata)
        return value
      })

      const membrosTech = []
      const membrosBusiness = []
      const membrosFinance = []
      const membrosDiretores = []
      const membrosPresidentes = []

      cargos.forEach(value => {
        if (value.metadata == null) {
          return
        }
        if (["Presidente"].includes(value.metadata.attributes[0].value)) {
          membrosPresidentes.push(value)
        }
        if (["Diretor de Business", "Diretor de Finance", "Diretor de Tech", "Diretor de Conteúdos"].includes(value.metadata.attributes[0].value)) {
          membrosDiretores.push(value);
        }
        if (["Analista de Finance", "Analista de Business/Finance", "Analista de Finance/Tech", "Analista de Business/Finance/Tech"].includes(value.metadata.attributes[0].value)) {
          membrosFinance.push(value);
        }
        if (["Analista de Business", "Analista de Business/Finance", "Analista de Business/Tech", "Analista de Business/Finance/Tech"].includes(value.metadata.attributes[0].value)) {
          membrosBusiness.push(value);
        }
        if (["Analista de Tech", "Analista de Business/Tech", "Analista de Finance/Tech", "Analista de Business/Finance/Tech"].includes(value.metadata.attributes[0].value)) {
          membrosTech.push(value);
        }
      })

      setTech(membrosTech)
      setBusiness(membrosBusiness)
      setFinance(membrosFinance)
      setDiretores(membrosDiretores)
      setPresidentes(membrosPresidentes)
    }
    fetchData()
  }, [Moralis.Web3API.token])

  return (
    <>
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 20 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Conheça nossos membros{' '}
            <Text as={'span'} color={'orange.400'}>
              Alumni
            </Text>
          </Heading>
        </Stack>
      </Container>
      {diretores.length === 0 ?
        <Center><CircularProgress isIndeterminate color='orange.400' /> </Center>
        :
        <>
          <chakra.h1
            textAlign={'center'}
            fontSize={'4xl'}
            fontWeight={'bold'}>
            Ex-Presidentes
          </chakra.h1>
          <Wrap spacing="30px" justify="center">
            {presidentes.map((card, index) => (
              <WrapItem key={index}>
                <Card cardInfo={card} />
              </WrapItem>
            ))}
          </Wrap>
          <chakra.h1
            textAlign={'center'}
            fontSize={'4xl'}
            fontWeight={'bold'}>
            Ex-Diretores
          </chakra.h1>
          <Wrap spacing="30px" justify="center">
            {diretores.map((card, index) => (
              <WrapItem key={index}>
                <Card cardInfo={card} />
              </WrapItem>
            ))}
          </Wrap>
          <chakra.h1
            textAlign={'center'}
            fontSize={'4xl'}
            fontWeight={'bold'}>
            Ex-Membros de Business
          </chakra.h1>
          <Wrap spacing="30px" justify="center">
            {business.map((card, index) => (
              <WrapItem key={index}>
                <Card cardInfo={card} />
              </WrapItem>
            ))}
          </Wrap>
          <chakra.h1
            textAlign={'center'}
            fontSize={'4xl'}
            fontWeight={'bold'}>
            Ex-Membros de Finance
          </chakra.h1>
          <Wrap spacing="30px" justify="center">
            {finance.map((card, index) => (
              <WrapItem key={index}>
                <Card cardInfo={card} />
              </WrapItem>
            ))}
          </Wrap>
          <chakra.h1
            textAlign={'center'}
            fontSize={'4xl'}
            fontWeight={'bold'}>
            Ex-Membros de Tech
          </chakra.h1>
          <Wrap spacing="30px" justify="center">
            {tech.map((card, index) => (
              <WrapItem key={index}>
                <Card cardInfo={card} />
              </WrapItem>
            ))}
          </Wrap>
        </>
      }
    </>
  );
}

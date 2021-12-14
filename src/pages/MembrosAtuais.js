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

export default function MembrosAtuais() {

  const [diretores, setDiretores] = useState([]);
  const [business, setBusiness] = useState([]);
  const [finance, setFinance] = useState([]);
  const [tech, setTech] = useState([]);

  const { Moralis } = useMoralis();

  useEffect(() => {
    const fetchData = async () => {
      const options = { chain: "polygon", address: "0x7efFf2fb972EB77f61922af70820053566F483C5" };
      const NFTs = await Moralis.Web3API.token.getAllTokenIds(options);

      const data = NFTs.result
      data.splice(8, 1)
      const cargos = data.map(value => {
        value.metadata = JSON.parse(value.metadata)
        return value

      })
      const membrosTech = []
      const membrosBusiness = []
      const membrosFinance = []
      const membrosDiretores = []

      cargos.forEach(value => {
        if (["Presidente", "Diretor de Business", "Diretor de Finance", "Diretor de Tech", "Diretor de Conteúdos"].includes(value.metadata.attributes[0].value)) {
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
            Conheça nosso time{' '}
            <Text as={'span'} color={'orange.400'}>
              2021.2
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
            Presidente e Diretores
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
            Business
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
            Finance
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
            Tech
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

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
  Box,
} from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

import Card from '../components/members/Card'


// const cards = [
//   {
//     id: 1,
//     name: "Fernando França",
//     image: Insper,
//     link: "https://www.insper.edu.br/",
//   },
// ]

export default function MembrosAtuais() {

  const [membros, setMembros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://rinkeby-api.opensea.io/api/v1/assets?asset_contract_addresses=0x5c4cbc7696e5b6d95c73a1d95b9193255845a3df")
      setMembros(response.data.assets)
    }
    fetchData()
  }, [])

  return (
    <>
      <Box textAlign="center" py={10} px={6}>
        <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Esta página está em manutenção
        </Heading>
        <Text color={'gray.500'}>
          Caso queira nos conhecer, envie um e-mail na página de contato
        </Text>
      </Box>
      {/* <Container maxW={'5xl'}>
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
      <Wrap spacing="30px" justify="center">
        {membros.map((card) => (
          <WrapItem key={card["token_id"]}>
            <Card cardInfo={card} />
          </WrapItem>
        ))}
      </Wrap> */}
    </>
  );
}

import {
  Box,
  Heading,
  Stack,
  Container,
  Wrap,
  useColorModeValue,
} from '@chakra-ui/react';
import Fernando from '../../assets/processo-seletivo/Fernando.jpg'
import Jose from '../../assets/processo-seletivo/José.jpg'
import Paulo from '../../assets/processo-seletivo/Paulo.jpg'
import Francisco from '../../assets/processo-seletivo/Francisco.jpg'
import Card from '../processo-seletivo/Card';

const gestao = [
  {
    nome: "Fernando França",
    cargo: "Presidente",
    image: Fernando,
    linkedin: "https://www.linkedin.com/in/fernandopmgfranca/",
  },
  {
    nome: "José Rafael",
    cargo: "Diretor de Business",
    image: Jose,
    linkedin: "https://www.linkedin.com/in/joserafaelfernandes/",
  },
  {
    nome: "Paulo Chade",
    cargo: "Diretor de Tech",
    image: Paulo,
    linkedin: "https://www.linkedin.com/in/paulo-chade/",
  },
  {
    nome: "Francisco Costa",
    cargo: "Diretor de Conteúdos",
    image: Francisco,
    linkedin: "https://www.linkedin.com/in/francisco-costa-6a119421b/",
  }
]

export default function Team() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Conheça a gestão 2022.1</Heading>
        </Stack>
        <Wrap spacing="30px" justify="center">
          {gestao.map((value, index) => (
            <Card key={index} info={value} />
          ))}
        </Wrap>
      </Container>
    </Box >
  );
}
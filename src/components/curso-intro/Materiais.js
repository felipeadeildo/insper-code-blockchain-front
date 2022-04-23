import {
  Container,
  SimpleGrid,
  Heading,
  Stack,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
  Link
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Materiais({ materiais, titulo }) {
  return (
    <Container maxW={'5xl'} py={5}>
      <SimpleGrid spacing={10}>
        <Stack spacing={4}>
          <Heading>
            {titulo}
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Tema</Th>
                <Th>Conteúdos</Th>
              </Tr>
            </Thead>
            <Tbody>
              {materiais.map(value => (
                <Tr>
                  <Td>{value.nome}</Td>
                  <Td>
                    <Link href={value.link} isExternal>
                      Acesse <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}
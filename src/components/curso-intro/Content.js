import {
  Heading,
  Container,
  SimpleGrid,
  Stack,
  Table,
  Thead,
  Tbody,
  Link,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react"

import { ExternalLinkIcon } from '@chakra-ui/icons'

function Content() {
  return (
    <>
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid spacing={10}>
          <Stack spacing={4}>
            <Heading>
              Temas e Conteúdos
            </Heading>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Tema</Th>
                  <Th>Conteúdos</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Introdução</Td>
                  <Td>
                    <Link href="#/learn/curso-intro/introducao">
                      Acesse <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Bitcoin</Td>
                  <Td>
                    <Link href="#/learn/curso-intro/bitcoin">
                      Acesse <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Blockchain</Td>
                  <Td>
                    <Link href="#/learn/curso-intro/blockchain">
                      Acesse <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>CryptoAssets</Td>
                  <Td>
                    <Link href="#/learn/curso-intro/crypto-assets">
                      Acesse <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Chains</Td>
                  <Td>
                    <Link href="#/learn/curso-intro/chains">
                      Acesse <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Tecnologia</Td>
                  <Td>
                    <Link href="#/learn/curso-intro/tecnologia">
                      Acesse <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Content;

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
              Conteúdos e Temas
            </Heading>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Tema</Th>
                  <Th>Slides</Th>
                  <Th>Gravação</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Introdução à Blockchain e Bitcoin</Td>
                  <Td>
                    <Link href="https://docs.google.com/presentation/d/15ty2sia3BXX-_TJS_v0kolaKoB3cwQeKBHGlQLoOZAg/edit?usp=sharing" isExternal>
                      PPT <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                  <Td>
                    <Link href="https://youtu.be/8I3FBa8eF-g" isExternal>
                      Vídeo <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Funcionamento da Tecnologia</Td>
                  <Td>
                    <Link href="https://drive.google.com/file/d/1m-Zb37BAHtDidX_2oxEVi0Xwq5XrZ811/view?usp=sharing" isExternal>
                      PPT <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                  <Td>
                    <Link href="https://youtu.be/MVPvrGbBKF8" isExternal>
                      Vídeo <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Aplicações de Blockchain e Casos Reais</Td>
                  <Td>
                    <Link href="https://docs.google.com/presentation/d/1eY3C_U9qrAVrPxK1u-M8m0B-1HNSB50B5q7eZ8HSF3E/edit?usp=sharing" isExternal>
                      PPT <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                  <Td>
                    <Link href="https://youtu.be/mcP81Qh0ghs" isExternal>
                      Vídeo <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Desafios e Escalabilidade da Rede</Td>
                  <Td>
                    <Link href="https://drive.google.com/file/d/1AxHz1pyrZrmMPbinVJ9Eej5FxV3ljzPF/view?usp=sharing" isExternal>
                      PPT <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                  <Td>
                    <Link href="https://youtu.be/IfWBFK20eps" isExternal>
                      Vídeo <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>IPO VS ICO e STO - Economia Descentralizada?</Td>
                  <Td>
                    <Link href="https://drive.google.com/file/d/1D2vYW_jHH8czSWTHhIc84d7FWhw0mHvT/view?usp=sharing" isExternal>
                      PPT <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                  <Td>
                    <Link href="https://youtu.be/-ZjzhHx1HQo" isExternal>
                      Vídeo <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Futuro e Perspectivas do Mercado</Td>
                  <Td>
                    <Link href="https://docs.google.com/presentation/d/1RM0qyxKzqqNSPR-gdAVtwcDQEpPhzehoSiciZoIk9mE/edit?usp=sharing" isExternal>
                      PPT <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                  <Td>
                    <Link href="https://youtu.be/COFXx5l9FjM" isExternal>
                      Vídeo <ExternalLinkIcon mx="2px" />
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

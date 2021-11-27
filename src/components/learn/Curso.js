import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Link,
  Stack,
} from '@chakra-ui/react';

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 30 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Aprenda blockchain <br />
            <Text as={'span'} color={'#f68b23'}>
              agora
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            A Blockchain Insper tem o prazer de apresentar o Curso de Introdução à Blockchain!
            Na linha de contribuir para o acesso à informação e o fomento do estudo das novas tecnologias,
            o curso é realizado no formato online, e é aberto para qualquer pessoa.
            Os encontros são ministrados pelos membros da entidade, abordando desde contexto histórico até futuras
            perspectivas da tecnologia.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Link href="#/learn/curso-intro">
              <Button
                colorScheme={'green'}
                bg={'#f68b23'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: '#f68b70',
                }}>
                Vamos começar!
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
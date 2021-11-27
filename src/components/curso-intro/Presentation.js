import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
} from 'react-icons/io5';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid spacing={10}>
        <Heading>Curso de Introdução à Blockchain</Heading>
        <Stack spacing={4}>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Box>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Sobre'}
              />
              <Text color={'gray.500'} fontSize={'m'}>
                A Blockchain Insper tem o prazer de apresentar o Curso de Introdução à Blockchain!
                Na linha de contribuir para o acesso à informação e o fomento do estudo das novas tecnologias,
                o curso é realizado no formato online, e é aberto para toda qualquer pessoa.
                Os encontros são ministrados pelos membros da entidade, abordando desde contexto histórico até futuras
                perspectivas da tecnologia.Teremos também um website com uma vasta quantidade de conhecimento acerca
                de blockchain para consulta ao longo do curso.
              </Text>
            </Box>
            <Box>
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Objetivos'}
              />
              <Text color={'gray.500'} fontSize={'m'}>
                Muitas pessoas acham difícil entender blockchain e criptomoedas, é um produto da coordenação entre muitos
                componentes complexos. Isso torna difícil ver a imagem completa até que todos os componentes individuais sejam
                totalmente compreendidos. Além disso, como o campo é técnico e relativamente novo, a discussão relacionada à
                tecnologia está cheia de jargões. Portanto, é fácil se perder tentando seguir quase qualquer conversa do ecossistema
                se você não tiver um background mínimo sobre o tema. O objetivo deste curso é superar essa íngreme curva de
                aprendizado da tecnologia blockchain. Ao final dele, você entenderá como uma blockchain e criptomoedas funcionam,
                além das ideias, tecnologias e organizações que surgem a partir delas.
              </Text>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
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
              <Text color={'gray.500'} fontSize={'m'} marginTop={5}>
                O maior experimento financeiro e sociológico do século XXI, o Bitcoin veio solucionar diversos problemas antes sem solução. O Curso Fundamental vai te dar base para entender o que está por trás da construção do protocolo e o que motivou Satoshi Nakamoto a desenvolvê-lo, entre muitas outras coisas que rondam essa tecnologia que está revolucionando a economia mundial.
              </Text>
            </Box>
            <Box>
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Objetivos'}
              />
              <Text color={'gray.500'} fontSize={'m'} marginTop={5}>

                O curso está dividido em 7 módulos (Introdução, Bitcoin, Blockchain, Crypto Assets, Chains, Tecnologia e Regulação). Dentro desses módulos, há tópicos com textos ou vídeos explicando o assunto, existe mais de um link sobre o tema, caso já tenha entendido o conceito sinta-se à vontade para passar para o próximo tema.

                O curso será disponibilizado nesse site de seguinte maneira: cada página é um módulo, dentro desses módulos existem subtemas que se relacionam com o assunto principal, e em seguida os links com os conteúdos.

              </Text>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
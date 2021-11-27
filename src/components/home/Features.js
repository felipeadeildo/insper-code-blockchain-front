import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoRocketOutline,
  IoEye,
  IoCompass,
} from 'react-icons/io5';

import Insper from '../../assets/insper.jpg'

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
    <Container maxW={'8xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>Reavaliando o presente e construindo o futuro</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Buscamos criar um time altamente engajado e preparado
            para enfrentar a nova onda de tecnologia no mercado de trabalho.
            Seguimos com o objetivo de estimular o estudo e a adoção
            dessa tecnologia no Brasil, criando conhecimento não apenas
            para o agora, como também para o futuro.
          </Text>
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
                  <Icon as={IoRocketOutline} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Nossa Missão'}
              />
              <Text color={'gray.500'} fontSize={'m'}>
                Fomentar o desenvolvimento do ecossistema brasileiro
                em torno da tecnologia blockchain, criando um futuro mais eficiente
                através da tecnologia.
              </Text>
            </Box>
            <Box>
              <Feature
                icon={<Icon as={IoEye} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Nossa Visão'}
              />
              <Text color={'gray.500'} fontSize={'m'}>
                Capacitar os alunos com o melhor conteúdo e conectá-los ao mercado,
                no intuito de incluir nosso país nesse cenário de inovação.
              </Text>
            </Box>
            <Box>
              <Feature
                icon={
                  <Icon as={IoCompass} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Nossos Valores'}
              />
              <Text color={'gray.500'} fontSize={'m'}>
                Alto comprometimento, proatividade, inovação,
                trabalho em equipe, multidisciplinaridade, excelência e eficiência.
              </Text>
            </Box>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={Insper}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
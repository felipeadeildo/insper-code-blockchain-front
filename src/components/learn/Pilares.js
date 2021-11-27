import { Box, SimpleGrid, Icon, Text, Stack, Flex, chakra } from '@chakra-ui/react';
import { FcIdea, FcCollaboration, FcBusinessman } from 'react-icons/fc';
// import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';


const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={20}
        fontWeight={'bold'}>
        Pilares do Conhecimento
      </chakra.h1>
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FcIdea} w={10} h={10} />}
            title={'Aprender a conhecer'}
            text={
              'Esse aprendizado pretende que cada pessoa possa conhecer o mundo que a rodeia, conseguindo assim viver dignamente, desenvolver capacidades profissionais e se comunicar.'
            }
          />
          <Feature
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            title={'Aprender a fazer'}
            text={
              'Ele se refere à formação do profissional. Fala sobre como conseguir usar os conhecimentos adquiridos na prática, no mercado de trabalho, criando qualificação profissional e experiência.'
            }
          />
          <Feature
            icon={<Icon as={FcBusinessman} w={10} h={10} />}
            title={'Aprender a ser'}
            text={
              'Ele defende que o ser humano precisa se tornar apto a pensar de forma autônoma e crítica, sendo capaz de formular o próprio juízo de valor e sabendo que atitudes tomar ante as circunstâncias da vida.'
            }
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
import { Box, Heading, Text, Icon } from '@chakra-ui/react';
import { FcCandleSticks, FcBusiness } from 'react-icons/fc'
import { RiComputerFill } from 'react-icons/ri';

export default function Areas() {
  return (
    <>
      <Box textAlign="center" py={10} px={6}>
        <Icon boxSize={'50px'} as={FcBusiness} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Business
        </Heading>
        <Text color={'gray.500'}>
          Estudo das aplicações da tecnologia blockchain, atuações nas diversas áreas e empresas e elaboração de possíveis real cases.
        </Text>
      </Box>
      <Box textAlign="center" py={10} px={6}>
        <Icon boxSize={'50px'} as={FcCandleSticks} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Finance
        </Heading>
        <Text color={'gray.500'}>
          Estudo do mercado de criptoativos, tecnologia blockchain no mercado financeiro e possíveis estratégias elaboradas.
        </Text>
      </Box>
      <Box textAlign="center" py={10} px={6}>
        <Icon boxSize={'50px'} as={RiComputerFill} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Tech
        </Heading>
        <Text color={'gray.500'}>
          Estudo da tecnologia blockchain na parte técnica, smart-contracts, dApps, softwares e criptografia.
        </Text>
      </Box>
    </>
  )
}
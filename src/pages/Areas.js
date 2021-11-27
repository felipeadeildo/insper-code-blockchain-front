import {
  Box,
  Flex,
  Heading,
  Image,
  Skeleton,
  Stack,
} from '@chakra-ui/react'
import * as React from 'react'
import Business from '../assets/areas/business.jpg'
import Finance from '../assets/areas/finance.jpg'
import Tech from '../assets/areas/tech.jpg'

export default function Areas() {
  return (
    <>
      <Box maxW="7xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
        <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
          <Flex flex="1" overflow="hidden">
            <Image
              src={Business}
              alt="Lovely Image"
              fallback={<Skeleton />}
              maxH="450px"
              minW="300px"
              objectFit="cover"
              flex="1"
            />
          </Flex>
          <Box
            width={{ lg: 'sm' }}
            transform={{ base: 'translateY(-50%)', lg: 'none' }}
            bg='transparent'
            mx={{ base: '6', md: '8', lg: '0' }}
            px={{ base: '6', md: '8', lg: '0' }}
            py={{ base: '6', md: '8', lg: '12' }}
          >
            <Stack spacing={{ base: '8', lg: '10' }}>
              <Stack spacing={{ base: '2', lg: '4' }}>
                <Heading size="xl" color='#f68b23'>
                  Business
                </Heading>
                <Heading size="m" fontWeight="normal">
                  Estudo das aplicações da tecnologia blockchain, atuações nas diversas áreas e empresas e elaboração de possíveis real cases.
                </Heading>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box maxW="7xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
        <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
          <Box
            width={{ lg: 'sm' }}
            transform={{ base: 'translateY(-50%)', lg: 'none' }}
            bg='transparent'
            mx={{ base: '6', md: '8', lg: '0' }}
            px={{ base: '6', md: '8', lg: '0' }}
            py={{ base: '6', md: '8', lg: '12' }}
          >
            <Stack spacing={{ base: '8', lg: '10' }}>
              <Stack spacing={{ base: '2', lg: '4' }}>
                <Heading size="xl" color='#f68b23'>
                  Finance
                </Heading>
                <Heading size="m" fontWeight="normal">
                  Estudo do mercado de criptoativos, tecnologia blockchain no mercado financeiro e possíveis estratégias elaboradas.
                </Heading>
              </Stack>
            </Stack>
          </Box>
          <Flex flex="1" overflow="hidden">
            <Image
              src={Finance}
              alt="Lovely Image"
              fallback={<Skeleton />}
              maxH="450px"
              minW="300px"
              objectFit="cover"
              flex="1"
            />
          </Flex>
        </Stack>
      </Box>
      <Box maxW="7xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
        <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
          <Flex flex="1" overflow="hidden">
            <Image
              src={Tech}
              alt="Lovely Image"
              fallback={<Skeleton />}
              maxH="450px"
              minW="300px"
              objectFit="cover"
              flex="1"
            />
          </Flex>
          <Box
            width={{ lg: 'sm' }}
            transform={{ base: 'translateY(-50%)', lg: 'none' }}
            bg='transparent'
            mx={{ base: '6', md: '8', lg: '0' }}
            px={{ base: '6', md: '8', lg: '0' }}
            py={{ base: '6', md: '8', lg: '12' }}
          >
            <Stack spacing={{ base: '8', lg: '10' }}>
              <Stack spacing={{ base: '2', lg: '4' }}>
                <Heading size="xl" color='#f68b23'>
                  Tech
                </Heading>
                <Heading size="m" fontWeight="normal">
                  Estudo da tecnologia blockchain na parte técnica, smart-contracts, dApps, softwares e criptografia.
                </Heading>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  )
}
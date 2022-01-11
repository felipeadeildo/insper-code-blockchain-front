import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  Link,
  Button
} from '@chakra-ui/react';

export default function Card({ cardInfo }) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={cardInfo.image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {cardInfo.name}
          </Heading>
          <Link href={cardInfo.link} isExternal>
            <Button
              w={'full'}
              mt={3}
              bg={'#f68b23'}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Mais informações
            </Button>
          </Link >
        </Stack>
      </Box>
    </Center>
  );
}
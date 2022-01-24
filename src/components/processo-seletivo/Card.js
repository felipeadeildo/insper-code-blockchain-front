import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  Link,
  Button,
  Text
} from '@chakra-ui/react';
import { SiLinkedin } from 'react-icons/si';

export default function Card({ info }) {
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
          height={'230px'}  >
          <Image
            rounded={'lg'}
            height={230}
            objectFit={'cover'}
            src={info.image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {info.cargo}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {info.nome}
          </Heading>
          <Stack>
            <Link href={info.linkedin} isExternal>
              <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
                <Center>
                  <Text>Linkedin</Text>
                </Center>
              </Button>
            </Link >
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
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
import { GoRocket } from 'react-icons/go';

export default function Card({ cardInfo }) {
  const cargo = cardInfo.metadata.attributes.find(x => x.trait_type === "Cargo")

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
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${cardInfo.metadata.image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            objectFit={'cover'}
            src={cardInfo.metadata.image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {cargo.value}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {cardInfo.metadata.name}
          </Heading>
          <Stack>
            <Link href={cardInfo.metadata.external_url} isExternal>
              <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
                <Center>
                  <Text>Linkedin</Text>
                </Center>
              </Button>
            </Link >
            <Link href={`https://opensea.io/assets/matic/${cardInfo.token_address}/${cardInfo.token_id}`} isExternal>
              <Button w={'full'} colorScheme={'messenger'} leftIcon={<GoRocket />}>
                <Center>
                  View on Opensea
                </Center>
              </Button>
            </Link >
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
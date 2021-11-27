import CallToActionWithVideo from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react';
import overlay from '../assets/overlay.png'

function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'30vh'}
      backgroundImage={overlay}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'black'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Conheça nossas áreas! Estamos estruturados em áreas de estudo e áreas administrativas
          </Text>
          <Stack direction={'row'}>
            <Link href='#/areas' >
              <Button
                bg={'#f68b23'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: '#f68b70' }}>
                Nossas áreas
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}

function Home() {
  return (
    <>
      <CallToActionWithVideo />
      <Features />
      <Testimonials />
      <WithBackgroundImage />
    </>
  );
}

export default Home;

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  HStack,
  Wrap,
  WrapItem,
  Center,
  Stack,
  AspectRatio,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import {
  MdOutlineEmail
} from 'react-icons/md';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

export default function Contact() {
  return (
    <>
      <Container bg={useColorModeValue('gray.100', 'gray.700')} maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="#02054B"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Entre em Contato</Heading>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <Text>
                        Caso queira fazer contato conosco, acesse o Linkedin de algum
                        dos nossos diretores/presidente. Se isso não for possível, mande um
                        email para nós!
                      </Text>
                    </Box>
                    <HStack
                      alignItems="center"
                      justifyContent="center">
                      <Link isExternal href='mailto:blockchainsper@gmail.com'>
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF' }}
                          icon={<MdOutlineEmail size="28px" />}
                        />
                      </Link>
                      <Link isExternal href='https://www.linkedin.com/company/blockchain-insper/'>
                        <IconButton
                          aria-label="discord"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF' }}
                          icon={<BsLinkedin size="28px" />}
                        />
                      </Link>
                      <Link isExternal href='https://www.instagram.com/blockchainsper/'>
                        <IconButton
                          aria-label="facebook"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF' }}
                          icon={<BsInstagram size="28px" />}
                        />
                      </Link>
                      <Link isExternal href='https://github.com/BlockchainInsper'>
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF' }}
                          icon={<BsGithub size="28px" />}
                        />
                      </Link>
                    </HStack>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Flex color="white">
        <Box
          color="white"
          borderRadius="lg"
          justifyContent="center"
          w={1000}
          m={{ sm: 4, md: 16, lg: 50 }}
          p={{ sm: 5, md: 5, lg: 5 }}>
          <AspectRatio ratio={16 / 9}>
            <iframe
              title="Teste"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.0847263800329!2d-46.67881990221802!3d-23.598254999967665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce575374b7481f%3A0x50e5aad2656c43ed!2sInsper%20Learning%20Institution!5e0!3m2!1sen!2sbr!4v1586359937804!5m2!1sen!2sbr"
              alt="demo"
            />
          </AspectRatio>
        </Box>
        <Center alignItems="center" justifyContent="center">
          <Stack>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}>
              <Text
                color={useColorModeValue('black', 'white')}
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: '#f68b23',
                  zIndex: -1,
                }}>
                Venha conhecer a Blockchain Insper e o Insper!
              </Text>
              <br />
              <Text as={'span'} color={'#f68b23'}>

              </Text>
            </Heading>
            <Text color={'gray.500'} fontWeight="bold">
              Aberto de Segunda à Sexta das 07:00 às 23:00
            </Text>
          </Stack>
        </Center>
      </Flex>
    </>
  );
}
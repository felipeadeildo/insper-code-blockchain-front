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
  Link,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

import { Separator } from "../components/Separator";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsInstagram, BsDiscord } from "react-icons/bs";

function handleEmailSubmission(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // validation
  if (!name || !email || !message) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // clear the form
  e.target.reset();
}

export default function Contact() {
  const accentColor = "#F68B23"; // accent color
  const formBg = "#2D3748"; // form box background

  return (
    <>
      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            // color="white"
            borderRadius="lg"
            m={{ sm: 2, md: 8, lg: 6 }}
            p={{ sm: 3, md: 4, lg: 8 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Entre em Contato</Heading>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <Text mb={5}>
                        Caso queira fazer contato conosco, preencha o formulário
                        abaixo com seu nome, email, e mensagem. Responderemos
                        assim que possível!
                      </Text>
                      <Box p={6} borderRadius="md">
                        <form onSubmit={handleEmailSubmission}>
                          <FormControl isRequired mb={4}>
                            <FormLabel>Nome</FormLabel>
                            <Input
                              placeholder="Seu nome"
                              name="name"
                              type="text"
                              color="white"
                            />
                          </FormControl>

                          <FormControl isRequired mb={4}>
                            <FormLabel>Email</FormLabel>
                            <Input
                              placeholder="seuemail@exemplo.com"
                              name="email"
                              type="email"
                              color="white"
                            />
                          </FormControl>

                          <FormControl isRequired mb={4}>
                            <FormLabel>Mensagem</FormLabel>
                            <Textarea
                              placeholder="Digite sua mensagem..."
                              name="message"
                              color="white"
                              rows={5}
                            />
                          </FormControl>

                          <Button
                            type="submit"
                            bg={accentColor}
                            color="white"
                            _hover={{ bg: "#e07b1f" }}
                            variant="solid"
                            w="full"
                            mt={4}
                          >
                            Enviar
                          </Button>
                        </form>
                      </Box>
                    </Box>

                    <Box mt={10}>
                      <Text fontWeight="bold" mb={4}>
                        Ou, se preferir, entre em contato pelas nossas redes:
                      </Text>
                      <HStack alignItems="center" justifyContent="center">
                        <Link isExternal href="https://discord.gg/jdK5yB48Mm">
                          <IconButton
                            aria-label="discord"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: accentColor }}
                            icon={<BsDiscord size="28px" />}
                          />
                        </Link>
                        <Link isExternal href="mailto:blockchainsper@gmail.com">
                          <IconButton
                            aria-label="email"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: accentColor }}
                            icon={<MdOutlineEmail size="28px" />}
                          />
                        </Link>
                        <Link
                          isExternal
                          href="https://www.linkedin.com/company/blockchain-insper/"
                        >
                          <IconButton
                            aria-label="linkedin"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: accentColor }}
                            icon={<BsLinkedin size="28px" />}
                          />
                        </Link>
                        <Link
                          isExternal
                          href="https://www.instagram.com/blockchainsper/"
                        >
                          <IconButton
                            aria-label="instagram"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: accentColor }}
                            icon={<BsInstagram size="28px" />}
                          />
                        </Link>
                      </HStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>

      <Box maxWidth="container.xl" mx="auto">
        <Separator width={["90%", "80%", "70%"]} mx="auto" />
      </Box>

      <Flex>
        <Box
          borderRadius="lg"
          justifyContent="center"
          w={1000}
          m={{ sm: 4, md: 16, lg: 50 }}
          p={{ sm: 5, md: 5, lg: 5 }}
        >
          <AspectRatio ratio={16 / 9}>
            <iframe
              title="Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.0847263800329!2d-46.67881990221802!3d-23.598254999967665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce575374b7481f%3A0x50e5aad2656c43ed!2sInsper%20Learning%20Institution!5e0!3m2!1sen!2sbr!4v1586359937804!5m2!1sen!2sbr"
              alt="Localização"
            />
          </AspectRatio>
        </Box>
        <Center alignItems="center" justifyContent="center">
          <Stack>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "1xl", sm: "2xl", lg: "3xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: accentColor,
                  zIndex: -1,
                }}
              >
                Venha conhecer a Blockchain Insper e o Insper!
              </Text>
            </Heading>
            <Text fontWeight="bold">
              Aberto de Segunda à Sexta das 07:00 às 23:00
            </Text>
          </Stack>
        </Center>
      </Flex>
    </>
  );
}

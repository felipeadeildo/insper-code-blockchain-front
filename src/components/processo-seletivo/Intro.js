import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Link,
} from "@chakra-ui/react";
import { SiDiscord } from "react-icons/si";

const links = {
  discord: "https://discord.gg/jdK5yB48Mm",
  forms: "https://forms.gle/G5hi9XYUxvcyh7yz9",
};

const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="700">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function Intro() {
  return (
    <Box as={Container} maxW="7xl" mt={10} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Nosso Processo Seletivo chegou!
            </chakra.h2>
            <Link href={links.forms} isExternal>
              <Button bg={"#f68b23"} color={"white"} _hover={{ bg: "#f68b70" }}>
                Inscrever-se
              </Button>
            </Link>
            <Link href={links.discord} isExternal>
              <Button
                bg={"#5865F2"}
                color={"white"}
                _hover={{ bg: "#5865F2" }}
                leftIcon={<SiDiscord />}
              >
                Discord
              </Button>
            </Link>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              O maior experimento financeiro e sociológico do século XXI, o
              Bitcoin veio solucionar diversos problemas antes sem solução. A
              Blockchain Insper vai te dar base para entender o que está por
              trás da construção do protocolo e o que motivou Satoshi Nakamoto a
              desenvolvê-lo, entre muitas outras coisas que rondam essa
              tecnologia que está revolucionando a economia mundial. Além disso,
              temos parcerias com as maiores empresas do mercado para, além de
              ganhar conhecimento, saber como funcionam os projetos na prática.
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          heading={"Primeira Fase"}
          text={
            "Preenchimento de um forms com detalhes pessoais e perguntas de caráter opinativo"
          }
        />
        <Feature
          heading={"Segunda Fase"}
          text={
            "Estudos de caso em grupos e apresentação com perguntas de caráter técnico"
          }
        />
        <Feature
          heading={"Terceira Fase"}
          text={
            "Entrevista individual para conhecer melhor o candidato com perguntas pessoais e possivelmente técnicas"
          }
        />
        <Feature
          heading={"Quarta Fase"}
          text={
            "Desempenho no Curso de Introdução à Blockchain e Projeto Interno Aplicado (nesta fase, os candidatos já ganham entre 5 e 10 horas do Insper)"
          }
        />
      </Grid>
      <Divider mt={12} mb={12} />
    </Box>
  );
}

import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBitcoin } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineApartment } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Feature = ({ title, children, icon }) => {
  return (
    <Stack
      spacing={{ base: "3", md: "6" }}
      direction={{ base: "column", md: "row" }}
    >
      <Box fontSize="6xl">{icon}</Box>
      <Stack spacing="1">
        <Text fontWeight="extrabold" fontSize="lg">
          {title}
        </Text>
        <Box color={useColorModeValue("gray.600", "gray.400")}>{children}</Box>
      </Stack>
    </Stack>
  );
};

export default function Summary() {
  return (
    <Box
      as="section"
      maxW="5xl"
      mx="auto"
      pt="4"
      pb="12"
      px={{ base: "6", md: "8" }}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacingX="10"
        spacingY={{ base: "8", md: "14" }}
      >
        <Link href="#/areas">
          <Feature title="Núcleos" icon={<FaBitcoin />}>
            Clique aqui para conhecer nossas áreas de estudos
          </Feature>
        </Link>

        <Link href="#/partnerships">
          <Feature title="Parceiros" icon={<MdOutlineApartment />}>
            Clique aqui para conhecer nossos parceiros
          </Feature>
        </Link>

        <Link href="#/projects">
          <Feature title="Projetos" icon={<AiOutlineFundProjectionScreen />}>
            Clique aqui para conhecer nossos alguns dos nossos melhores projetos
          </Feature>
        </Link>

        <Link href="#/members/actual">
          <Feature title="Time" icon={<RiTeamFill />}>
            Clique aqui para conhecer o time completo
          </Feature>
        </Link>
      </SimpleGrid>
    </Box>
  );
}

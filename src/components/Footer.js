import {
  Box,
  ButtonGroup,
  IconButton,
  Stack,
  Text,
  Image,
  useColorMode
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import LogoLight from '../assets/logo-light.svg'
import LogoDark from '../assets/logo-dark.svg'


export default function SmallWithLogoLeft() {
  const { colorMode } = useColorMode();

  return (
    <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
      <Stack>
        <Stack direction="row" spacing="4" align="center" justify="space-between">
          {colorMode === 'light' ? <Image src={LogoLight} width="100px" /> : <Image src={LogoDark} width="100px" /> }
          <ButtonGroup variant="ghost" color="gray.600">
            <IconButton as="a" href='https://www.linkedin.com/company/blockchain-insper' aria-label="LinkedIn" icon={<FaLinkedinIn fontSize="20px" />} />
            <IconButton as="a" href='https://www.instagram.com/blockchainsper/' aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} />
            <IconButton as="a" href='https://github.com/BlockchainInsper' aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
            <IconButton as="a" href='mailto:blockchainsper@gmail.com' aria-label="Email" icon={<MdEmail fontSize="20px" />} />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" alignSelf={{ base: 'center', sm: 'start' }}>
          &copy; {new Date().getFullYear()} Blockchain Insper. All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
}
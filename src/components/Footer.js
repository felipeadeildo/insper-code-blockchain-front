import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import LogoImage from '../assets/logo.svg'

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Image src={LogoImage} width="100px" />

        <Text>Copyright © 2021 Blockchain Insper. All rights reserved. </Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'https://www.linkedin.com/company/blockchain-insper'} target="_blank">
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'https://www.youtube.com/channel/UC-qtARzam6cP5NYYNHBx6Xw'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/blockchainsper/'}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'mailto:blockchainsper@gmail.com'}>
            <MdEmail />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
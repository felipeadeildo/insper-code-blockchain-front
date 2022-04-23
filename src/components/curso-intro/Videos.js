import {
  Container,
  SimpleGrid,
  Heading,
  Stack,
  AspectRatio,
} from '@chakra-ui/react';

export default function Videos({ videos, titulo }) {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid spacing={10}>
        <Heading>{titulo}</Heading>
        <Stack spacing={10}>
          {videos.map(value => (
            <AspectRatio
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <iframe
                title={'Teste'}
                alt={'Bitcoin Video'}
                src={value.link}
                allowFullScreen
              />
            </AspectRatio>
          ))}
        </Stack>
      </SimpleGrid>
    </Container>
  )
}
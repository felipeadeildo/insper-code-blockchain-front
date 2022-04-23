import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';

import ArteAgro from '../../assets/blog/arteAgro.png'
import ArteSaude from '../../assets/blog/arteHealth.png'

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Aprenda na prática</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link href={"https://drive.google.com/file/d/1zlmy-Juu6i6HVZw7WCYQs_rC4CEDZSFy/view"} isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={ArteAgro}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Agropecuária', 'Report']} />
          <Heading marginTop="1">
            <Link href={"https://drive.google.com/file/d/1zlmy-Juu6i6HVZw7WCYQs_rC4CEDZSFy/view"} isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Report do setor Agropecuário
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            O setor agropecuário é um dos principais setores econômicos do Brasil,
            representando uma parcela de 21% do PIB nacional. Atualmente, ele encontra
            diversos problemas estruturais, os quais poderiam ser solucionados através
            da tecnologia blockchain. No report a seguir esses tópicos serão abordados e discutidos.
          </Text>
        </Box>
      </Box>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Saúde', 'Report']} />
          <Heading marginTop="1">
            <Link href={"https://drive.google.com/file/d/1KzcVDm7Ipq4yGfkN1DBzlBwWOwS-DfYz/view"} isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Report do setor da Saúde
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Sendo o assunto de maior importância recentemente, o setor de saúde aparece como enfoque de 2020
            pela situação vivida com a pandemia do COVID-19. Nesse ano, foi possível notar a importância e os
            benefícios de um sistema de saúde bem estruturado. No report a seguir esses tópicos serão abordados e discutidos.
          </Text>
        </Box>
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link href={"https://drive.google.com/file/d/1KzcVDm7Ipq4yGfkN1DBzlBwWOwS-DfYz/view"} isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={ArteSaude}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ArticleList;
import { Box, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";

import Card from "../components/parcerias/Card";

import Insper from "../assets/parceiros/insper.png";
import BeeTech from "../assets/parceiros/beetech.jpeg";
import BlockchainBerkeley from "../assets/parceiros/blockchainberkeley.png";
import BlockMaster from "../assets/parceiros/blockmaster.jpg";
import ICOLab from "../assets/parceiros/icolab.png";
import MarVentures from "../assets/parceiros/marventures.png";
import MercadoBTC from "../assets/parceiros/mercadobtc.jpg";
import PortaldoBTC from "../assets/parceiros/portaldobtc.webp";
import GCB from "../assets/parceiros/gcb.jfif";
import PeerBR from "../assets/parceiros/peer.png";
import Coins from "../assets/parceiros/coins.jfif";
import Ambev from "../assets/parceiros/ambev.jfif";
import Itau from "../assets/parceiros/itau.webp";
import Ulrich from "../assets/parceiros/ulrich.jpg";
import Dotz from "../assets/parceiros/dotz.png";

const cards = [
  {
    name: "Insper",
    image: Insper,
    link: "https://www.insper.edu.br/",
  },
  {
    name: "Mercado Bitcoin",
    image: MercadoBTC,
    link: "https://www.mercadobitcoin.com.br/",
  },
  {
    name: "Ambev",
    image: Ambev,
    link: "https://www.ambev.com.br/",
  },
  {
    name: "Itaú",
    image: Itau,
    link: "https://www.itau.com.br/",
  },
  {
    name: "Dotz",
    image: Dotz,
    link: "https://www.dotz.com.br/",
  },
  {
    name: "GCB Investimentos",
    image: GCB,
    link: "https://gcbinvestimentos.com/",
  },
  {
    name: "Peer BR",
    image: PeerBR,
    link: "https://peerbr.com/",
  },
  {
    name: "Coins",
    image: Coins,
    link: "https://coins.com.br/",
  },
  {
    name: "Fernando Ulrich",
    image: Ulrich,
    link: "https://www.linkedin.com/in/fernando-ulrich-aa805821/",
  },
  {
    name: "Blockchain Berkeley",
    image: BlockchainBerkeley,
    link: "https://blockchain.berkeley.edu/",
  },
  {
    name: "BeeTech",
    image: BeeTech,
    link: "https://beetech.global/",
  },
  {
    name: "Block Master",
    image: BlockMaster,
    link: "https://www.blockmaster.com.br/",
  },
  {
    name: "iCoLab",
    image: ICOLab,
    link: "https://icolab.org.br/",
  },
  {
    name: "Mar Ventures",
    image: MarVentures,
    link: "https://www.mar.ventures/",
  },
  {
    name: "Portal do Bitcoin",
    image: PortaldoBTC,
    link: "https://portaldobitcoin.uol.com.br/",
  },
];

export default function Parcerias() {
  return (
    <>
      <Box as="section">
        <Box
          maxW="2xl"
          mx="auto"
          px={{ base: "6", lg: "8" }}
          py={{ base: "16", sm: "20" }}
          textAlign="center"
        >
          <Heading size="3xl" fontWeight="extrabold" letterSpacing="tight">
            Parceiros
          </Heading>
          <Text mt="4" fontSize="lg">
            Aqui você encontrará todos os parceiros da Blockchain Insper
          </Text>
        </Box>
      </Box>
      <Wrap spacing="30px" justify="center" m={10}>
        {cards.map((card) => (
          <WrapItem key={card.name}>
            <Card cardInfo={card} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
}

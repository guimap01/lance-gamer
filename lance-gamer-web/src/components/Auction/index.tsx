import { Divider, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { AuctionItem } from './AuctionItem';

export const Auction = () => {
  return (
    <Flex w="100%" maxWidth={1480} mx="auto">
      <Flex direction="column" w="100%">
        <Text mx={['auto', '0']} fontSize="32" mb="2" textTransform="uppercase">
          Leilões ativos
        </Text>
        <Divider />
        <SimpleGrid py="4" spacing="40px" minChildWidth="265px">
          <AuctionItem />
          <AuctionItem />
          <AuctionItem />
          <AuctionItem />
          <AuctionItem />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

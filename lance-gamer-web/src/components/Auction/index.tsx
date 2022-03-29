import { Divider, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { api } from 'services/api';
import { AuctionType } from 'types/auctionType';
import { AuctionItem } from './AuctionItem';

export const Auction = () => {
  const [auctions, setAuctions] = useState([] as AuctionType[]);

  const handleLoadAuctions = useCallback(async () => {
    const resp = await api.get('/auction');
    setAuctions(resp.data);
  }, []);

  useEffect(() => {
    handleLoadAuctions();
  }, [handleLoadAuctions]);

  return (
    <Flex w="100%" maxWidth={1480} mx="auto">
      <Flex direction="column" w="100%">
        <Text mx={['auto', '0']} fontSize="32" mb="2" textTransform="uppercase">
          Leilões ativos
        </Text>
        <Divider />
        <SimpleGrid py="4" spacing="40px" minChildWidth="265px">
          {auctions.map((auction) => (
            <AuctionItem key={auction.id} auctionId={auction.id} />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

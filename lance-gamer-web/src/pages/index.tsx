import { Flex } from '@chakra-ui/react';
import { Auction } from 'components/Auction';
import { Carousel } from 'components/Carousel';
import { Header } from 'components/Header';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Header />
      <Carousel />
      <Auction />
    </Flex>
  );
};

export default Home;

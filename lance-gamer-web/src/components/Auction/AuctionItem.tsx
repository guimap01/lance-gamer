import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { useTimer } from 'react-timer-hook';
import { currecyFormatter } from 'utils/currencyFormatter';

export const AuctionItem = () => {
  const timer = new Date();
  const { seconds, restart } = useTimer({
    //@ts-ignore
    expiryTimestamp: timer.setSeconds(timer.getSeconds() + 15),
  });

  const handleLance = () => {
    restart(timer);
  };

  const leftDigit = seconds >= 10 ? seconds.toString()[0] : '0';
  const rightDigit = seconds >= 10 ? seconds.toString()[1] : seconds.toString();
  return (
    <Stack
      w="265px"
      p="2"
      align="center"
      justify="center"
      border="1px"
      borderColor="cyan"
      mx="auto"
      borderRadius="lg"
      bg="gray.700"
    >
      <Box bg="gray.800" px="3" py="2" borderRadius="lg">
        <Text align="center">Início dia 23/06/2022 08:00:00</Text>
      </Box>
      <Image src="/images/pc.jpg" alt="pc" />
      <Text textTransform="uppercase">Monitor Lg LED 25 ips</Text>
      <Flex gap="2">
        <Text
          fontSize={30}
          bg="#404549"
          borderRadius={5}
          px="10px"
          py="8px"
          color="white"
        >
          {leftDigit}
        </Text>
        <Text
          fontSize={30}
          bg="#404549"
          borderRadius={5}
          px="10px"
          py="8px"
          color="white"
        >
          {rightDigit}
        </Text>
      </Flex>
      <Text>Pedro Monteiro</Text>
      <Text fontSize={24} color="cyan">
        {currecyFormatter(40.63)}
      </Text>
      <Button
        onClick={handleLance}
        colorScheme="pink"
        textTransform="uppercase"
        w="40"
        fontSize={24}
      >
        Lance
      </Button>
    </Stack>
  );
};

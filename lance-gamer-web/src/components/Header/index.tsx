import {
  Button,
  Flex,
  Icon,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiLockLine, RiUserLine } from 'react-icons/ri';
export const Header = () => {
  const shouldShowText = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Flex gap="4">
        <Image
          src="/images/logo.jpg"
          alt="Logo"
          borderRadius="full"
          boxSize="40px"
        />
        <Text
          fontSize={['2xl', '3xl']}
          fontWeight="bold"
          letterSpacing="tight"
          w="64"
        >
          Lance Gamer
        </Text>
      </Flex>
      <Flex align="center" ml="auto" gap="2">
        {shouldShowText ? (
          <>
            <Button
              aria-label="Entrar Button"
              leftIcon={<Icon as={RiUserLine} />}
              variant="outline"
              colorScheme="cyan"
            >
              Entrar
            </Button>

            <Button
              aria-label="Cadastre-se Button"
              leftIcon={<Icon as={RiLockLine} />}
              variant="outline"
              colorScheme="cyan"
            >
              Cadastre-se
            </Button>
          </>
        ) : (
          <>
            <IconButton
              aria-label="Entrar Button"
              icon={<Icon as={RiUserLine} />}
              variant="outline"
              colorScheme="cyan"
            />
            <IconButton
              aria-label="Cadastre-se Button"
              icon={<Icon as={RiLockLine} />}
              variant="outline"
              colorScheme="cyan"
            />
          </>
        )}
      </Flex>
    </Flex>
  );
};

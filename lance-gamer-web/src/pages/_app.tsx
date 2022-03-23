import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { theme } from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <ToastContainer theme="colored" />
    </ChakraProvider>
  );
}

export default MyApp;

import '../styles/globals.css';

import { ChakraProvider, Heading } from '@chakra-ui/react';

import type { AppProps } from 'next/app';
import Header from './components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Heading>
        <Header />
      </Heading>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

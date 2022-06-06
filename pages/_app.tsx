import '../styles/globals.css';

import { ChakraProvider, Heading } from '@chakra-ui/react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ChakraProvider>
      <Heading>
        <Header />
      </Heading>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;

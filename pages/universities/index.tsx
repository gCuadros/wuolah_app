import {
  Alert,
  AlertIcon,
  Heading,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react';
import { DehydratedState, QueryClient, dehydrate } from 'react-query';

import Cardlist from '@/components/Cardlist';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InfiniteScroll from 'react-infinite-scroll-component';
import LandingLayout from '@/components/LandingLayout';
import type { NextPage } from 'next';
import SectionLayout from '@/components/Section';
import bg from '@/public/images/bgr-universtiy.png';
import { getUniversities } from '@/services/getUniversities';
import { useUniversities } from '@/hooks/useUniversities';

const UniversitiesPage: NextPage = (props) => {
  const {
    universities,
    isLoading,
    isSuccess,
    isError,
    hasNextPage,
    fetchNextPage,
  } = useUniversities();

  const renderResult = () => {
    if (isLoading) {
      return (
        <LandingLayout>
          <SimpleGrid columns={1} marginTop={20} marginBottom={20}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="black.500"
              size="xl"
            />
          </SimpleGrid>
        </LandingLayout>
      );
    }
    if (isError) {
      return (
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      );
    }
    if (isSuccess) {
      return (
        <InfiniteScroll
          dataLength={universities.length}
          hasMore={hasNextPage as boolean}
          next={() => fetchNextPage()}
          style={{ overflow: 'hidden' }}
          loader={
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          }
        >
          <Cardlist universities={universities} />;
        </InfiniteScroll>
      );
    }
  };

  return (
    <>
      <Head>
        <title>Wuolah | Estudiante, gana dinero con tus apuntes.</title>
        <meta name="title" content="Wuolah.com"></meta>
        <meta
          name="description"
          content="Gana dinero compartiendo tus apuntes, y descarga los de tu clase de forma rápida y sencilla."
        ></meta>
        <meta name="keyword" content="Apuntes"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SectionLayout
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: '85%',
            backgroundPosition: 'right bottom',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Heading>
            <Header />
          </Heading>
          <Hero
            title="Mejora tus notas con Wuolah."
            subtitle="Descarga y consulta gratis los apuntes de tus compañeros de forma fácil y ordenada en más de 4 millones de documentos."
            text="comparte, pregunta y estudia. Desde casa."
          />
        </SectionLayout>
        <SectionLayout backgroundColor={'#f8fafb'}>
          {renderResult()}
        </SectionLayout>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('universities', () =>
    JSON.parse(JSON.stringify(getUniversities))
  );
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default UniversitiesPage;

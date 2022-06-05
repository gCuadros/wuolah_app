import { Alert, AlertIcon, SimpleGrid, Spinner } from '@chakra-ui/react';

import Cardlist from '@/components/Cardlist';
import Head from 'next/head';
import Hero from '@/components/Hero';
import LandingLayout from '@/components/LandingLayout';
import type { NextPage } from 'next';
import SectionLayout from '@/components/Section';
import mainImage from '@/public/assets/mainImg.jpg';
import { useUniversities } from '@/hooks/useUniversities';

const UniversitiesPage: NextPage = () => {
  const { isLoading, isSuccess, isError, data } = useUniversities();

  const renderResult = () => {
    if (isLoading) {
      return (
        <LandingLayout>
          <SimpleGrid columns={1} marginTop={20} marginBottom={20}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
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
      console.log(data);
      return <Cardlist universities={data} />;
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
        <SectionLayout>
          <Hero
            title="Mejora tus notas con Wuolah."
            subtitle="Descarga y consulta gratis los apuntes de tus compañeros de forma fácil y ordenada en más de 4 millones de documentos."
            text="comparte, pregunta y estudia. Desde casa."
            image="https://wuolah-web.s3-eu-west-1.amazonaws.com/assets/img/index/header.jpg"
          />
        </SectionLayout>
        <SectionLayout backgroundColor={'#f8fafb'}>
          {renderResult()}
        </SectionLayout>
      </main>
    </>
  );
};

export default UniversitiesPage;

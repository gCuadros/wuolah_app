import Cardlist, { DataUniversities } from '@/components/Cardlist';
import { UseQueryResult, useQuery } from 'react-query';

import Head from 'next/head';
import { Hero } from '@/components/Hero';
import type { NextPage } from 'next';
import SectionLayout from '@/components/Section';
import { getUniversities } from '@/services/getUniversities';
import mainImage from '@/public/assets/mainImg.jpg';

const Universities: NextPage = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    data,
  }: UseQueryResult<DataUniversities, Error> = useQuery<
    DataUniversities,
    Error
  >('universities', getUniversities);

  const renderResult = () => {
    if (isLoading) {
      return <div className="search-message">Loading...</div>;
    }
    if (isError) {
      return <div className="search-message">Something went wrong</div>;
    }
    if (isSuccess) {
      console.log(data);
      return <Cardlist dataUniversities={data} />;
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
            ctaText="Create your account now"
            ctaLink="/signup"
          />
        </SectionLayout>
        {renderResult()}
        <SectionLayout backgroundColor={'#f8fafb'}></SectionLayout>
      </main>
    </>
  );
};

export default Universities;

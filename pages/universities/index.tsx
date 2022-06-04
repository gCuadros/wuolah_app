import Cardlist from '@/components/Cardlist';
import Head from 'next/head';
import { Hero } from '@/components/Hero';
import type { NextPage } from 'next';
import SectionLayout from '@/components/Section';
import mainImage from '@/public/assets/mainImg.jpg';

const Universities: NextPage = () => {
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

        <SectionLayout backgroundColor={'#f8fafb'}>
          <Cardlist />
        </SectionLayout>
      </main>
    </>
  );
};

export default Universities;

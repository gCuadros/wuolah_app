import { Heading, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Header from '@/components/Header';
import HeroUniversity from '@/components/HeroUniversity';
import { IDataUniversities } from '@/lib/interfaces/IUniversities.vm';
import { ParsedUrlQuery } from 'querystring';
import { RefetchOptions } from 'react-query';
import SectionLayout from '@/components/Section';
import { useRouter } from 'next/router';
import { useRouterQuery } from '@/hooks/useRouterQuery';
import { useUniversity } from '@/hooks/useUniversity';

const Universities = () => {
  const [routerData, setRouterData] = useState<IDataUniversities>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const routerQuery: IDataUniversities | ParsedUrlQuery | null =
    useRouterQuery();
  const slug = router.query.slug as string;
  const { data: uni, refetch, isSuccess } = useUniversity(slug, false);

  useEffect(() => {
    if (!routerQuery) {
      setLoading(true);
      return;
    }

    if (routerQuery.name) {
      setRouterData({ ...routerQuery });
      setLoading(false);
      return;
    }

    const universitySlug = routerQuery.slug as RefetchOptions;
    refetch(universitySlug);
    setLoading(false);
  }, [routerQuery]);

  useEffect(() => {
    if (isSuccess) {
      setRouterData({ ...uni });
      setLoading(false);
    }
  }, [isSuccess]);

  const render = () => {
    if (loading) {
      return (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="black.500"
          size="xl"
        />
      );
    }

    if (!loading && routerData)
      return (
        <HeroUniversity
          title={routerData.name}
          subtitle={routerData.shortName}
          text="comparte, pregunta y estudia. Desde casa."
          image={routerData.logoUrl}
        />
      );
  };

  return (
    <SectionLayout>
      <Heading>
        <Header />
      </Heading>
      {render()}
    </SectionLayout>
  );
};

export default Universities;

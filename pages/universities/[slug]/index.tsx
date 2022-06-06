import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { DataUniversities } from '@/components/Cardlist';
import HeroUniversity from '@/components/HeroUniversity';
import SectionLayout from '@/components/Section';
import { Spinner } from '@chakra-ui/react';
import { useUniversity } from '@/hooks/useUniversity';

const Universities = () => {
  const [routerData, setRouterData] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const slug = router.query.slug as string;
  const { data: uni, refetch, isSuccess } = useUniversity(slug, false);

  const useQuery = () => {
    const router = useRouter();
    const hasQueryParams =
      /\[.+\]/.test(router.route) || /\?./.test(router.asPath);
    const ready = !hasQueryParams || Object.keys(router.query).length > 0;
    if (!ready) return null;
    return router.query;
  };

  const query = useQuery();

  useEffect(() => {
    if (!query) {
      setLoading(true);
      return;
    }

    if (query.name) {
      setRouterData({ ...query });
      setLoading(false);
      return;
    }

    refetch(query.slug);
    setLoading(false);
  }, [query]);

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

    if (!loading)
      return (
        <HeroUniversity
          title={routerData.name}
          subtitle={routerData.shortName}
          text="comparte, pregunta y estudia. Desde casa."
          image={routerData.logoUrl}
        />
      );
  };

  return <SectionLayout>{render()}</SectionLayout>;
};

export default Universities;

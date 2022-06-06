import { DehydratedState, QueryClient, dehydrate } from 'react-query';

import { WUOLAH_API } from '@/services/settings';

export const getUniversity = async (slug: string) => {
  const universitiesApiUrl = `${WUOLAH_API}/universities/${slug}`;

  return fetch(universitiesApiUrl, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};

export const getServerSideProps = async (
  slug: string
): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('universities', () => getUniversity(slug));
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

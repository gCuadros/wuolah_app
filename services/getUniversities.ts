import { DehydratedState, QueryClient, dehydrate } from 'react-query';

import { GetServerSideProps } from 'next';
import { WUOLAH_API } from '@/services/settings';

export const getUniversities = async () => {
  const universitiesApiUrl = `${WUOLAH_API}/universities`;

  return fetch(universitiesApiUrl, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((response) => {
      return response.data;
    });
};

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('universities', getUniversities);
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

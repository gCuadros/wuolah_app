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

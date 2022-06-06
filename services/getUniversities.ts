import { WUOLAH_API } from '@/services/settings';

export const getUniversities = async (pageSize?: number) => {
  const universitiesApiUrl = `${WUOLAH_API}/universities?pagination[pageSize]=${pageSize}`;

  return fetch(universitiesApiUrl, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((response) => {
      return {
        universties: response.data,
        pagination: response.meta.pagination,
      };
    });
};

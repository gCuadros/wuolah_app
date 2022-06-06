import { getUniversities } from '@/services/getUniversities';
import { useInfiniteQuery } from 'react-query';

export const useUniversities = () => {
  const result = useInfiniteQuery(
    ['universities'],
    ({ pageParam = 2 }) => {
      return getUniversities(pageParam);
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.pagination.pageSize === 10) {
          return false;
        }

        return lastPage.pagination.pageSize + 2;
      },
    }
  );

  const universities =
    result.data?.pages.reduce((prevMovies, page) => page.universties, []) ?? [];

  return { ...result, universities };
};

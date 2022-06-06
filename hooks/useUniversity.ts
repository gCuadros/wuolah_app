import { getUniversity } from '@/services/getUniversity';
import { useQuery } from 'react-query';

export const useUniversity = (slug: string, load: boolean) =>
  useQuery(
    ['universities', slug],
    ({ queryKey }) => getUniversity(queryKey[1]),
    { enabled: load }
  );

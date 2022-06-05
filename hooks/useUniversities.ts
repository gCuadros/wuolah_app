import { getUniversities } from '@/services/getUniversities';
import { useQuery } from 'react-query';

export const useUniversities = () => useQuery('universities', getUniversities);

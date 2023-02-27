/* eslint-disable */

import { QueryClient } from 'react-query';
import { fetchCategory } from './fetchCategory';

export default async function (id: string) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['categories', 'all'],
    queryFn: () => fetchCategory(id),
  });
  return queryClient;
}

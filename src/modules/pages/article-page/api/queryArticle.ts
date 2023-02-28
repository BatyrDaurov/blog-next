/* eslint-disable */

import { QueryClient } from 'react-query';
import { fetchArticle } from './fetchArticle';

export default async function (id: string) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['articles', 'all'],
    queryFn: () => fetchArticle(id),
  });
  return queryClient;
}

import { QueryClient } from 'react-query';
import { fetchArticles } from './fetchArticles';

export default async function (limit: number | string = 'all') {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['articles', limit],
    queryFn: () => fetchArticles(limit),
  });
  return queryClient;
}

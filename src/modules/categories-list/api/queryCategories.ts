import { QueryClient } from 'react-query';
import { fetchCategories } from './fetchCategories';

export default async function (limit: number | string = 'all') {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['categories', limit],
    queryFn: () => fetchCategories(limit),
  });
  return queryClient;
}

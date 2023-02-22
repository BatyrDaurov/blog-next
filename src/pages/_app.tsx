import type { AppProps } from 'next/app';
import 'normalize.css';
import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import './../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;

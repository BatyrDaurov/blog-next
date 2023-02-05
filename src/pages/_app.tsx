import type { AppProps } from 'next/app';
import 'normalize.css';
import './../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

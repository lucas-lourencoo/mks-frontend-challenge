import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import GlobalStyle from '../styles/global';
import Head from 'next/head';
import store from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>MKS Sistemas</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

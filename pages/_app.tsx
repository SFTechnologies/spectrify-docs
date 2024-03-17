import { AppProps } from 'next/app';
import Script from 'next/script';
import '../styles.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        defer
        data-domain='docs.spectrify.app'
        src='https://plausible.io/js/script.js'
      />
    </>
  );
}

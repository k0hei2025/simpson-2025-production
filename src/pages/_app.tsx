import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  // Get the repository name for GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/simpson-2025-production' : '';
  
  return (
    <>
      <Head>
        {/* Ensure proper base path for assets */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preload CSS with correct path */}
        <link rel="preload" href={`${basePath}/_next/static/css/app.css`} as="style" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

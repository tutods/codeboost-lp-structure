import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Favicon */}
        <link href="/assets/icons/favicon.svg" rel="shortcut icon" type="image/svg+xml" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />

        {/* Preloads */}
        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="preload"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/assets/fonts/AtypBLText-Regular.woff2"
          rel="preload"
          type="font/woff2"
        />

        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
            type="text/css"
          />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

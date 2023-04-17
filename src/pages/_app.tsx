import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import { Header } from '@components/ui/Header';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle="Môre | Talent Tech"
        description="O programa Môre Educação irá trazer novos conhecimento através de aulas teóricas e práticas focado no processo de Design Centrado no Usuário"
        titleTemplate="%s | Môre"
        openGraph={{
          type: 'website',
          locale: 'pt-BR',
          images: [
            {
              url: '/assets/images/cover.webp',
              alt: 'Môre | Talent Tech',
              width: 1920,
              height: 1080
            }
          ]
        }}
        twitter={{
          cardType: 'summary_large_image'
        }}
      />

      <Header />
      <Component {...pageProps} />
    </>
  );
}

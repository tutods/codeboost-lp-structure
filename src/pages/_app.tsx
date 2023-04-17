import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '@components/ui/Header';
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle={'Môre | Talent Tech'}
        titleTemplate={'%s | Môre'}
        description={
          'O programa Môre Educação irá trazer novos conhecimento através de aulas teóricas e práticas focado no processo de Design Centrado no Usuário'
        }
        twitter={{
          cardType: 'summary_large_image'
        }}
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
      />

      <Header />
      <Component {...pageProps} />
    </>
  );
}

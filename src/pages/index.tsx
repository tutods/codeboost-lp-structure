import dynamic from 'next/dynamic';

import { Hero } from '@components/sections/Hero';

const Cards = dynamic(() => import('@components/sections/Cards').then((module) => module.Cards));

export default function Home() {
  return (
    <main>
      <Hero />

      <Cards />
    </main>
  );
}

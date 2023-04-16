import Image from 'next/image';

export const Brands = () => (
  <ul className={'md:flex-no-wrap mb-14 flex flex-wrap gap-8 text-brand-gray opacity-80'}>
    <li>
      <Image src={'/assets/images/brands/rede.svg'} alt={'Rede'} width={80.11} height={26.24} />
    </li>
    <li>
      <Image src={'/assets/images/brands/itau.svg'} alt={'Itaú'} width={61.39} height={25.31} />
    </li>
    <li>
      <Image src={'/assets/images/brands/smiles.svg'} alt={'Smiles'} width={71.47} height={28.12} />
    </li>
    <li>
      <Image src={'/assets/images/brands/marisa.svg'} alt={'Marisa'} width={96.05} height={20.62} />
    </li>
  </ul>
);

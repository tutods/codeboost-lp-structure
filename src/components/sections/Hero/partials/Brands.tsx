import Image from 'next/image';

export const Brands = () => (
  <ul className="md:flex-no-wrap mb-14 flex flex-wrap gap-8 text-brand-gray opacity-80">
    <li>
      <Image alt="Rede" height={26.24} src="/assets/images/brands/rede.svg" width={80.11} />
    </li>
    <li>
      <Image alt="Itaú" height={25.31} src="/assets/images/brands/itau.svg" width={61.39} />
    </li>
    <li>
      <Image alt="Smiles" height={28.12} src="/assets/images/brands/smiles.svg" width={71.47} />
    </li>
    <li>
      <Image alt="Marisa" height={20.62} src="/assets/images/brands/marisa.svg" width={96.05} />
    </li>
  </ul>
);

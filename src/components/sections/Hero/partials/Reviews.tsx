import Image from 'next/image';
import { Icon } from '@components/ui/Icon';

export const Reviews = () => (
  <section className="flex items-center gap-4">
    <Image alt={'Utilizadores'} src={'/assets/images/avatars.webp'} width={124} height={28} />

    <section className={'flex items-center gap-1.5'}>
      <Icon name={'star-alt'} size={'xs'} className={'text-brand-red'} />

      <p>
        <strong>4.9</strong> (review)
      </p>
    </section>
  </section>
);

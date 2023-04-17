import Image from 'next/image';

import { Icon } from '@components/ui/Icon';

export const Reviews = () => (
  <section className="flex items-center gap-4">
    <Image alt="Utilizadores" height={28} src="/assets/images/avatars.webp" width={124} />

    <section className="flex items-center gap-1.5">
      <Icon className="text-brand-red" name="star-alt" size="xs" />

      <p>
        <strong>4.9</strong> (review)
      </p>
    </section>
  </section>
);

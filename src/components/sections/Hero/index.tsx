import dynamic from 'next/dynamic';
import Image from 'next/image';

import { Icon } from '@components/ui/Icon';

const Form = dynamic(() =>
  import('@components/sections/Hero/partials/Form').then((module) => module.Form)
);
const Brands = dynamic(() =>
  import('@components/sections/Hero/partials/Brands').then((module) => module.Brands)
);
const Reviews = dynamic(() =>
  import('@components/sections/Hero/partials/Reviews').then((module) => module.Reviews)
);
export const Hero = () => {
  return (
    <section className="bg-background py-48 md:flex md:min-h-[75vh] md:items-center md:justify-center">
      <div className="custom-container grid grid-cols-1 items-center gap-36 md:grid-cols-2">
        <section className="md:pt-4">
          <h1 className="relative mb-7 text-5xl font-semibold md:text-6xl md:leading-[77px]">
            Curso completo em design de
            <br />{' '}
            <span
              className={
                'relative z-1 after:absolute after:inset-x-0 after:bottom-2 after:-z-1 after:h-2 after:bg-brand-yellow after:content-[""] md:after:bottom-3'
              }
            >
              produto digital
            </span>
            <Icon
              className="absolute -top-8 right-0 text-brand-yellow md:top-0"
              name="star"
              size="2xl"
            />
          </h1>
          <h2 className="mb-10 text-lg">
            O programa Môre Educação irá trazer novos conhecimento através de aulas teóricas e
            práticas focado no processo de <strong>Design Centrado no Usuário</strong>
          </h2>

          <Form />
          <Brands />
          <Reviews />
        </section>
        <section className="relative hidden h-full md:block">
          <Image
            alt="Talent Tech"
            className="ml-auto block"
            height={672}
            loading="lazy"
            src="/assets/images/illustration.webp"
            width={520}
          />
        </section>
      </div>
    </section>
  );
};

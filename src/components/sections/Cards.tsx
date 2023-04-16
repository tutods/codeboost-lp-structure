import { Icon } from '@components/ui/Icon';

export const Cards = () => (
  <section className={'-mt-29 pb-16 md:pb-29'}>
    <div className="custom-container grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      <article className={'rounded-xl bg-white px-10 pb-10 pt-11 shadow-card'}>
        <Icon name={'triangle'} size={'2xl'} className={'mb-8'} />

        <h3 className="mb-1 text-2xl font-semibold">18 módulos</h3>
        <p>Trilha de design e gestão de produtos</p>
      </article>
      <article className={'rounded-xl bg-white px-10 pb-10 pt-11 shadow-card'}>
        <Icon name={'squares'} size={'2xl'} className={'mb-8'} />

        <h3 className="mb-1 text-2xl font-semibold">Aulas online e ao vivo</h3>
        <p>Terças e quintas Às 19h</p>
      </article>
      <article className={'rounded-xl bg-white px-10 pb-10 pt-11 shadow-card'}>
        <Icon name={'layers'} size={'2xl'} className={'mb-8'} />

        <h3 className="mb-1 text-2xl font-semibold">Projetos reais na prática</h3>
        <p>Consilar o conhecimento</p>
      </article>
    </div>
  </section>
);

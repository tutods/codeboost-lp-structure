import Image from 'next/image';
import { Header } from '@components/ui/Header';
import { Icon } from '@components/ui/Icon';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<section className={'bg-background py-48'}>
					<div className="custom-container grid grid-cols-1 items-center gap-36 md:grid-cols-2">
						<section>
							<h1
								className={
									'relative mb-7 text-5xl font-semibold md:text-6xl md:leading-[77px]'
								}
							>
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
									size={'2xl'}
									name={'star'}
									className={'absolute right-0 top-0 text-brand-yellow'}
								/>
							</h1>
							<p className={'mb-10 text-lg'}>
								O programa Môre Educação irá trazer novos conhecimento através de
								aulas teóricas e práticas focado no processo de{' '}
								<strong>Design Centrado no Usuário</strong>
							</p>

							<form
								className={
									'mb-14 flex w-full max-w-lg items-center justify-between gap-4 rounded-full bg-alt-white py-2.5 pl-8 pr-4 shadow-form'
								}
								onSubmit={(evt) => evt.preventDefault()}
							>
								<input
									type="email"
									name="email"
									id="email"
									aria-label={'Email'}
									placeholder={'Insira o seu email'}
									className={
										'flex-grow font-medium text-black placeholder-brand-gray outline-none'
									}
								/>
								<button
									className={
										'cursor-pointer rounded-full bg-brand-black px-7 py-4 font-titles text-sm font-medium text-alt-white transition-colors duration-300 ease-in-out hover:bg-brand-red'
									}
									type="submit"
								>
									Realizar pré-cadastro
								</button>
							</form>
							<ul
								className={
									'md:flex-no-wrap mb-14 flex flex-wrap gap-8 text-brand-gray opacity-80'
								}
							>
								<li>
									<Image
										src={'/assets/images/brands/rede.svg'}
										alt={'Rede'}
										width={80.11}
										height={26.24}
									/>
								</li>
								<li>
									<Image
										src={'/assets/images/brands/itau.svg'}
										alt={'Itaú'}
										width={61.39}
										height={25.31}
									/>
								</li>
								<li>
									<Image
										src={'/assets/images/brands/smiles.svg'}
										alt={'Smiles'}
										width={71.47}
										height={28.12}
									/>
								</li>
								<li>
									<Image
										src={'/assets/images/brands/marisa.svg'}
										alt={'Marisa'}
										width={96.05}
										height={20.62}
									/>
								</li>
							</ul>

							<section className="flex items-center gap-3">
								<Image
									alt={'Utilizadores'}
									src={'/assets/images/avatars.webp'}
									width={124}
									height={28}
								/>

								<section className={'flex items-center gap-1.5'}>
									<Icon
										name={'star-alt'}
										size={'xs'}
										className={'text-brand-red'}
									/>

									<div>
										<strong>4.9</strong> (review)
									</div>
								</section>
							</section>
						</section>
						<section className={'relative hidden h-full md:block'}>
							<Image
								src={'/assets/images/illustration.webp'}
								alt={'Talent Tech'}
								className={'ml-auto block'}
								width={520}
								height={672}
							/>
						</section>
					</div>
				</section>
			</main>
		</>
	);
}

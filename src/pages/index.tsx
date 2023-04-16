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
									'relative z-1 mb-7 text-5xl font-semibold after:absolute after:inset-x-0 after:bottom-1.5 after:-z-1 after:h-2 after:bg-brand-yellow after:content-[""] md:text-6xl md:leading-[77px] md:after:bottom-3.5 md:after:w-[435px]'
								}
							>
								Curso completo em design de produto digital
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
							<form className={'mb-14'} onSubmit={(evt) => evt.preventDefault()}>
								<input type="email" name="email" id="email" />
								<button type="submit">Realizar pré-cadastro</button>
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
								fill
							/>
						</section>
					</div>
				</section>
			</main>
		</>
	);
}

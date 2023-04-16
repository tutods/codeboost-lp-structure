import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@components/ui/Icon';

type Props = {};

export const Header = ({}: Props) => (
	<header className={'absolute left-0 right-0 top-0 w-full border-b-2 border-b-alt-white'}>
		<div className="custom-container relative flex items-center justify-between gap-2 py-10">
			<Link href={'/'} passHref aria-label={'Home | Talent Tech'}>
				<Image src={'/assets/icons/logo.svg'} alt={'Talent Tech'} width={296} height={40} />
			</Link>
			<div className="hidden max-w-95 flex-grow items-center justify-between md:flex">
				<Link
					href={'#'}
					passHref
					className={'inline-flex items-center gap-4 font-titles text-brand-black'}
				>
					<span className={'underline'}>More Design</span>
					<Icon name={'external-link'} size={'2xs'} />
				</Link>

				<ul className={'flex items-center justify-between gap-8 text-brand-black'}>
					<li>
						<Link href={'#'} passHref aria-label={'Linkedin'} target={'_blank'}>
							<Icon name={'linkedin'} size={'lg'} />
						</Link>
					</li>
					<li>
						<Link href={'#'} passHref aria-label={'Instagram'} target={'_blank'}>
							<Icon name={'instagram'} size={'lg'} />
						</Link>
					</li>
				</ul>
			</div>
			<span
				className={
					'absolute -bottom-4 rounded-full bg-alt-white px-4 py-2 font-titles text-xs uppercase text-brand-red'
				}
			>
				👉 ️ 100% Free
			</span>
		</div>
	</header>
);

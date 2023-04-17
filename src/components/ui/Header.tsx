import Image from 'next/image';
import Link from 'next/link';

import { Icon } from '@components/ui/Icon';

export const Header = () => (
  <header className="absolute left-0 right-0 top-0 w-full border-b-2 border-b-alt-white">
    <div className="custom-container relative flex items-center justify-between gap-2 py-10">
      <Link passHref aria-label="Home | Talent Tech" href="/">
        <Image alt="Talent Tech" height={40} src="/assets/images/logo.svg" width={296} />
      </Link>
      <div className="hidden max-w-95 flex-grow items-center justify-between md:flex">
        <Link
          passHref
          className="inline-flex items-center gap-4 font-titles text-brand-black"
          href="#"
        >
          <span className="underline">More Design</span>
          <Icon name="external-link" size="2xs" />
        </Link>

        <ul className="flex items-center justify-between gap-8 text-brand-black">
          <li>
            <Link passHref aria-label="Linkedin" href="#" target="_blank">
              <Icon name="linkedin" size="lg" />
            </Link>
          </li>
          <li>
            <Link passHref aria-label="Instagram" href="#" target="_blank">
              <Icon name="instagram" size="lg" />
            </Link>
          </li>
        </ul>
      </div>
      <span className="absolute -bottom-4 rounded-full border border-brand-red bg-alt-white px-4 py-2 font-titles text-xs uppercase text-brand-red shadow">
        👉 ️ 100% Free
      </span>
    </div>
  </header>
);

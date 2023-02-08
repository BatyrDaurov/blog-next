import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import s from './Header.module.scss';

type LinkType = {
  label: string;
  url: string;
};
type Props = {
  links: LinkType[];
};

const Header = ({ links }: Props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <header className={s.header}>
      <div className={`container ${s.header__container}`}>
        <Link href="/" className={`${s.logo} ${s.header__logo}`}>
          <span className={s.logo__sup}>Batyr</span>
          <span className={s.logo__sub}>.blog</span>
        </Link>
        <nav
          className={`${s.header__nav} ${
            menuIsOpen && `${s.header__nav_active}`
          }`}
        >
          {links.map((el: LinkType) => (
            <Link className={s.header__link} key={el.url} href={el.url}>
              {el.label}
            </Link>
          ))}
          <button className={`btn-reset ${s.header__btn}`}>
            <Image
              src="icons/coffee.svg"
              width={24}
              height={24}
              aria-hidden="true"
              alt=""
            />
            Buy Me a Coffee
          </button>
        </nav>
        <button
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          className={`btn-reset ${s.burger} ${
            menuIsOpen && `${s.burger__active}`
          }`}
        >
          <span className={s.burger__line}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

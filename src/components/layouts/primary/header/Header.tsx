import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LINKS } from '../../../../constants/links/headerLinks';
import type { HeaderLinkType } from '../../../../constants/links/types';
import { useCustomSelector } from '../../../../hooks/store';
import UserInfo from '../../../Global/user-info/UserInfo';
import s from './Header.module.scss';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const user = useCustomSelector((state) => state.LoginReducer);

  return (
    <header className={s.header}>
      <div className={`container ${s.header__container}`}>
        <Link href="/" className={`${s.logo} ${s.header__logo}`}>
          <span className={s.logo__sup}>Batyr</span>
          <span className={s.logo__sub}>.blog</span>
        </Link>
        <nav
          className={`${s.header__nav} ${menuIsOpen && `${s.header__nav_active}`
            }`}
        >
          {LINKS.map((el: HeaderLinkType) => (
            <Link className={s.header__link} key={el.url} href={el.url}>
              {el.label}
            </Link>
          ))}
          {user.status === 'activated' ? (
            <UserInfo user={user} />
          ) : (
            <Link href="/auth" className={`link-reset ${s.header__btn}`}>
              <Image
                src="/icons/coffee.svg"
                width={24}
                height={24}
                aria-hidden="true"
                alt="Icon | Batyr.blog"
              />
              Authorization
            </Link>
          )}
        </nav>
        <button
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          className={`btn-reset ${s.burger} ${menuIsOpen && `${s.burger__active}`
            }`}
        >
          <span className={s.burger__line}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

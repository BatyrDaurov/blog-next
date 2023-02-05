import Link from 'next/link';
import s from './Header.module.scss';

type LinkType = {
  label: string;
  url: string;
};
type Props = {
  links: LinkType[];
};

const Header = ({ links }: Props) => {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <div className={`${s.logo} ${s.header__logo}`}>
          <span className={s.logo__sup}>Batyr</span>
          <span className={s.logo__sub}>.blog</span>
        </div>
        <nav className={s.header__nav}>
          {links.map((el: LinkType) => (
            <Link className={s.header__link} key={el.url} href={el.url}>
              {el.label}
            </Link>
          ))}
          <button className={`btn-reset ${s.header__btn}`}>
            <img src="icons/coffee.svg" aria-hidden="true" />
            Buy Me a Coffee
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

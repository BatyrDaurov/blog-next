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
      <div className={`${s.logo} ${s.header__logo}`}>
        <span className={s.logo__sup}>Batyr</span>
        <span className={s.logo__sub}>.Blog</span>
      </div>
      <nav className={`${s.nav} ${s.header__nav}`}>
        {links.map((el: LinkType) => (
          <Link key={el.url} href={el.url}>
            {el.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;

import Image from 'next/image';
import Link from 'next/link';
import { CategoriesType } from '../../../../@types';
import { SOCIALS } from '../../../../constants/header-links/footerLinks';
import s from './Footer.module.scss';

type Props = {
  categories?: CategoriesType[];
};

const Footer = ({ categories }: Props) => {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.footer__container}`}>
        <div className={s.footer__top}>
          <div className={s.footer__info}>
            <Link href="/" className={s.logo}>
              <span className={s.logo__sup}>Batyr</span>
              <span className={s.logo__sub}>.blog</span>
            </Link>
            <p className={s.footer__descr}>Made by Batyr Daurov</p>
            <ul className={`list-reset ${s.footer__socials}`}>
              {SOCIALS.map((social) => (
                <li key={social.name}>
                  <Link href={social.url}>
                    <Image
                      src={social.image}
                      width={24}
                      height={24}
                      alt={`${social.name} link | Batyr.blog`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className={`list-reset ${s.grid}`}>
            <li className={s.grid__item}>
              <h4 className={s.grid__title}>Category</h4>
              <div className={s.grid__links}>
                {categories &&
                  categories.map((category) => (
                    <Link
                      key={category.title}
                      className={`link-reset ${s.grid__link}`}
                      href={`categories/${category.title}`}
                    >
                      {category.title}
                    </Link>
                  ))}
                <Link
                  className={`link-reset ${s.grid__link}`}
                  href={`articles`}
                >
                  More articles
                </Link>
              </div>
            </li>
            <li className={s.grid__item}>
              <h4 className={s.grid__title}>About Me</h4>
              <div className={s.grid__links}>
                <Link
                  className={`link-reset ${s.grid__link}`}
                  href="https://github.com/BatyrDaurov"
                >
                  About Me
                </Link>
                <Link
                  className={`link-reset ${s.grid__link}`}
                  href="https://github.com/BatyrDaurov?tab=repositories"
                >
                  Projects
                </Link>
                <Link
                  className={`link-reset ${s.grid__link}`}
                  href="https://github.com/BatyrDaurov?tab=achievements"
                >
                  Achievement
                </Link>
              </div>
            </li>
            <li className={s.grid__item}>
              <h4 className={s.grid__title}>Get in touch</h4>
              <div className={s.grid__links}>
                <Link
                  className={`link-reset ${s.grid__link}`}
                  href="tel:+7 (900) 232-85-65"
                >
                  +7 (900) 232-85-65
                </Link>
                <Link
                  className={`link-reset ${s.grid__link}`}
                  href="mailto:batyr.daurov@mail.ru"
                >
                  batyr.daurov@mail.ru
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className={s.footer__bottom}>
          <span className={s.footer__copyright}>© 2022 Digitalbatyr</span>
          <p className={s.footer__secret}>Made With ❤️ Maykop, Adyghea</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

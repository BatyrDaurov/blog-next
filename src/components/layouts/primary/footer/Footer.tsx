import Image from 'next/image';
import Link from 'next/link';
import s from './Footer.module.scss';

const socials = [
  {
    url: '/',
    name: 'LinkedIn',
    image: '/icons/socials/linkedin.svg',
  },
  {
    url: '/',
    name: 'Github',
    image: '/icons/socials/linkedin.svg',
  },
  {
    url: '/',
    name: 'Telegram',
    image: '/icons/socials/linkedin.svg',
  },
];

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.footer__container}`}>
        <div className={s.footer__top}>
          <div className={s.footer__info}>
            <Link href="/" className={s.logo}>
              <span className={s.logo__sup}>Batyr</span>
              <span className={s.logo__sub}>.blog</span>
            </Link>
            <p className={s.footer__descr}>Digitaldastin by Dastin Darmawan</p>
            <ul className={`list-reset ${s.footer__socials}`}>
              {socials.map((social) => (
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
                <Link className={`link-reset ${s.grid__link}`} href="/">
                  CSS
                </Link>
                <Link className={`link-reset ${s.grid__link}`} href="/">
                  Javascript
                </Link>
                <Link className={`link-reset ${s.grid__link}`} href="/">
                  Tailwind
                </Link>
                <Link className={`link-reset ${s.grid__link}`} href="/">
                  React JS
                </Link>
                <Link className={`link-reset ${s.grid__link}`} href="/">
                  More Category
                </Link>
              </div>
            </li>
            <li className={s.grid__item}>
              <h4 className={s.grid__title}>About Me</h4>
              <div className={s.grid__links}>
                <Link className={`link-reset ${s.grid__link}`} href="/">
                  About Me
                </Link>
                <Link className={`link-reset ${s.grid__link}`} href="/">
                  Projects
                </Link>
                <Link className={`link-reset ${s.grid__link}`} href="/">
                  Achievement
                </Link>
              </div>
            </li>
            <li className={s.grid__item}>
              <h4 className={s.grid__title}>Get in touch</h4>
              <div className={s.grid__links}>
                <Link className={`link-reset ${s.grid__link}`} href="/">
                  +62-8XXX-XXX-XX
                </Link>
                <Link className={`link-reset ${s.grid__link}`} href="/">
                  demo@gmail.com
                </Link>
              </div>
            </li>
            <li className={s.grid__item}>
              <h4 className={s.grid__title}>Follow Us</h4>
              <div className={s.grid__links}>
                <Link className={`link-reset ${s.grid__link}`} href="/">
                  Medium
                </Link>
                <Link className={`link-reset ${s.grid__link}`} href="/">
                  Instagram
                </Link>
                <Link className={`link-reset ${s.grid__link}`} href="/">
                  Twitter
                </Link>
                <Link className={`link-reset ${s.grid__link}`} href="/">
                  Facebook
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className={s.footer__bottom}>
          <span className={s.footer__copyright}>© 2022 Digitaldastin</span>
          <p className={s.footer__secret}>Made With ❤️ Maykop, Adyghea</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

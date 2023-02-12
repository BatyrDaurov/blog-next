import Link from 'next/link';
import React from 'react';
import s from './ButtonArticleSlide.module.scss';

type Props = {
  children: React.ReactNode;
  isNextSlide: boolean;
  href: string;
};

const ButtonArticleSlide = ({ children, isNextSlide, href }: Props) => {
  if (isNextSlide) {
    return (
      <Link href={href} className={`link-reset ${s.button}`}>
        {children}
      </Link>
    );
  } else {
    return (
      <Link href={href} className={`link-reset ${s.button}`}>
        {children}
      </Link>
    );
  }
};

export default ButtonArticleSlide;

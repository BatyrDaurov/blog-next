import Link from 'next/link';
import React from 'react';
import s from './ButtonArticleSlide.module.scss';

type Props = {
  children: React.ReactNode;
  isNextSlide: boolean;
};

const ButtonArticleSlide = ({ children, isNextSlide }: Props) => {
  if (isNextSlide) {
    return (
      <Link href="/" className={`link-reset ${s.button}`}>
        {children}
      </Link>
    );
  } else {
    return (
      <Link href="/" className={`link-reset ${s.button}`}>
        {children}
      </Link>
    );
  }
};

export default ButtonArticleSlide;

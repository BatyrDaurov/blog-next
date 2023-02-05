import React from 'react';
import s from './PrimaryButton.module.scss';

const PrimaryButton = ({ children }: React.PropsWithChildren) => {
  return <button className={s.button}>{children}</button>;
};

export default PrimaryButton;

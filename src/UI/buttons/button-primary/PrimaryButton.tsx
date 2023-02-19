import React from 'react';
import s from './PrimaryButton.module.scss';

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
};

const PrimaryButton = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`btn-reset ${s.button}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;

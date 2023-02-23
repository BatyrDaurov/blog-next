import React from 'react';
import s from './PrimaryButton.module.scss';

type Props = {
  onClick?: (event?: any) => void; // eslint-disable-line no-unused-vars
  children: React.ReactNode;
  onSubmit?: (event?: any) => Promise<void>; // eslint-disable-line no-unused-vars
};

const PrimaryButton = ({ children, onClick, onSubmit }: Props) => {
  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      className={`btn-reset ${s.button}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

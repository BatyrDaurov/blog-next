import React from 'react';
import s from './PrimaryButton.module.scss';

type Props = {
  onClick?: (event?: any) => void; // eslint-disable-line no-unused-vars
  children: React.ReactNode;
  onSubmit?: (event?: any) => Promise<void>; // eslint-disable-line no-unused-vars
  submit?: boolean;
  disable?: boolean;
};

const PrimaryButton = ({
  children,
  onClick,
  onSubmit,
  submit,
  disable,
}: Props) => {
  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      className={`btn-reset ${s.button}`}
      type={submit ? 'submit' : 'button'}
      disabled={disable}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

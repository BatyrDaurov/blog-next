import s from './InputMail.module.scss';

type Props = {
  placeholder: string;
};

const InputMail = ({ placeholder }: Props) => {
  return (
    <input
      className={`input-reset ${s.input}`}
      type="email"
      placeholder={placeholder}
    />
  );
};

export default InputMail;

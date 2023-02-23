import s from './InputTitle.module.scss';

type Props = {
  placeholder: string;
  title?: string;
  onChange?: (event?: any) => void; // eslint-disable-line no-unused-vars
};

const InputTitle = ({ placeholder, title, onChange }: Props) => {
  return (
    <input
      className={`input-reset ${s.input}`}
      type="text"
      placeholder={placeholder}
      value={title}
      onChange={onChange}
    />
  );
};

export default InputTitle;

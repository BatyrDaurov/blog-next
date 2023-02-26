import Image from 'next/image';
import s from './InputForm.module.scss';
type Props = {
  type: 'password' | 'email' | 'text';
  placeholder: string;
  icon?: string;
  onClickIcon?: () => void;
  register?: any;
};

const InputForm = (args: Props) => {
  if (args.icon) {
    return (
      <div className={s.wrapper}>
        <input
          className={`input-reset ${s.input}`}
          placeholder={args.placeholder}
          type={args.type}
          {...args.register}
        />
        <button
          type="button"
          onClick={args.onClickIcon}
          className={`btn-reset ${s.icon}`}
        >
          <Image src={args.icon} alt="Icon | Batyr.blog" fill />
        </button>
      </div>
    );
  } else {
    return (
      <input
        className={`input-reset ${s.input}`}
        placeholder={args.placeholder}
        type={args.type}
        {...args.register}
      />
    );
  }
};

export default InputForm;

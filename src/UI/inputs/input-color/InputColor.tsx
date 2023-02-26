import { Dispatch, SetStateAction } from 'react';
import { TagsType } from '../../../@types/TagsType';
import s from './InputColor.module.scss';

type Props = {
  setTag: Dispatch<SetStateAction<TagsType>>;
  tag: TagsType;
  label: string;
  value: string;
};

const InputColor = ({ setTag, tag, label, value }: Props) => {
  return (
    <div className={s.wrapper}>
      <label htmlFor={value}>{label}</label>
      <input
        className={`input-reset`}
        type="color"
        name={value}
        id={value}
        onChange={(e) =>
          setTag((prev) => ({ ...prev, [value]: e.target.value }))
        }
        // @ts-ignore
        value={tag[value]}
      />
    </div>
  );
};

export default InputColor;

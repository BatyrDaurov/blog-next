import Image from 'next/image';
import s from './ButtonUploadImage.module.scss';

type Props = {
  children: string;
  onClick?: () => void;
};

const ButtonUploadImage = ({ children, onClick }: Props) => {
  return (
    <button className={`btn-reset ${s.button}`} onClick={onClick}>
      <Image
        src="/icons/upload.svg"
        width={24}
        height={24}
        alt="Upload Button | Batyr.blog"
      />
      <span>{children}</span>
    </button>
  );
};

export default ButtonUploadImage;

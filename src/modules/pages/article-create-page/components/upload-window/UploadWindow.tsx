import Image from 'next/image';
import { useRef } from 'react';
import { ButtonUploadImage } from '../../../../../UI/buttons';
import s from './UploadWindow.module.scss';

type Props = {
  handleChangeFile: (event: any) => void; // eslint-disable-line no-unused-vars
  banner: string;
};

const UploadWindow = ({ handleChangeFile, banner }: Props) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  return (
    <div className={s.window}>
      {banner ? (
        <Image src={banner} alt={banner} fill />
      ) : (
        <>
          <input
            onChange={handleChangeFile}
            type="file"
            className={s.window__input}
            ref={inputFileRef}
          />
          <ButtonUploadImage
            onClick={() => {
              if (inputFileRef.current) {
                inputFileRef.current.click();
              }
            }}
          >
            Upload Image
          </ButtonUploadImage>
          <span className={s.window__message}>Перетащите сюда файл</span>
        </>
      )}
    </div>
  );
};

export default UploadWindow;

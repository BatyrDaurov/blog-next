import axios from 'axios';
import { setArticleStateType } from '../types';

export const handleChangeFile =
  (setArticle: setArticleStateType, token: string) => async (event: any) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}upload`,
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setArticle((prev: any) => ({
        ...prev,
        banner: `${process.env.NEXT_PUBLIC_API_URL}${data.url}`,
      }));
    } catch (error) {
      console.warn(error);
    }
  };

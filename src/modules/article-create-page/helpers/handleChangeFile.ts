import axios from 'axios';
import { setArticleStateType } from '../types';

export const handleChangeFile =
  (setArticle: setArticleStateType, token: string) => async (event: any) => {
    try {
      const serverLink = 'http://localhost:4444';
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const { data } = await axios.post(`${serverLink}/upload`, formData, {
        headers: {
          Authorization:
            token,
        },
      });
      setArticle((prev: any) => ({
        ...prev,
        banner: `${serverLink}${data.url}`,
      }));
    } catch (error) {
      console.warn(error);
    }
  };

import axios from 'axios';
import { setArticleStateType } from '../types';

export const handleChangeFile =
  (setArticle: setArticleStateType) => async (event: any) => {
    try {
      const serverLink = 'http://localhost:4444';
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const { data } = await axios.post(`${serverLink}/upload`, formData, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VmODQzOGEzMWU0ZWFiZWZmZDY3YmQiLCJpYXQiOjE2NzcxNTg1NTQsImV4cCI6MTY3OTc1MDU1NH0.FXy-IuFIkSfk7a8dg4dASFgyCTbxnW3DSRF4mZH_DzI',
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

import { NextRouter } from 'next/router';
import api from '../../../../axios.config';
import { ArticleStateType } from '../types';

export const onSubmit =
  (article: ArticleStateType, token: string, router: NextRouter) => async () => {
    try {
      const { data } = await api.post(
        `${process.env.NEXT_PUBLIC_API_URL}articles`,
        article,
        {
          headers: {
            Authorization:
              token,
          },
        }
      );

      router.push(`/articles/${data._id}`);
    } catch (error) {
      console.warn(error);
    }
  };

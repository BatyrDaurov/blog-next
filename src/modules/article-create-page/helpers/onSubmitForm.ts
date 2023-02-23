import axios from 'axios';
import { ArticleStateType } from '../types';

export const onSubmit =
  (article: ArticleStateType, isEditing: boolean, router: any) => async () => {
    try {
      // const { data } = isEditing
      //   ? await api.patch(`/articles/${router.query.id}`, fields)
      //   : await api.post('/articles', fields);
      const { data } = await axios.post(
        'http://localhost:4444/articles',
        article,
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VmODQzOGEzMWU0ZWFiZWZmZDY3YmQiLCJpYXQiOjE2NzcxNTk1OTYsImV4cCI6MTY3OTc1MTU5Nn0.i3LW0MkWslwhQxmYLpAPYn5XFPnYJm23usxuse7IjP8',
          },
        }
      );

      router.push(`/articles/${data._id}`);
    } catch (error) {
      console.warn(error);
    }
  };

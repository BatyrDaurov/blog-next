import { useCallback } from 'react';
import { setArticleStateType } from '../types/setArticleStateType';

export const OnChangeTitle = (setArticle: setArticleStateType) =>
  useCallback(
    (event: any) => {
      setArticle((prev) => ({
        ...prev,
        title: event.target.value,
      }));
    },
    [setArticle]
  );

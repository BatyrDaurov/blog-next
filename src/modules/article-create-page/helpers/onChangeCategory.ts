import { useCallback } from 'react';
import { setArticleStateType } from '../types/setArticleStateType';

export const OnChangeCategory = (setArticle: setArticleStateType) =>
  useCallback(
    (event: any) => {
      setArticle((prev) => ({
        ...prev,
        category: event.target.value,
      }));
    },
    [setArticle]
  );

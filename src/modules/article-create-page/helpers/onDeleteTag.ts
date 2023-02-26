import { ArticleStateType } from '../types/ArticleStateType';
import { setArticleStateType } from '../types/setArticleStateType';

export const onDeleteTag =
  (setArticle: setArticleStateType, tagName: string) => () => {
    setArticle((prev: ArticleStateType) => ({
      ...prev,
      tags: prev.tags?.filter((el: any) => el.name !== tagName),
    }));
  };

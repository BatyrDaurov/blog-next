import { UserType } from '../../../@types';

export const getIsLiked = (user: UserType, id: string) => {
  if (user.likedArticles) {
    user.likedArticles.map((likedArticle: string) => {
      if (likedArticle === id) {
        return true;
      }
    });
  }
  return false;
};

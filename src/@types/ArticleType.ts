import { AuthorType } from './AuthorType';

export type ArticleType = {
  _id: string;
  banner?: string;
  tags: any[];
  title: string;
  markdown: string;
  viewsCount: number;
  likes: number;
  shares: number;
  category: string;
  favourites: number;
  author: AuthorType;
  createdAt: Date;
  comments?: any;
};

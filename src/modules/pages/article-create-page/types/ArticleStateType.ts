import { TagsType } from '../../../@types/TagsType';

export type ArticleStateType = {
  banner: string;
  title: string;
  markdown: string;
  tags?: TagsType[];
  category?: string;
};

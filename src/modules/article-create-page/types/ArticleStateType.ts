import { TagType } from '../../../@types/TagType';

export type ArticleStateType = {
  banner: string;
  title: string;
  markdown: string;
  tags?: TagType[];
  category?: string;
};

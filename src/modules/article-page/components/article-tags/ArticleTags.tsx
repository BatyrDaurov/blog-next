// @ts-nocheck
import Link from 'next/link';
import { TagsType } from '../../../../@types/TagsType';
import s from './ArticleTags.module.scss';

type Props = {
  tags: TagsType[];
};

const ArticleTags = ({ tags }: Props) => {
  return (
    <ul className={`list-reset ${s.tags}`}>
      {tags.map((tag) => (
        <li
          key={tag.tagName}
          className={s.tag}
          style={{
            '--tag-bg': tag.tagBgColor,
            '--tag-border': tag.tagBorderColor,
            '--tag-bg-hover': tag.tagBgHover,
            '--tag-border-hover': tag.tagBorderHover,
            '--tag-prefix': tag.tagPrefixColor,
          }}
        >
          <Link href="" className={`link-reset ${s.tag__text}`}>
            <span>#</span>
            {tag.tagName}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticleTags;

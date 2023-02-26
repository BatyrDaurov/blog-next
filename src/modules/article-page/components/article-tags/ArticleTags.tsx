// @ts-nocheck
import Link from 'next/link';
import { TagType } from '../../../../@types/TagType';
import s from './ArticleTags.module.scss';

type Props = {
  tags: TagType[];
};

const ArticleTags = ({ tags }: Props) => {
  return (
    <ul className={`list-reset ${s.tags}`}>
      {tags.map((tag) => (
        <li
          key={tag.tagName}
          className={s.tag}
          style={{
            '--tag-bg': tag.background,
            '--tag-border': tag.border,
            '--tag-bg-hover': tag.hoverBackground,
            '--tag-border-hover': tag.hoverBorder,
            '--tag-prefix': tag.prefix,
            '--tag-color': tag.prefix,
          }}
        >
          <Link href="" className={`link-reset ${s.tag__text}`}>
            <span className={s.tag__hash}>#</span>
            {tag.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticleTags;

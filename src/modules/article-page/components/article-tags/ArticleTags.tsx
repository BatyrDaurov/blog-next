// @ts-nocheck
import Link from 'next/link';
import s from './ArticleTags.module.scss';
type Props = {
  tags: string[];
};

const ArticleTags = ({ tags }: Props) => {
  return (
    <ul className={`list-reset ${s.tags}`}>
      {tags.map((tag: string) => (
        <li
          key={tag}
          className={s.tag}
          style={{
            '--tag-bg': '#FFFCF6',
            '--tag-border': '#FBF6EC',
            '--tag-bg-hover': '#FFF6E3',
            '--tag-border-hover': '#FFEAC2',
            '--tag-prefix': '#D8A340',
          }}
        >
          <Link href="" className={`link-reset ${s.tag__text}`}>
            <span>#</span>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticleTags;

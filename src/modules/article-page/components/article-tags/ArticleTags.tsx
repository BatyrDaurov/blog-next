// @ts-nocheck
import Link from 'next/link';
import s from './ArticleTags.module.scss';
type Props = {};

const ArticleTags = (props: Props) => {
  const tags = [
    {
      url: '/articles/1',
      label: 'javascript',
      styles: {
        prefix: '#D8A340',
        background: {
          normal: '#FFFCF6',
          hover: '#FFF6E3',
        },
        border: {
          normal: '#FBF6EC',
          hover: '#FFEAC2',
        },
      },
    },
    {
      url: '/articles/1',
      label: 'docker',
      styles: {
        prefix: '#2562FF',
        background: {
          normal: '#F3F9FF',
          hover: '#DCEEFF',
        },
        border: {
          normal: '#DEE7FF',
          hover: '#C2D3FF',
        },
      },
    },
    {
      url: '/articles/1',
      label: 'docker',
      styles: {
        prefix: '#2562FF',
        background: {
          normal: '#F3F9FF',
          hover: '#DCEEFF',
        },
        border: {
          normal: '#DEE7FF',
          hover: '#C2D3FF',
        },
      },
    },
  ];
  return (
    <ul className={`list-reset ${s.tags}`}>
      {tags.map((tag) => (
        <li
          key={tag.label}
          className={s.tag}
          style={{
            '--tag-bg': tag.styles.background.normal,
            '--tag-border': tag.styles.border.normal,
            '--tag-bg-hover': tag.styles.background.hover,
            '--tag-border-hover': tag.styles.border.hover,
            '--tag-prefix': tag.styles.prefix,
          }}
        >
          <Link href={tag.url} className={`link-reset ${s.tag__text}`}>
            <span>#</span>
            {tag.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticleTags;

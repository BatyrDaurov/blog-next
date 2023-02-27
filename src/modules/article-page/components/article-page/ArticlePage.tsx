import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { ArticleType } from '../../../../@types';
import { ErrorMessage } from '../../../../components';
import ArticleReact from '../article-react/ArticleReact';
import ArticleTags from '../article-tags/ArticleTags';
import s from './ArticlePage.module.scss';

type Props = {
  token: string;
  article: ArticleType | null;
};

const ArticlePage = ({ article, token }: Props) => {
  if (article === null) {
    return <ErrorMessage redirectURL="/" message="I don't know this place ☹" />;
  }
  return (
    <section className="container">
      <div className={s.page}>
        <article className={s.article}>
          {article.banner && (
            <div className={s.article__banner}>
              <Image
                src={article.banner}
                objectFit="cover"
                fill
                alt={article.title}
              />
            </div>
          )}
          <div className={s.article__info}>
            <ArticleTags tags={article.tags} />
            <h1 className={s.article__title}>{article.title}</h1>
            <Link
              href={`/categories/${article.category}`}
              className={`${s.article__category} link-reset`}
            >
              {article.category}
            </Link>
            <div className={s.article__markdown}>
              <ReactMarkdown>{article.markdown}</ReactMarkdown>
            </div>
          </div>
        </article>
        <ArticleReact token={token} article={article} />
      </div>
      {/* <ArticleNavigation /> */}
    </section>
  );
};

export default ArticlePage;

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { ArticleType } from '../../../../@types';
import { ErrorMessage } from '../../../../components';
import ArticleNavigation from '../article-navigation/ArticleNavigation';
import ArticleReact from '../article-react/ArticleReact';
import ArticleTags from '../article-tags/ArticleTags';
import s from './ArticlePage.module.scss';

type Props = {
  article: ArticleType | null;
};

const ArticlePage = ({ article }: Props) => {
  if (article === null) {
    return <ErrorMessage redirectURL='/' message="I don't know this place ☹" />
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
            <ReactMarkdown>{article.markdown}</ReactMarkdown>
          </div>
        </article>
        <ArticleReact
          views={article.viewsCount}
          likes={article.likes}
          id={article._id}
        />
      </div>
      <ArticleNavigation />
    </section>
  );
};

export default ArticlePage;

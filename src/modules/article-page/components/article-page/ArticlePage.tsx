import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import type { Post } from '../../../articles/components/articles/Articles';
import ArticleNavigation from '../article-navigation/ArticleNavigation';
import ArticleReact from '../article-react/ArticleReact';
import ArticleTags from '../article-tags/ArticleTags';
import s from './ArticlePage.module.scss';

type Props = {
  article: Post;
};

const ArticlePage = ({ article }: Props) => {
  return (
    <section className="container">
      <div className={s.page}>
        <article className={s.article}>
          <div className={s.article__banner}>
            <Image src="/banner_post.jpeg" objectFit="cover" fill alt="" />
          </div>
          <div className={s.article__info}>
            <ArticleTags />
            <h1 className={s.article__title}>{article.title}</h1>
            <ReactMarkdown>{article.markdown}</ReactMarkdown>
          </div>
        </article>
        <ArticleReact />
      </div>
      <ArticleNavigation />
    </section>
  );
};

export default ArticlePage;

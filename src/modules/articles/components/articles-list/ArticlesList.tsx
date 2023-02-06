import Link from 'next/link';
import ArticleCard from '../article-card/ArticleCard';
import { PostsList } from '../articles/Articles';
import s from './ArticlesList.module.scss';

type Props = {
  articles: PostsList;
};

const ArticlesList = ({ articles }: Props) => {
  return (
    <>
      <div className={s.articles}>
        <div className={s.articles__head}>
          <h2 className={s.articles__title}>{articles.category}</h2>
          <Link href="/" className={`link-reset ${s.articles__see}`}>
            See all category
          </Link>
        </div>
        <div className={s.articles__cards}>
          {articles.posts.map((el) => (
            <ArticleCard key={el.title} article={el} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticlesList;

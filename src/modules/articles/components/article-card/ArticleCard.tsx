import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../articles/Articles';
import s from './ArticleCard.module.scss';

type Props = {
  article: Post;
};

const ArticleCard = ({ article }: Props) => {
  return (
    <article className={s.article}>
      <div className={s.article__head}>
        <div className={s.article__banner}>
          <Image
            src={article.img}
            width={260}
            height={198}
            alt={article.title}
          />
        </div>
        <h4 className={s.article__title}>
          <Link href="" className="link-reset">
            {article.title}
          </Link>
        </h4>
      </div>
      <div className={s.article__footer}>
        <div className={`${s.author} ${s.article__author}`}>
          <Link href="" className="link-reset">
            <Image
              src={article.author.img}
              width={57}
              height={57}
              alt={`${article.author.name} | Batyr.blog`}
            />
          </Link>

          <div className={s.author__info}>
            <Link
              href={`user/` + article.author.name.toLowerCase()}
              className={`link-reset ${s.author__name}`}
            >
              {article.author.name}
            </Link>
            <p className={s.author__date}>{article.author.date}</p>
          </div>
        </div>
        <p className={s.author__time}>{article.readTime} Min Read</p>
      </div>
    </article>
  );
};

export default ArticleCard;

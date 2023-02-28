import Image from 'next/image';
import Link from 'next/link';
import { ArticleType } from '../../../@types';
import { useCustomSelector } from '../../../hooks/store';
import { deleteArticle } from '../../../utils/deleteArticle';
import getFormatDate from '../../../utils/getFormatDate';
import s from './ArticlesCard.module.scss';

type Props = {
  article: ArticleType;
  token?: string;
};

const ArticlesCard = ({ article, token }: Props) => {
  const role = useCustomSelector((state) => state.LoginReducer.user.role);
  const date = getFormatDate(article.createdAt);
  return (
    <article className={s.article}>
      {role === 'admin' && token && (
        <button
          onClick={deleteArticle(article._id, token)}
          className={`btn-reset ${s.article__delete}`}
          aria-label="Delete article button"
        >
          <Image
            src="/icons/trash.svg"
            width={30}
            height={30}
            alt="Delete article | Batyr.blog"
          />
        </button>
      )}
      <div className={s.article__head}>
        {article.banner && (
          <div className={s.article__banner}>
            <Image
              src={article.banner}
              fill
              alt={article.title}
              objectFit="cover"
            />
          </div>
        )}
        <h4 className={s.article__title}>
          <Link href={`/articles/${article._id}`} className="link-reset">
            {article.title}
          </Link>
        </h4>
      </div>
      <footer className={s.article__footer}>
        <div className={`${s.author} ${s.article__author}`}>
          {article.author.avatarURL && (
            <Image
              src={article.author.avatarURL}
              width={55}
              height={55}
              className={s.author__banner}
              objectFit={'cover'}
              loading="lazy"
              alt={`${article.author.name} | Batyr.blog`}
            />
          )}
          <div className={s.author__info}>
            <Link
              href={`user/` + article.author.name.toLowerCase()}
              className={`link-reset ${s.author__name}`}
            >
              {article.author.name} {article.author.surname}
            </Link>
            <p className={s.author__date}>{date}</p>
          </div>
        </div>
        <p className={s.author__category}>{article.category}</p>
      </footer>
    </article>
  );
};

export default ArticlesCard;

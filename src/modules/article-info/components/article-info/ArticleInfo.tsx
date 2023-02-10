import Image from 'next/image';
import ArticleTags from '../article-tags/ArticleTags';
import s from './ArticleInfo.module.scss';

type Props = {};

const ArticleInfo = (props: Props) => {
  return (
    <section className="container">
      <article className={s.article}>
        <div className={s.article__banner}>
          <Image src="/banner_post.jpeg" objectFit="cover" fill alt="" />
        </div>
        <div className={s.article__info}>
          <ArticleTags />
          <div className={s.article__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus vitae temporibus voluptates perspiciatis fugiat culpa
            modi quia sed non tempore expedita, excepturi beatae et nemo
            facilis. Dolore corporis quibusdam nisi. <br /> Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Necessitatibus vitae
            temporibus voluptates perspiciatis fugiat culpa modi quia sed non
            tempore expedita, excepturi beatae et nemo facilis. Dolore corporis
            quibusdam nisi. <br /> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Necessitatibus vitae temporibus voluptates
            perspiciatis fugiat culpa modi quia sed non tempore expedita,
            excepturi beatae et nemo facilis. Dolore corporis quibusdam nisi.
          </div>
        </div>
      </article>
    </section>
  );
};

export default ArticleInfo;

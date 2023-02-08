import Link from 'next/link';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
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
        <Swiper
          breakpoints={{
            320: {
              spaceBetween: 10,
              slidesPerView: 'auto',
            },
            1280: {
              spaceBetween: 16,
              slidesPerView: 4,
            },
          }}
          className={s.articles__cards}
        >
          {articles.posts.map((el) => (
            <SwiperSlide key={el.title} className={s.swiperCard}>
              <ArticleCard article={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ArticlesList;

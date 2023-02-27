import Link from 'next/link';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CategoriesType } from '../../../../@types/CategoriesType';
import ArticleCard from '../article-card/ArticleCard';
import s from './ArticlesList.module.scss';

type Props = {
  category: CategoriesType;
};

const ArticlesList = ({ category }: Props) => {
  return (
    <>
      <div className={s.articles}>
        <div className={s.articles__head}>
          <h2 className={s.articles__title}>{category.title}</h2>
          <Link
            href={`/categories/${category.title}`}
            className={`link-reset ${s.articles__see}`}
          >
            See all category
          </Link>
        </div>
        <Swiper
          breakpoints={{
            220: {
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
          {category.articles.map((articles) => (
            <SwiperSlide key={articles.title} className={s.swiperCard}>
              <ArticleCard article={articles} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ArticlesList;

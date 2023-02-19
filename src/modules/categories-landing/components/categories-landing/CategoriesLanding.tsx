import Link from 'next/link';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryCard from '../category-card/CategoryCard';
import s from './CategoriesLanding.module.scss';

const fake = [
  {
    image: 'icons/tailwind.svg',
    title: 'Tailwind',
  },
  {
    image: 'icons/tailwind.svg',
    title: 'CSS',
  },
  {
    image: 'icons/tailwind.svg',
    title: 'Javascript',
  },
  {
    image: 'icons/tailwind.svg',
    title: 'React JS',
  },
  {
    image: 'icons/tailwind.svg',
    title: 'Vue JS',
  },
];

const CategoriesLanding = () => {
  return (
    <section className={s.categories} id="categories">
      <div className={`${s.categories__container} container`}>
        <div className={s.categories__head}>
          <h2 className={s.categories__title}>Browse the category</h2>
          <Link href="/" className={`link-reset ${s.categories__see}`}>
            See all category
          </Link>
        </div>
        <Swiper
          breakpoints={{
            320: {
              spaceBetween: 15,
              slidesPerView: 'auto',
            },
            1280: {
              spaceBetween: 37,
              slidesPerView: 5,
            },
          }}
          className={s.categories__cards}
        >
          {fake.map((item) => (
            <SwiperSlide className={s.swiperCard} key={item.title}>
              <CategoryCard category={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategoriesLanding;

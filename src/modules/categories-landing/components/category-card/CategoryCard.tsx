import Image from 'next/image';
import Link from 'next/link';
import s from './CategoryCard.module.scss';

type Props = {
  category: {
    image?: string;
    title: string;
  };
};

const CategoryCard = ({ category }: Props) => {
  return (
    <article className={s.card}>
      <Link
        className={`link-reset ${s.card__wrapper}`}
        href={`/categories/${category.title}`}
      >
        <div className={s.card__picture}>
          <Image
            src={'icons/desktop.svg'}
            width={60}
            height={60}
            alt={`${category.title} - category | Batyr.blog`}
          />
        </div>
        <h4 className={s.card__title}>{category.title}</h4>
      </Link>
    </article>
  );
};

export default CategoryCard;

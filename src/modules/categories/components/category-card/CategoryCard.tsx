import Image from 'next/image';
import Link from 'next/link';
import s from './CategoryCard.module.scss';

type Props = {
  category: {
    image: string;
    title: string;
  };
};

const CategoryCard = ({ category }: Props) => {
  return (
    <article className={s.card}>
      <div className={s.card__picture}>
        <Image
          src={category.image}
          width={60}
          height={60}
          alt="Tailwind Banner | Batyr.blog"
        />
      </div>
      <h4 className={s.card__title}>
        <Link className="link-reset" href="/">
          {category.title}
        </Link>
      </h4>
    </article>
  );
};

export default CategoryCard;

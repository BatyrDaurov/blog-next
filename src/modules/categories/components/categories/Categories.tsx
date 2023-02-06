import Link from 'next/link';
import CategoryCard from '../category-card/CategoryCard';
import s from './Categories.module.scss';

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

const Categories = () => {
  return (
    <section className={s.categories}>
      <div className={`${s.categories__container} container`}>
        <div className={s.categories__head}>
          <h2 className={s.categories__title}>Browse the category</h2>
          <Link href="/" className={s.categories__see}>
            See all category
          </Link>
        </div>
        <ul className={`${s.categories__cards} list-reset`}>
          {fake.map((item) => (
            <li key={item.title}>
              <CategoryCard category={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;

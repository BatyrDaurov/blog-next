import { CategoriesType } from '../../../../@types';
import { ArticlesCard, ErrorMessage } from '../../../../components';
import s from './CategoryPage.module.scss';

type Props = {
  category: CategoriesType;
};

const CategoryPage = ({ category }: Props) => {
  if (!category) {
    return (
      <ErrorMessage message="I don't know this category" redirectURL="/" />
    );
  }
  return (
    <section className={s.category}>
      <div className={s.category__banner}>
        <h1 className={s.category__title}>{category.title} category</h1>
      </div>
      <div className={`container ${s.category__container}`}>
        <ul className={`${s.category__list} list-reset`}>
          {category.articles.map((article) => (
            <li key={article._id}>
              <ArticlesCard article={article} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoryPage;

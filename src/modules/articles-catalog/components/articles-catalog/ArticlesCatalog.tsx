import { ArticleType } from '../../../../@types';
import { PrimaryButton } from '../../../../UI/buttons';
import ArticlesCard from '../articles-card/ArticlesCard';
import ArticlesFilters from '../articles-filters/ArticlesFilters';
import s from './ArticlesCatalog.module.scss';

type Props = {
  catalog: ArticleType[];
};

const ArticlesCatalog = ({ catalog }: Props) => {
  return (
    <section className={s.catalog}>
      <div className="container">
        <ArticlesFilters />
        <div className={s.catalog__list}>
          <div className={s.catalog__cards}>
            {catalog.map((card) => (
              <ArticlesCard key={card._id} article={card} />
            ))}
          </div>
          <div className={s.catalog__btn}>
            <PrimaryButton>More Articles</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesCatalog;

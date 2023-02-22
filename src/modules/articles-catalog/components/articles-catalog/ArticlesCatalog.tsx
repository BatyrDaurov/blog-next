import { QueryState } from 'react-query/types/core/query';
import { ArticleType } from '../../../../@types';
import { PrimaryButton } from '../../../../UI/buttons';
import ArticlesCard from '../articles-card/ArticlesCard';
import ArticlesFilters from '../articles-filters/ArticlesFilters';
import s from './ArticlesCatalog.module.scss';

type Props = {
  queryState: QueryState;
  data: any;
};

const ArticlesCatalog = ({ queryState, data }: Props) => {
  return (
    <section className={s.catalog}>
      <div className="container">
        <ArticlesFilters results={data.length} />
        <div className={s.catalog__list}>
          <div className={s.catalog__cards}>
            {queryState.isFetching ? (
              <h2>Loading...</h2>
            ) : (
              data.map((card: ArticleType) => (
                <ArticlesCard key={card._id} article={card} />
              ))
            )}
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

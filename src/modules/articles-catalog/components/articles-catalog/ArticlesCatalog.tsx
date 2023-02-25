import Link from 'next/link';
import { QueryState } from 'react-query/types/core/query';
import { ArticleType } from '../../../../@types';
import { ErrorMessage } from '../../../../components';
import { useCustomSelector } from '../../../../hooks/store';
import { PrimaryButton } from '../../../../UI/buttons';
import ArticlesCard from '../articles-card/ArticlesCard';
import ArticlesFilters from '../articles-filters/ArticlesFilters';
import s from './ArticlesCatalog.module.scss';

type Props = {
  queryState: QueryState;
  data: any;
};

const ArticlesCatalog = ({ queryState, data }: Props) => {
  const user = useCustomSelector(state => state.LoginReducer.user)
  if (queryState.error) {
    return <ErrorMessage redirectURL='/' message='Ooooopss... what happened?' />
  }
  return (
    <section className={s.catalog}>
      <div className="container">
        <ArticlesFilters results={data.length} />
        {user.role === 'admin' && <Link href='/articles/create' className={`link-reset ${s.catalog__create}`}>Create article</Link>}
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

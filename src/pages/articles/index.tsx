import { GetServerSideProps } from 'next';
import { dehydrate } from 'react-query';
import { QueryState } from 'react-query/types/core/query';
import { PrimaryLayout } from '../../components';
import checkAuth from '../../middlewares/checkAuth';
import { ArticlesCatalog, queryArticles } from '../../modules/articles-catalog';
import { setUserData } from '../../modules/authorization-page/store/slice';
import { wrapper } from '../../store';

type Props = {
  articles: QueryState;
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    await checkAuth(ctx, store, setUserData);
    const queryClient = await queryArticles();

    return {
      props: {
        articles: dehydrate(queryClient).queries[0].state,
      },
    };
  });

const ArticlesPage = ({ articles }: Props) => {
  return (
    <PrimaryLayout title="All Articles | Batyr.blog">
      <main>
        <ArticlesCatalog data={articles.data} queryState={articles} />
      </main>
    </PrimaryLayout>
  );
};

export default ArticlesPage;

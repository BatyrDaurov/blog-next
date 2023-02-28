import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { dehydrate } from 'react-query';
import { QueryState } from 'react-query/types/core/query';
import { PrimaryLayout } from '../../components';
import { ArticlesCatalog, queryArticles } from '../../modules/articles-catalog';
import { setUserData } from '../../modules/pages/authorization-page/store/slice';
import { wrapper } from '../../store';
import checkAuth from '../../utils/checkAuth';

type Props = {
  articles: QueryState;
  token: string;
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { authToken } = parseCookies(ctx);
    await checkAuth(ctx, store, setUserData);
    const queryClient = await queryArticles();

    return {
      props: {
        articles: dehydrate(queryClient).queries[0].state,
        token: authToken,
      },
    };
  });

const ArticlesPage = ({ articles, token }: Props) => {
  return (
    <PrimaryLayout title="All Articles | Batyr.blog">
      <main>
        <ArticlesCatalog
          data={articles.data}
          queryState={articles}
          token={token}
        />
      </main>
    </PrimaryLayout>
  );
};

export default ArticlesPage;

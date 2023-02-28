import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { dehydrate } from 'react-query';
import { ArticleType } from '../../@types';
import { PrimaryLayout } from '../../components';
import { ArticlePage, queryArticle } from '../../modules/pages/article-page';
import { setUserData } from '../../modules/pages/authorization-page/store/slice';
import { wrapper } from '../../store';
import checkAuth from '../../utils/checkAuth';

type Props = {
  article: ArticleType | null;
  token: any;
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const token = parseCookies(ctx).authToken;
      await checkAuth(ctx, store, setUserData);
      const { id }: any = ctx.params;
      const queryClient = await queryArticle(id);
      return {
        props: { token, article: dehydrate(queryClient).queries[0].state.data },
      };
    } catch (error) {
      return {
        props: { token: '', article: null },
      };
    }
  });

const Article = ({ article, token }: Props) => {
  return (
    <PrimaryLayout title={`${article?.title} | Batyr.blog`}>
      <main>
        <ArticlePage article={article} token={token} />
      </main>
    </PrimaryLayout>
  );
};

export default Article;
